import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Index } from "./pages/Index.tsx";
import { Layout } from "./layout.tsx";
import "./index.css";
import { NewTask } from "./pages/NewTask.tsx";
import { EditTask } from "./pages/EditTask.tsx";
import { ViewTask } from "./pages/ViewTask.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Index />
      </Layout>
    ),
  },
  {
    path: "/new",
    element: (
      <Layout>
        <NewTask />
      </Layout>
    ),
  },
  {
    path: "/edit/:id",
    element: (
      <Layout>
        <EditTask />
      </Layout>
    ),
  },
  {
    path: "/task/:id",
    element: (
      <Layout>
        <ViewTask />
      </Layout>
    ),
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
