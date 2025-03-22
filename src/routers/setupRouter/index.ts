import UserRouter from "./userRouter";
import CertificateRouter from "./certificateRouter";
import HealthConditionRouter from "./healthConditionRouter";
import HealthRouter from "./healthRouter";
import IngredientRouter from "./ingredientRouter";
import MealPlanRouter from "./mealPlanRouter";
import MealRouter from "./mealRouter";
import NutritionFactRouter from "./nutritionFactRouter";
import ProfessionRouter from "./professionRouter";
import ProfessionRatingRouter from "./professionRatingRouter";
import RecipeRouter from "./recipeRouter";
import RecipeLineRouter from "./recipeLineRouter";
import SubcriptionLineRouter from "./subscriptionLineRouter";
import SubscriptionRouter from "./subscriptionRouter";
import MealPlanLineRouter from "./mealPlanLineRouter";
import RequestAccessRouter from "./requestAccessRouter";
import UnitRouter from "./unitRouter";
import ProfessionValidation from "./professionValidationRouter";
import express from "express";

const Router = express.Router();
Router.use(UserRouter);
Router.use(CertificateRouter);
Router.use(HealthConditionRouter);
Router.use(HealthRouter);
Router.use(IngredientRouter);
Router.use(MealPlanRouter);
Router.use(MealPlanLineRouter);
Router.use(MealRouter);
Router.use(NutritionFactRouter);
Router.use(ProfessionRouter);
Router.use(ProfessionRatingRouter);
Router.use(RecipeRouter);
Router.use(RecipeLineRouter);
Router.use(SubcriptionLineRouter);
Router.use(SubscriptionRouter);
Router.use(RequestAccessRouter);
Router.use(UnitRouter);
Router.use(ProfessionValidation);

export default Router;
