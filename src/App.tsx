import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { RecoilRoot } from "recoil";

import Main from "./components/Main";

export default function App() {
  // 2. Use at the root of your app
  return (
    <RecoilRoot>
      <ChakraProvider>
        <Main />
      </ChakraProvider>
    </RecoilRoot>
  );
}
