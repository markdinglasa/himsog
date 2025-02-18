import { pool } from "../../../config";
import { DBTable } from "../../../shared";

export const updateRecords = async (
  Table: DBTable,
  Fields: string[],
  Values: any[][], // 2D array for each row's field values
  Ids: number[],
): Promise<boolean> => {
  let connection;
  try {
    // Input validation
    if (
      !Object.values(DBTable).includes(Table) ||
      typeof Table !== "string" ||
      !Table.trim()
    ) {
      throw new Error("Table must be provided as a valid non-empty string.");
    }

    if (
      !Array.isArray(Fields) ||
      Fields.length === 0 ||
      Fields.some((field) => typeof field !== "string")
    ) {
      throw new Error("Fields must be a non-empty array of strings.");
    }

    if (!Array.isArray(Values) || Values.length !== Ids.length) {
      throw new Error("Values array must match the length of Ids.");
    }

    if (!Array.isArray(Ids) || Ids.length === 0) {
      throw new Error("Ids must be a non-empty array of numbers.");
    }

    // Get connection from pool
    connection = await pool.getConnection();

    // Start transaction
    await connection.beginTransaction();

    // Create prepared statement
    const setClause = Fields.map((field) => `\`${field}\` = ?`).join(", ");
    const sql = `UPDATE \`${Table}\` SET ${setClause} WHERE Id = ?`;

    // Execute all updates
    for (let i = 0; i < Ids.length; i++) {
      const rowValues = [...Values[i], Ids[i]]; // Append Id to the row values
      await connection.execute(sql, rowValues);
    }

    // Commit transaction
    await connection.commit();
    return true;
  } catch (error: any) {
    // Rollback transaction if error occurs
    if (connection) await connection.rollback();
    throw new Error(`Bulk update failed: ${error.message}`);
  } finally {
    // Release connection back to pool
    if (connection) connection.release();
  }
};
