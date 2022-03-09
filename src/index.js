import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AuthProviderWrapper } from "./context/auth.context";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import "@fontsource/open-sans/400.css";
import "@fontsource/montserrat/700.css";

const mirrorTheme = extendTheme({
  fonts: {
    heading: "Montserrat, sans-serif",
    body: "Open Sans, sans-serif",
  },
  components: {
    Checkbox: {
      variants: {
        outline: {
          _focus: {
            borderColor: "purple.200",
            boxShadow: "0 0 0 3px var(--chakra-colors-purple-100)",
          },
        },
      },
    },
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
              borderColor: "purple.200",
              boxShadow: "0 0 0 3px var(--chakra-colors-purple-100)",
            },
          },
        },
      },
      defaultProps: {
        variants: "outline",
      },
    },
    Button: {
      variants: {
        solid: {
          _focus: {
            borderColor: "#A68DAD",
            boxShadow: "0 0 0 3px var(--chakra-colors-purple-100)",
          },
        },
        outline: {
          _focus: {
            borderColor: "purple.200",
            boxShadow: "0 0 0 3px var(--chakra-colors-purple-100)",
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
