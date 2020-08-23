import React from "react";
import "./App.css";
import {
  Container,
  Header,
  Filters,
  CountryList,
  CountryPage,
  Footer,
} from "./components";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import store from "./redux/store";
import { light, dark } from "./themes";
import { useLocalStorage } from "./hooks/useLocalStorage"

function App() {

  const [darkMode,setDarkMode] = useLocalStorage('darkMode',false)

  return (
    <ThemeProvider theme={darkMode ? dark : light}>
      <Provider store={store}>
        <Router>
          <Container>
            <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
            <Switch>
              <Route exact path="/">
                <Filters />
                <CountryList />
              </Route>
              <Route exact path="/country/:id">
                <CountryPage />
              </Route>
              <Route path="*">
                <Redirect to="/" />
              </Route>
            </Switch>
            <Footer />
          </Container>
        </Router>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
