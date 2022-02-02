import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AdminPage from "./pages/admin/AdminPage";
import HomePage from "./pages/home/HomePage";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/admin">
          <AdminPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
