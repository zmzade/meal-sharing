import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TestComponent from "./components/TestComponent/TestComponent";
import Meals from "./components/Meals";
import Home from "./components/Home";
import MealWithId from "./components/MealWithId";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Footer from "./components/Footer";
import ReviewForm from "./components/ReviewForm";
import Autocomplete from "./components/Autocomplete";

function App() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch("api/meals")
      .then((res) => res.json())
      .then((data) => {
        setMeals(data);
      });
  }, []);

  return (
    <>
      <div className="app">
        <Router />
        <div className="sidebar">
          <Navbar fixed="top" />
        </div>
        <main>
          <div className="content">
            <Switch>
              <Route exact path="/meals/:id">
                <MealWithId meals={meals} />
              </Route>
              <Route exact path="/meals">
                <Autocomplete meals={meals} />
                <Meals meals={meals} />
              </Route>
              <Route exact path="/reviews/:id">
                <ReviewForm meals={meals} />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/">
                <Autocomplete meals={meals} />
                <Home meals={meals} />
              </Route>
              <Route exact path="*">
                <h3>Not Found</h3>
              </Route>

              <Route exact path="/test-component">
                <TestComponent></TestComponent>
              </Route>
            </Switch>
          </div>
        </main>
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default App;
