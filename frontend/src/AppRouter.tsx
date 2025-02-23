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
  MissingPage,
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
} from "./pages";
import { AdminLayout, PublicLayout } from "./containers";

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
          <Route
            element={
              <RequireAuth allowedRoles={[Roles.superuser, Roles.admin]} />
            }
          >
            <Route element={<AdminLayout />}>
              <Route
                path={RouteChannel.DASHBOARD}
                element={<AdminDashboardPage />}
              />
            </Route>
          </Route>
        </Route>

        <Route path={RouteChannel.R403} element={<UnauthorizedPage />} />
        <Route path={RouteChannel.R404} element={<MissingPage />} />
      </Route>
    </>,
  ),
);
