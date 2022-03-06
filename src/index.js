import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AuthProviderWrapper } from "./context/auth.context";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

const mirrorTheme = extendTheme({
  components: {
    Input: {
      variants: {
        outline: {
          field: {
            backgroundColor: "background-white",
            padding: "14.5px 16px",
            height: "auto",
            borderRadius: "8px",
            minHeight: "56px",
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: "#C4CADD",
            _focus: {
              borderColor: "purple.300",
              boxShadow: "0 0 0 3px var(--chakra-colors-purple-100)",
            },
          },
        },
      },
      defaultProps: {
        variants: "outline",
      },
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProviderWrapper>
        <ChakraProvider theme={mirrorTheme}>
          <App />
        </ChakraProvider>
      </AuthProviderWrapper>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
