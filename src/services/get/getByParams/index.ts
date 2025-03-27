import { RowDataPacket } from "mysql2/promise";
import { pool } from "../../../config";

/**
 * Service to execute SQL queries with dynamic parameters
 * @param Query - SQL query template with placeholders (e.g., 'SELECT * FROM table WHERE field1 = ? AND field2 = ?')
 * @param Values - Array of actual values to be passed to the query
 * @returns Array<any> - Result set from the query
 */
export const getByParams = async (
  Query: string = "",
  Values: any[] = [],
): Promise<any[]> => {
  try {
    if (typeof Query !== "string" || !Query.trim()) {
      throw new Error("Query must be a non-empty string");
    }

    if (!Array.isArray(Values)) {
      throw new Error("Values must be an array");
    }

    if (!pool) {
      throw new Error("Database connection failed");
    }

    // Execute the query with values
    const [rows] = await pool.execute<RowDataPacket[]>(Query, Values);
    return rows;
  } catch (error: any) {
    console.error("--------------------------------------------------");
    console.error("Get-Service [getByParams]:", error.message);
    console.error("--------------------------------------------------");
    throw error;
  }
};

// SAMPLE USAGE
/*
(async () => {
  try {
    const response = await getByParams(
      "SELECT * FROM userterms WHERE Id = ? AND UserId = ?",
      [1, 16], // Passing actual values, not field names
    );
    console.log(response);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
})();
*/
