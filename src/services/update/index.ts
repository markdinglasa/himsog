import { updateRecord } from "./updateRecord";
import { updateByCondition } from "./updateByCondition";
import { updateRecords } from "./updateRecords";

class UpdateService {
  record: typeof updateRecord;
  recordByCondition: typeof updateByCondition;
  records: typeof updateRecords;
  constructor() {
    this.record = updateRecord;
    this.records = updateRecords;
    this.recordByCondition = updateByCondition;
  }
}

export default new UpdateService();
