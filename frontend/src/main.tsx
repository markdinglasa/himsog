import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AppRouter } from "./AppRouter";
import "./styles/GlobalStyles.css";
import { RouterProvider } from "react-router-dom";
import { AuthProvider, GlobalStateProvider } from "./context";
import { QueryClient as QC, QueryClientProvider } from "@tanstack/react-query";

const QueryClient = new QC();
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={QueryClient}>
      <AuthProvider>
        <GlobalStateProvider>
          <RouterProvider router={AppRouter} />
        </GlobalStateProvider>
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>,
);
