import { CssVarsProvider } from "@mui/joy";

import { theme } from "~/styles";

import { AccentBackdrop } from "./components/AccentBackdrop";
import { ApiKeyModal } from "./components/ApiKeyModal";
import { ChatHeader } from "./components/ChatHeader";
import { ChatWindow } from "./components/ChatWindow";
import { Credits } from "./components/Credits";
import { InfoModal } from "./components/InfoModal";
import { Navbar } from "./components/Navbar";
import { Wrapper } from "./components/Wrapper";
import "./index.css";

function App() {
  return (
    <>
      <CssVarsProvider theme={theme} defaultMode="system">
        <ApiKeyModal />
        <InfoModal />
        <Wrapper>
          <AccentBackdrop>
            <Navbar />
            <ChatHeader></ChatHeader>
          </AccentBackdrop>
          <ChatWindow />
          <Credits />
        </Wrapper>
      </CssVarsProvider>
    </>
  );
}

export default App;
