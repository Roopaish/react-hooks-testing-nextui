import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import reportWebVitals from "./reportWebVitals";
import router from "./utils/router";
import { darkTheme, lightTheme } from "./utils/theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <ThemeProvider
      defaultTheme="system"
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className,
      }}
    >
      <NextUIProvider>
        <Layout>
          <RouterProvider router={router} />
        </Layout>
      </NextUIProvider>
    </ThemeProvider>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
