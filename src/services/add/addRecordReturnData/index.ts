import { ResultSetHeader, RowDataPacket } from "mysql2/promise";
import { pool } from "../../../config";
import { DBTable } from "../../../shared";

export const addRecordReturnData = async (
  Table: DBTable = DBTable.t000,
  Fields: Array<string> = [],
  Types: Array<any> = [],
  Datas: Array<any> = [],
): Promise<any> => {
  const connection = await pool.getConnection();
  await connection.beginTransaction();

  try {
    // Validation (unchanged)
    if (
      !Object.values(DBTable).includes(Table) ||
      typeof Table !== "string" ||
      !Table.trim()
    )
      throw new Error("Table must be provided as a valid non-empty string");

    if (
      !Array.isArray(Fields) ||
      Fields.length === 0 ||
      Fields.some((field) => typeof field !== "string")
    )
      throw new Error("Field must be a non-empty array of strings");

    if (!Types.every((field) => field !== undefined)) {
      const undefinedIndex = Types.findIndex((field) => field === undefined);
      throw new Error(`Type for field'${undefinedIndex + 1}' is undefined`);
    }

    if (!Datas.every((data) => data !== undefined)) {
      const undefinedIndex = Datas.findIndex((data) => data === undefined);
      throw new Error(`Data for field'${undefinedIndex + 1}' is undefined`);
    }

    if (Fields.length !== Datas.length || Fields.length !== Types.length)
      throw new Error("Parameters are empty, or their lengths do not match");

    if (!pool) throw new Error("Connection failed");

    // Insert the record
    const placeholders = Fields.map(() => "?").join(", ");
    const sqlQuery = `INSERT INTO \`${Table}\` (${Fields.join(", ")}) VALUES (${placeholders})`;

    const values = [...Datas];
    const [insertResult] = await connection.execute<ResultSetHeader>(
      sqlQuery,
      values,
    );

    if (insertResult.affectedRows < 1)
      throw new Error("No records were inserted");

    // Get the ID of the newly inserted record
    const insertId = insertResult.insertId;

    // Fetch the newly inserted record
    const fetchQuery = `SELECT * FROM \`${Table}\` WHERE id = ?`;
    const [record] = await connection.execute<RowDataPacket[]>(fetchQuery, [
      insertId,
    ]);

    // Commit the transaction
    await connection.commit();

    // Return the fetched record
    return record[0]; // Now TypeScript knows `record` is an array of RowDataPacket
  } catch (error: any) {
    // Rollback the transaction in case of error
    await connection.rollback();
    logging.log("----------------------------------------");
    logging.error("Add-Service [addRecordReturnData]:", error.message);
    logging.log("----------------------------------------");
    throw error;
  } finally {
    // Release the connection back to the pool
    connection.release();
  }
};
