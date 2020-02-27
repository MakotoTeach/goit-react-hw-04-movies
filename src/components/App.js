import React from "react";
import routes from "../routes";
import { BrowserRouter, Route, Switch,} from "react-router-dom";
import Layout from "./Layout/Layout";
import HomePage from "../Pages/HomePage/HomePage";
import MoviesPage from "../Pages/MoviesPage/MoviesPage";
import MovieDetailsPage from "../Pages/MovieDetailsPage/MovieDetailsPage";
import NotFound from "../Pages/NotfoundPage/NotFoundPage";

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path={routes.HOME} component={HomePage} />
        <Route path={routes.MOVIE_DETAILS} component={MovieDetailsPage} />
        <Route path={routes.MOVIES} component={MoviesPage} />
        <Route component={NotFound}/>
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
