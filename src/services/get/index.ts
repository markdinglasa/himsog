import { getByFields } from "./getByFields";
import { getById } from "./getById";
import { getByIdAndQuery } from "./getByIdAndQuery";
import { getByQuery } from "./getByQuery";
import { getByTable } from "./getByTable";
import { getByParams } from "./getByParams";

class GetService {
  byFields: typeof getByFields;
  byId: typeof getById;
  byQuery: typeof getByQuery;
  byTable: typeof getByTable;
  byIdAndQuery: typeof getByIdAndQuery;
  byParams: typeof getByParams;
  constructor() {
    this.byFields = getByFields;
    this.byId = getById;
    this.byQuery = getByQuery;
    this.byTable = getByTable;
    this.byParams = getByParams;
    this.byIdAndQuery = getByIdAndQuery;
  }
}

export default new GetService();
