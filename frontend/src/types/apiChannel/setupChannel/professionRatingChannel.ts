import { BASE_URL } from "../../../shared";

export const ProfessionRatingChannel = {
  PROFESSION_RATING: `${BASE_URL}/setup/profession-rating`,
  PROFESSION_RATING_ID: `${BASE_URL}/setup/profession-rating/:Id`,
  PROFESSION_RATING_PARENT: `${BASE_URL}/setup/profession-rating/profession?=:Id`,
  PROFESSION_RATING_GET: `${BASE_URL}/setup/profession-rating/:NutritionistId/:AdvocateId`,
  PROFESSION_RATINGS: `${BASE_URL}/setup/profession-ratings?nutritionist=:nutritionist&page=:page`,
};
