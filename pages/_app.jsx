import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";
import {extendTheme} from "@chakra-ui/react"
import { AnimatePresence } from "framer-motion";

const colors = {
  brand:{
    900:"#1a365d",
    800:"#153e75",
    700:"#2a69ac"
  },
}

const theme = extendTheme({colors})

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
    <AnimatePresence>
    <Component {...pageProps} />

    </AnimatePresence>
      
    </ChakraProvider>
  );
}

export default MyApp;
