import { BASE_URL } from "../../../shared";

export const ProfessionChannel = {
  PROFESSION: `${BASE_URL}/setup/profession`,
  PROFESSION_ID: `${BASE_URL}/setup/profession/:Id`,
  PROFESSION_PARENT: `${BASE_URL}/setup/professions/user/:Id`,
  PROFESSION_TRANSACTION: `${BASE_URL}/setup/profession/:NutritionistId/:AdvocateId`,
};
