import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TestComponent from "./components/TestComponent/TestComponent";
import Home from "./Home";
import Meals from "./Meals";
import MealId from "./MealId";

function App() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch("api/meals")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMeals(data);
      });
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/meals/:id">
          <MealId />
        </Route>
        <Route exact path="/meals">
          <Meals meals={meals} />
        </Route>
        <Route exact path="/">
          <Home meals={meals} />
        </Route>
        <Route exact path="/test-component">
          <TestComponent></TestComponent>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
