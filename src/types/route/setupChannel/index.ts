import { CertificateChannel } from "./certificateChannel";
import { HealthChannel } from "./healthChannel";
import { HealthConditionChannel } from "./healthConditionChannel";
import { IngredientChannel } from "./ingredientChannel";
import { MealChannel } from "./mealChannel";
import { MealPlanChannel } from "./mealPlanChannel";
import { MealPlanLineChannel } from "./mealPlanLine";
import { NutritionFactChannel } from "./nutritionFactChannel";
import { ProfessionChannel } from "./professionChannel";
import { ProfessionRatingChannel } from "./professionRatingChannel";
import { RecipeChannel } from "./recipeChannel";
import { RecipeLineChannel } from "./recipeLineChannel";
import { SubscriptionChannel } from "./subscriptionChannel";
import { SubscriptionLineChannel } from "./subscriptionLineChannel";
import { UnitChannel } from "./unitChannel";
import { UserChannel } from "./userChannel";
import { RequestAccessChannel } from "./requestAccessChannel";
import { ProfessionValidationChannel } from "./professionValidationChannel";
import { ProfessionInstituteChannel } from "./professionInstituteChannel";
import { ProfessionSpecialistChannel } from "./professionSpecialist";
import { PayTypeChannel } from "./payTypeChannel";
import { ArticleChannel } from "./articleChannel";
import { EventChannel } from "./eventChannel";
import { MedicalChannel } from "./medicalChannel";

export const SetupChannel = {
  ...EventChannel,
  ...ArticleChannel,
  ...MealChannel,
  ...CertificateChannel,
  ...HealthChannel,
  ...HealthConditionChannel,
  ...IngredientChannel,
  ...MealPlanChannel,
  ...MealPlanLineChannel,
  ...ProfessionChannel,
  ...ProfessionRatingChannel,
  ...RecipeLineChannel,
  ...NutritionFactChannel,
  ...RecipeChannel,
  ...SubscriptionChannel,
  ...SubscriptionLineChannel,
  ...UnitChannel,
  ...UserChannel,
  ...RequestAccessChannel,
  ...ProfessionValidationChannel,
  ...ProfessionInstituteChannel,
  ...ProfessionSpecialistChannel,
  ...PayTypeChannel,
  ...MedicalChannel,
} as const;
