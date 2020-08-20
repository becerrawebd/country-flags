import React, { useState, useEffect } from "react";
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
import { saveToLocalStorage, getFromLocalStorage } from "./utils/localStorage";
import { light, dark } from "./themes";

function App() {
  const isDarkMode = getFromLocalStorage("darkMode");

  const [darkMode, setDarkMode] = useState(
    isDarkMode === undefined ? false : isDarkMode
  );

  useEffect(() => {
    saveToLocalStorage("darkMode", darkMode);
  }, [darkMode]);

  return (
    <ThemeProvider theme={darkMode ? dark : light}>
      <Provider store={store}>
        <Router>
          <Container>
            <Header isDarkMode={darkMode} setDarkMode={setDarkMode} />
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
