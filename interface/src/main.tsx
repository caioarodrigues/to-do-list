import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import { Layout } from "./Layout.tsx";
import "./index.css";
import { NewTask } from "./pages/NewTask.tsx";
import { EditTask } from "./pages/EditTask.tsx";
import { ViewTask } from "./pages/ViewTask.tsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <App />
      </Layout>
    ),
  },
  {
    path: "/new",
    element: (
      <Layout>
        <h2>New Task</h2>
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
  }
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
