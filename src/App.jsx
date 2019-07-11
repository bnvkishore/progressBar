import React from "react";
import { IntlProvider } from "react-intl";
import { Switch, Route } from "react-router-dom";
import ProgressBar from "./containers/ProgressBar";

function App() {
  return (
    <IntlProvider locale={navigator.language}>
      <Switch>
        <Route path="/" exact component={ProgressBar} />
      </Switch>
    </IntlProvider>
  );
}

export default App;
