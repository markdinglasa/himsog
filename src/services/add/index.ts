import { addRecord } from "./addRecord";
import { addRecords } from "./addRecords";
import { addRecordReturnData } from "./addRecordReturnData";

class AddService {
  record: typeof addRecord;
  records: typeof addRecords;
  recordReturnData: typeof addRecordReturnData;

  constructor() {
    this.record = addRecord;
    this.records = addRecords;
    this.recordReturnData = addRecordReturnData;
  }
}

export default new AddService();
