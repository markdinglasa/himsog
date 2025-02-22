import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { RootLayout } from "./components";
import { Roles, RouteChannel } from "./types";
import { PersistContext, RequireAuth } from "./context";
import { MissingPage, PageLogin, UnauthorizedPage } from "./pages";
import { AdminLayout } from "./containers";

export const AppRouter = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<RootLayout />}>
        <Route path={RouteChannel.INDEX} element={<PageLogin />} />
        <Route element={<PersistContext />}>
          <Route
            element={
              <RequireAuth allowedRoles={[Roles.superuser, Roles.admin]} />
            }
          >
            <Route element={<AdminLayout />}></Route>
          </Route>
        </Route>
        <Route path={RouteChannel.R403} element={<UnauthorizedPage />} />
        <Route path={RouteChannel.R404} element={<MissingPage />} />
      </Route>
    </>,
  ),
);
