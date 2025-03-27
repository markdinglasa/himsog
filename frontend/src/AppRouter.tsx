import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { RootLayout } from "./components";
import { Roles, RouteChannel } from "./types";
import { PersistContext, RequireAuth } from "./context";
import Page from "./pages";
import {
  AdminLayout,
  ClientLayout,
  NutritionistLayout,
  PublicLayout,
} from "./containers";

export const AppRouter = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<RootLayout />}>
        <Route element={<PublicLayout />}>
          <Route path={RouteChannel.INDEX} element={<Page.Public.Home />} />
          <Route
            path={RouteChannel.ABOUT_US}
            element={<Page.Public.AboutUs />}
          />
          <Route
            path={RouteChannel.PRICING}
            element={<Page.Public.Pricing />}
          />
          <Route
            path={RouteChannel.HOW_IT_WORKS}
            element={<Page.Public.HowItWorks />}
          />
          <Route
            path={RouteChannel.CONTACT_US}
            element={<Page.Public.ContactUs />}
          />
          <Route
            path={RouteChannel.EVENT}
            element={<Page.Public.Event.View />}
          />
          <Route
            path={RouteChannel.EVENT_DETIALS}
            element={<Page.Public.Event.Details />}
          />
          <Route
            path={RouteChannel.EVENT_NEW}
            element={<Page.Public.Event.New />}
          />
          <Route
            path={RouteChannel.ARTICLE}
            element={<Page.Public.Article.View />}
          />
          <Route
            path={RouteChannel.ARTICLE_NEW}
            element={<Page.Public.Article.New />}
          />
          <Route
            path={RouteChannel.ARTICLE_DETAILS}
            element={<Page.Public.Article.Details />}
          />
          <Route path={RouteChannel.SIGN_IN} element={<Page.Login />} />
          <Route path={RouteChannel.SIGN_UP} element={<Page.Public.SignUp />} />
          <Route
            path={RouteChannel.PRIVACY_POLICY}
            element={<Page.Public.PrivacyPolicy />}
          />
          <Route
            path={RouteChannel.TERMS_AND_CONDITIONS}
            element={<Page.Public.PrivacyPolicy />}
          />
          <Route path={RouteChannel.FAQ} element={<Page.Public.FAQs />} />
        </Route>

        {/*REQUIRES AUTHENTICATION*/}
        <Route element={<PersistContext />}>
          {/*ADMINISTRATOR*/}
          <Route
            element={
              <RequireAuth allowedRoles={[Roles.superuser, Roles.admin]} />
            }
          >
            <Route element={<AdminLayout />}>
              <Route
                path={RouteChannel.ADMIN_DASHBOARD}
                element={<Page.Admin.Dashboard />}
              />
              <Route
                path={RouteChannel.ADMIN_PRIVACY_POLICY}
                element={<Page.Admin.PrivacyPolicy />}
              />
              <Route
                path={RouteChannel.ADMIN_TERMS_AND_CONDITION}
                element={<Page.Admin.TermsConditions />}
              />
              <Route
                path={RouteChannel.ADMIN_MESSENGER}
                element={<Page.Admin.Messenger />}
              />
              <Route
                path={RouteChannel.ADMIN_EVENT}
                element={<Page.Admin.Event.View />}
              />
              <Route
                path={RouteChannel.ADMIN_EVENT_DETAILS}
                element={<Page.Admin.Event.Details />}
              />
              <Route
                path={RouteChannel.ADMIN_SETTINGS}
                element={<Page.Admin.Settings />}
              />
              <Route
                path={RouteChannel.ADMIN_PROFIFLE}
                element={<Page.Admin.Profile />}
              />
              <Route
                path={RouteChannel.ADMIN_NOTIFICATIONS}
                element={<Page.Admin.Notification />}
              />
              <Route
                path={RouteChannel.ADMIN_MESSENGER}
                element={<Page.UnderConstruction />}
              />
              <Route
                path={RouteChannel.ADMIN_MESSENGER_NEW}
                element={<Page.UnderConstruction />}
              />
              <Route
                path={RouteChannel.ADMIN_USER}
                element={<Page.Admin.Setups.User.View />}
              />
              <Route
                path={RouteChannel.ADMIN_USER_NEW}
                element={<Page.Admin.Setups.User.New />}
              />
              <Route
                path={RouteChannel.ADMIN_USER_DETAILS}
                element={<Page.Admin.Setups.User.Details />}
              />

              <Route
                path={RouteChannel.ADMIN_UNIT}
                element={<Page.Admin.Setups.Unit.View />}
              />
              <Route
                path={RouteChannel.ADMIN_UNIT_NEW}
                element={<Page.Admin.Setups.Unit.New />}
              />
              <Route
                path={RouteChannel.ADMIN_UNIT_DETAILS}
                element={<Page.Admin.Setups.Unit.Details />}
              />
              <Route
                path={RouteChannel.ADMIN_SUBSCRIPTION}
                element={<Page.Admin.Setups.Subscription.View />}
              />
              <Route
                path={RouteChannel.ADMIN_SUBSCRIPTION_NEW}
                element={<Page.Admin.Setups.Subscription.New />}
              />
              <Route
                path={RouteChannel.ADMIN_SUBSCRIPTION_DETAILS}
                element={<Page.Admin.Setups.Subscription.Details />}
              />
              <Route
                path={RouteChannel.ADMIN_FEEDBACK}
                element={<Page.UnderConstruction />}
              />
              <Route
                path={RouteChannel.ADMIN_FEEDBACK_DETAILS}
                element={<Page.UnderConstruction />}
              />
            </Route>
          </Route>
          {/*ADMINISTRATOR*/}
          {/*CLIENT*/}

          <Route
            element={
              <RequireAuth allowedRoles={[Roles.superuser, Roles.client]} />
            }
          >
            <Route
              path={RouteChannel.CLIENT_PROFILE_SETUP}
              element={<Page.Client.Configuration.ProfileSetup />}
            />
            <Route
              path={RouteChannel.CLIENT_HEALTH_SETUP}
              element={<Page.Client.Configuration.HealthSetup />}
            />
            <Route
              path={RouteChannel.CLIENT_DIETERY_PREFERENCE_SETUP}
              element={<Page.Client.Configuration.DieterySetup />}
            />
            <Route
              path={RouteChannel.CLIENT_ALLERGEN_SETUP}
              element={<Page.Client.Configuration.AllergenSetup />}
            />
            <Route element={<ClientLayout />}>
              <Route
                path={RouteChannel.CLIENT_DASHBOARD}
                element={<Page.Client.Dashboard />}
              />
              <Route
                path={RouteChannel.CLIENT_PRIVACY_POLICY}
                element={<Page.Client.PrivacyPolicy />}
              />
              <Route
                path={RouteChannel.CLIENT_TERMS_AND_CONDITIONS}
                element={<Page.Client.TermsConditions />}
              />
              <Route
                path={RouteChannel.CLIENT_SETTINGS}
                element={<Page.Client.Settings />}
              />
              <Route
                path={RouteChannel.CLIENT_PROFIFLE}
                element={<Page.Client.Profile />}
              />
              <Route
                path={RouteChannel.CLIENT_NOTIFICATIONS}
                element={<Page.Client.Notification />}
              />
              <Route
                path={RouteChannel.CLIENT_MESSENGER}
                element={<Page.Client.Messenger />}
              />
              <Route
                path={RouteChannel.CLIENT_HEALTH}
                element={<Page.Client.Health.View />}
              />
              <Route
                path={RouteChannel.CLIENT_EVENT}
                element={<Page.Client.Event.View />}
              />
              <Route
                path={RouteChannel.CLIENT_EVENT_NEW}
                element={<Page.Client.Event.New />}
              />
              <Route
                path={RouteChannel.CLIENT_EVENT_DETAILS}
                element={<Page.Client.Event.Details />}
              />
              <Route
                path={RouteChannel.CLIENT_ARTICLE}
                element={<Page.Client.Article.View />}
              />
              <Route
                path={RouteChannel.CLIENT_ARTICLE_NEW}
                element={<Page.Client.Article.New />}
              />
              <Route
                path={RouteChannel.CLIENT_ARTICLE_DETAILS}
                element={<Page.Client.Article.Details />}
              />
              <Route
                path={RouteChannel.CLIENT_INGREDIENT}
                element={<Page.Client.Ingredient.View />}
              />
              <Route
                path={RouteChannel.CLIENT_INGREDIENT_DETAILS}
                element={<Page.Client.Ingredient.Details />}
              />
              <Route
                path={RouteChannel.CLIENT_APPOINTMENT}
                element={<Page.Client.Appointment.View />}
              />
              <Route
                path={RouteChannel.CLIENT_APPOINTMENT_NEW}
                element={<Page.Client.Appointment.New />}
              />
              <Route
                path={RouteChannel.CLIENT_APPOINTMENT_DETAILS}
                element={<Page.Client.Appointment.Details />}
              />
              <Route
                path={RouteChannel.CLIENT_MEAL_PLAN}
                element={<Page.Client.MealPlan.View />}
              />
              <Route
                path={RouteChannel.CLIENT_MEAL_PLAN_NEW}
                element={<Page.Client.MealPlan.New />}
              />
              <Route
                path={RouteChannel.CLIENT_MEAL_PLAN_DETAILS}
                element={<Page.Client.MealPlan.Details />}
              />
              <Route
                path={RouteChannel.CLIENT_REMINDER}
                element={<Page.Client.Reminder.View />}
              />
              <Route
                path={RouteChannel.CLIENT_REMIINDER_NEW}
                element={<Page.Client.Reminder.New />}
              />
              <Route
                path={RouteChannel.CLIENT_REMIINDER_DETAILS}
                element={<Page.Client.Reminder.Details />}
              />
              <Route
                path={RouteChannel.CLIENT_SUBSCRIPTION}
                element={<Page.Client.Subscription.View />}
              />
              <Route
                path={RouteChannel.CLIENT_SUBSCRIPTION_NEW}
                element={<Page.Client.Subscription.New />}
              />
              <Route
                path={RouteChannel.CLIENT_SUBSCRIPTION_DETAILS}
                element={<Page.Client.Subscription.Details />}
              />
            </Route>
          </Route>
          {/*CLIENT*/}
          {/*NUTRITIONIST*/}
          <Route
            element={
              <RequireAuth
                allowedRoles={[Roles.superuser, Roles.nutritionist]}
              />
            }
          >
            <Route
              path={RouteChannel.NUTRITIONIST_PROFILE_SETUP}
              element={<Page.Nutritionist.Configuration.ProfileSetup />}
            />
            <Route
              path={RouteChannel.NUTRITIONIST_PROFESSION_SETUP}
              element={<Page.Nutritionist.Configuration.ProfessionSetup />}
            />
            <Route
              path={RouteChannel.NUTRITIONIST_CERTIFICATE_SETUP}
              element={<Page.Nutritionist.Configuration.CertificateSetup />}
            />
            <Route element={<NutritionistLayout />}>
              <Route
                path={RouteChannel.NUTRITIONIST_DASHBOARD}
                element={<Page.Nutritionist.Dashboard />}
              />
              <Route
                path={RouteChannel.NUTRITIONIST_TERMS_AND_CONDITIONS}
                element={<Page.Nutritionist.TermsCondition />}
              />
              <Route
                path={RouteChannel.NUTRITIONIST_PRIVACY_POLICY}
                element={<Page.Nutritionist.PrivacyPolicy />}
              />
              <Route
                path={RouteChannel.NUTRITIONIST_SETTINGS}
                element={<Page.Nutritionist.Settings />}
              />
              <Route
                path={RouteChannel.NUTRITIONIST_NOTIFICATIONS}
                element={<Page.Nutritionist.Notification />}
              />
              <Route
                path={RouteChannel.NUTRITIONIST_MESSENGER}
                element={<Page.Nutritionist.Messenger />}
              />
              <Route
                path={RouteChannel.NUTRITIONIST_INGREDIENT}
                element={<Page.Nutritionist.Ingredient.View />}
              />
              <Route
                path={RouteChannel.NUTRITIONIST_INGREDIENT_NEW}
                element={<Page.Nutritionist.Ingredient.New />}
              />
              <Route
                path={RouteChannel.NUTRITIONIST_INGREDIENT_DETAILS}
                element={<Page.Nutritionist.Ingredient.Details />}
              />
              <Route
                path={RouteChannel.NUTRITIONIST_ARTICLE}
                element={<Page.Nutritionist.Article.View />}
              />
              <Route
                path={RouteChannel.NUTRITIONIST_ARTICLE_DETAILS}
                element={<Page.Nutritionist.Article.Details />}
              />
              <Route
                path={RouteChannel.NUTRITIONIST_ARTICLE_NEW}
                element={<Page.Nutritionist.Article.New />}
              />
              <Route
                path={RouteChannel.NUTRITIONIST_EVENT}
                element={<Page.Nutritionist.Event.View />}
              />
              <Route
                path={RouteChannel.NUTRITIONIST_EVENT_NEW}
                element={<Page.Nutritionist.Event.New />}
              />
              <Route
                path={RouteChannel.NUTRITIONIST_EVENT_DETAILS}
                element={<Page.Nutritionist.Event.Details />}
              />
              <Route
                path={RouteChannel.NUTRITIONIST_MEAL_PLAN_REQUEST}
                element={<Page.Nutritionist.Requests.View />}
              />
              <Route
                path={RouteChannel.NUTRITIONIST_MEAL_PLAN_REQUEST_DETAILS}
                element={<Page.Nutritionist.Requests.Details />}
              />
              <Route
                path={RouteChannel.NUTRITIONIST_MEAL_PLAN}
                element={<Page.Nutritionist.MealPlan />}
              />
              <Route
                path={RouteChannel.NUTRITIONIST_APPOINTMENT}
                element={<Page.Nutritionist.Appointment.View />}
              />
              <Route
                path={RouteChannel.NUTRITIONIST_APPOINTMENT_DETAILS}
                element={<Page.Nutritionist.Appointment.Details />}
              />
              <Route
                path={RouteChannel.NUTRITIONIST_APPOINTMENT_NEW}
                element={<Page.Nutritionist.Appointment.New />}
              />
              <Route
                path={RouteChannel.NUTRITIONIST_SUBSCRIPTION}
                element={<Page.Nutritionist.Subscription.View />}
              />
              <Route
                path={RouteChannel.NUTRITIONIST_SUBSCRIPTION_NEW}
                element={<Page.Nutritionist.Subscription.New />}
              />
              <Route
                path={RouteChannel.NUTRITIONIST_SUBSCRIPTION_DETAILS}
                element={<Page.Nutritionist.Subscription.Details />}
              />
            </Route>
          </Route>
          {/*NUTRITIONIST*/}
        </Route>

        <Route path={RouteChannel.R403} element={<Page.Unauthorized />} />
        <Route path={RouteChannel.R404} element={<Page.Missing />} />
      </Route>
    </>,
  ),
);
