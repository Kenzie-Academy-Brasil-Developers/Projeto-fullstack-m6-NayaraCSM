import { UserProvider } from "./providers/UserContext";
import { RoutesMain } from "./routes/RoutesMain";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <UserProvider>
        <RoutesMain />
      </UserProvider>
    </>
  );
}

export default App;
