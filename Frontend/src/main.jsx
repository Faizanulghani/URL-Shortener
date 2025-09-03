import { createRoot } from "react-dom/client";
import "./index.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routing/routeTree.js";
import store from "./store/store.js";
import { Provider } from "react-redux";
import { queryClient } from "./queryClient";

const router = createRouter({
  routeTree,
  context: {
    queryClient,
    store,
  },
});

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </Provider>
);
