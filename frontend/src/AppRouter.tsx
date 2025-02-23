import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { RootLayout } from "./components";
import { Roles, RouteChannel } from "./types";
import { PersistContext, RequireAuth } from "./context";
import {
  AdminDashboardPage,
  AdminIngredientDetailsPage,
  AdminIngredientNewPage,
  AdminIngredientViewPage,
  AdminNotificationPage,
  AdminProfilePage,
  AdminSubscriptionDetailsPage,
  AdminSubscriptionNewPage,
  AdminSubscriptionViewPage,
  AdminUnitDetailsPage,
  AdminUnitNewPage,
  AdminUnitViewPage,
  AdminUserDetailsPage,
  AdminUserNewPage,
  AdminUserViewPage,
  ClientAppoinmentDetailsPage,
  ClientAppoinmentNewPage,
  ClientAppoinmentViewPage,
  ClientDashboardPage,
  ClientHealthViewPage,
  ClientIngredientDetailsPage,
  ClientIngredientViewPage,
  ClientMealPlanDetailsPage,
  ClientMealPlanNewPage,
  ClientMealPlanViewPage,
  ClientNotificationPage,
  ClientProfilePage,
  ClientReminderDetailsPage,
  ClientReminderNewPage,
  ClientReminderViewPage,
  ClientSusbcriptionDetailsPage,
  ClientSusbcriptionNewPage,
  ClientSusbcriptionViewPage,
  MissingPage,
  NutritionistDashboardPage,
  PageLogin,
  PublicAboutUsPage,
  PublicArticlePage,
  PublicContactUsPage,
  PublicEventPage,
  PublicFAQsPage,
  PublicHomePage,
  PublicPrivacyPolicyPage,
  PublicSignUpPage,
  PublicTermsOfServicePage,
  UnauthorizedPage,
  UnderConstruction,
} from "./pages";
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
          <Route path={RouteChannel.INDEX} element={<PublicHomePage />} />
          <Route path={RouteChannel.ABOUT_US} element={<PublicAboutUsPage />} />
          <Route
            path={RouteChannel.CONTACT_US}
            element={<PublicContactUsPage />}
          />
          <Route path={RouteChannel.EVENT} element={<PublicEventPage />} />
          <Route path={RouteChannel.ARTICLE} element={<PublicArticlePage />} />
          <Route path={RouteChannel.SIGN_IN} element={<PageLogin />} />
          <Route path={RouteChannel.SIGN_UP} element={<PublicSignUpPage />} />
          <Route
            path={RouteChannel.PRIVACY_POLICY}
            element={<PublicPrivacyPolicyPage />}
          />
          <Route
            path={RouteChannel.TERMS_AND_CONDITIONS}
            element={<PublicTermsOfServicePage />}
          />
          <Route path={RouteChannel.FAQ} element={<PublicFAQsPage />} />
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
                element={<AdminDashboardPage />}
              />
              <Route
                path={RouteChannel.ADMIN_SETTINGS}
                element={<UnderConstruction />}
              />
              <Route
                path={RouteChannel.ADMIN_PROFIFLE}
                element={<AdminProfilePage />}
              />
              <Route
                path={RouteChannel.ADMIN_NOTIFICATIONS}
                element={<AdminNotificationPage />}
              />
              <Route
                path={RouteChannel.ADMIN_MESSENGER}
                element={<UnderConstruction />}
              />
              <Route
                path={RouteChannel.ADMIN_MESSENGER_NEW}
                element={<UnderConstruction />}
              />
              <Route
                path={RouteChannel.ADMIN_USER}
                element={<AdminUserViewPage />}
              />
              <Route
                path={RouteChannel.ADMIN_USER_NEW}
                element={<AdminUserNewPage />}
              />
              <Route
                path={RouteChannel.ADMIN_USER_DETAILS}
                element={<AdminUserDetailsPage />}
              />
              <Route
                path={RouteChannel.ADMIN_INGREDIENT}
                element={<AdminIngredientViewPage />}
              />
              <Route
                path={RouteChannel.ADMIN_INGREDIENT_NEW}
                element={<AdminIngredientNewPage />}
              />
              <Route
                path={RouteChannel.ADMIN_INGREDIENT_DETAILS}
                element={<AdminIngredientDetailsPage />}
              />
              <Route
                path={RouteChannel.ADMIN_UNIT}
                element={<AdminUnitViewPage />}
              />
              <Route
                path={RouteChannel.ADMIN_UNIT_NEW}
                element={<AdminUnitNewPage />}
              />
              <Route
                path={RouteChannel.ADMIN_UNIT_DETAILS}
                element={<AdminUnitDetailsPage />}
              />
              <Route
                path={RouteChannel.ADMIN_SUBSCRIPTION}
                element={<AdminSubscriptionViewPage />}
              />
              <Route
                path={RouteChannel.ADMIN_SUBSCRIPTION_NEW}
                element={<AdminSubscriptionNewPage />}
              />
              <Route
                path={RouteChannel.ADMIN_SUBSCRIPTION_DETAILS}
                element={<AdminSubscriptionDetailsPage />}
              />
              <Route
                path={RouteChannel.ADMIN_FEEDBACK}
                element={<UnderConstruction />}
              />
              <Route
                path={RouteChannel.ADMIN_FEEDBACK_DETAILS}
                element={<UnderConstruction />}
              />
            </Route>
          </Route>
          {/*ADMINISTRATOR*/}
          {/*CLIENT*/}
          <Route element={<RequireAuth allowedRoles={[Roles.client]} />}>
            <Route element={<ClientLayout />}>
              <Route
                path={RouteChannel.CLIENT_DASHBOARD}
                element={<ClientDashboardPage />}
              />
              <Route
                path={RouteChannel.CLIENT_PROFIFLE}
                element={<ClientProfilePage />}
              />
              <Route
                path={RouteChannel.CLIENT_NOTIFICATIONS}
                element={<ClientNotificationPage />}
              />
              <Route
                path={RouteChannel.CLIENT_SETTINGS}
                element={<UnderConstruction />}
              />
              <Route
                path={RouteChannel.CLIENT_MESSENGER}
                element={<UnderConstruction />}
              />
              <Route
                path={RouteChannel.CLIENT_HEALTH}
                element={<ClientHealthViewPage />}
              />
              <Route
                path={RouteChannel.CLIENT_INGREDIENT}
                element={<ClientIngredientViewPage />}
              />
              <Route
                path={RouteChannel.CLIENT_INGREDIENT_DETAILS}
                element={<ClientIngredientDetailsPage />}
              />
              <Route
                path={RouteChannel.CLIENT_APPOINTMENT}
                element={<ClientAppoinmentViewPage />}
              />
              <Route
                path={RouteChannel.CLIENT_APPOINTMENT_NEW}
                element={<ClientAppoinmentNewPage />}
              />
              <Route
                path={RouteChannel.CLIENT_APPOINTMENT_DETAILS}
                element={<ClientAppoinmentDetailsPage />}
              />
              <Route
                path={RouteChannel.CLIENT_MEAL_PLAN}
                element={<ClientMealPlanViewPage />}
              />
              <Route
                path={RouteChannel.CLIENT_MEAL_PLAN_NEW}
                element={<ClientMealPlanNewPage />}
              />
              <Route
                path={RouteChannel.CLIENT_MEAL_PLAN_DETAILS}
                element={<ClientMealPlanDetailsPage />}
              />
              <Route
                path={RouteChannel.CLIENT_REMINDER}
                element={<ClientReminderViewPage />}
              />
              <Route
                path={RouteChannel.CLIENT_REMIINDER_NEW}
                element={<ClientReminderNewPage />}
              />
              <Route
                path={RouteChannel.CLIENT_REMIINDER_DETAILS}
                element={<ClientReminderDetailsPage />}
              />
              <Route
                path={RouteChannel.CLIENT_SUBSCRIPTION}
                element={<ClientSusbcriptionViewPage />}
              />
              <Route
                path={RouteChannel.CLIENT_SUBSCRIPTION_NEW}
                element={<ClientSusbcriptionNewPage />}
              />
              <Route
                path={RouteChannel.CLIENT_SUBSCRIPTION_DETAILS}
                element={<ClientSusbcriptionDetailsPage />}
              />
            </Route>
          </Route>
          {/*CLIENT*/}
          {/*NUTRITIONIST*/}
          <Route element={<RequireAuth allowedRoles={[Roles.nutritionist]} />}>
            <Route element={<NutritionistLayout />}>
              <Route
                path={RouteChannel.NUTRITIONIST_DASHBOARD}
                element={<NutritionistDashboardPage />}
              />
            </Route>
          </Route>
          {/*NUTRITIONIST*/}
        </Route>

        <Route path={RouteChannel.R403} element={<UnauthorizedPage />} />
        <Route path={RouteChannel.R404} element={<MissingPage />} />
      </Route>
    </>,
  ),
);
