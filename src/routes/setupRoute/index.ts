import UserRoute from "./userRoute";
import CertificateRoute from "./certificateRoute";
import HealthConditionRoute from "./healthConditionRoute";
import HealthRoute from "./healthRoute";
import IngredientRoute from "./ingredientRoute";
import MealPlanRoute from "./mealPlanRoute";
import MealRoute from "./mealRoute";
import NutritionFactRoute from "./nutritionFactRoute";
import ProfessionRoute from "./professionRoute";
import ProfessionRatingRoute from "./professionRatingRoute";
import RecipeRoute from "./recipeRoute";
import RecipeLineRoute from "./recipeLineRoute";
import SubcriptionLineRoute from "./subscriptionLineRoute";
import SubscriptionRoute from "./subscriptionRoute";
import MealPlanLineRoute from "./mealPlanLineRoute";
import RequestAccessRoute from "./requestAccessRoute";

import express from "express";

const router = express.Router();
router.use(UserRoute);
router.use(CertificateRoute);
router.use(HealthConditionRoute);
router.use(HealthRoute);
router.use(IngredientRoute);
router.use(MealPlanRoute);
router.use(MealPlanLineRoute);
router.use(MealRoute);
router.use(NutritionFactRoute);
router.use(ProfessionRoute);
router.use(ProfessionRatingRoute);
router.use(RecipeRoute);
router.use(RecipeLineRoute);
router.use(SubcriptionLineRoute);
router.use(SubscriptionRoute);
router.use(RequestAccessRoute);

export default router;
