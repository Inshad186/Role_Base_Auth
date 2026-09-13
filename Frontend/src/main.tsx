import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Toaster } from "sonner";

import App from "./App";
import store from "./redux/store";
import "./index.css";
import "./i18n/config";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />

      <Toaster
      position="top-right"
        toastOptions={{
          style: {
            background: "#22c55e",
            color: "#000",
            border: "1px solid #16a34a",
          },
        }}
      />
    </BrowserRouter>
  </Provider>
);