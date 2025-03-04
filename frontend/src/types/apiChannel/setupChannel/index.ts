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
import { EventChannel } from "./eventChannel";
import { ArticleChannel } from "./articleChannel";
import { RequestAccessChannel } from "./requestAccessChannel";

export const SetupChannel = {
  ...MealChannel,
  ...CertificateChannel,
  ...HealthChannel,
  ...HealthConditionChannel,
  ...IngredientChannel,
  ...EventChannel,
  ...ArticleChannel,
  ...MealPlanChannel,
  ...MealPlanLineChannel,
  ...ProfessionChannel,
  ...ProfessionRatingChannel,
  ...RecipeLineChannel,
  ...NutritionFactChannel,
  ...RecipeChannel,
  ...RequestAccessChannel,
  ...SubscriptionChannel,
  ...SubscriptionLineChannel,
  ...UnitChannel,
  ...UserChannel,
} as const;
