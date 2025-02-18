import { CertificateChannel } from "./certificateChannel";
import { HealthChannel } from "./healthChannel";
import { HealthConditionChannel } from "./healthConditionChannel";
import { IngredientChannel } from "./ingredientChannel";
import { MealChannel } from "./mealChannel";
import { MealPlanChannel } from "./mealPlanChannel";
import { NutritionFactChannel } from "./nutritionFactChannel";
import { ProfessionChannel } from "./professionChannel";
import { RecipeChannel } from "./recipeChannel";
import { SubscriptionChannel } from "./subscriptionChannel";
import { SubscriptionLineChannel } from "./subscriptionLineChannel";
import { UnitChannel } from "./unitChannel";
import { UserChannel } from "./userChannel";

export const SetupChannel = {
  ...MealChannel,
  ...CertificateChannel,
  ...HealthChannel,
  ...HealthConditionChannel,
  ...IngredientChannel,
  ...MealPlanChannel,
  ...ProfessionChannel,
  ...NutritionFactChannel,
  ...RecipeChannel,
  ...SubscriptionChannel,
  ...SubscriptionLineChannel,
  ...UnitChannel,
  ...UserChannel,
} as const;
