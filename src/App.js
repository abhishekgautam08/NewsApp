import "./App.css";
import Navbar from "./components/Navbar";
import React, { useState } from "react";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar progress={progress} height={3} color="red" />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News setProgress={setProgress} key="home" section="home" />
            }
          ></Route>
          <Route
            exact
            path="/business"
            element={
              <News
                setProgress={setProgress}
                key="business"
                section="business"
              />
            }
          ></Route>
          <Route
            exact
            path="/movies"
            element={
              <News setProgress={setProgress} key="movies" section="movies" />
            }
          ></Route>
          <Route
            exact
            path="/food"
            element={
              <News setProgress={setProgress} key="food" section="food" />
            }
          ></Route>
          <Route
            exact
            path="/health"
            element={
              <News setProgress={setProgress} key="health" section="health" />
            }
          ></Route>
          <Route
            exact
            path="/science"
            element={
              <News setProgress={setProgress} key="science" section="science" />
            }
          ></Route>

          <Route
            exact
            path="/sports"
            element={
              <News setProgress={setProgress} key="sports" section="sports" />
            }
          ></Route>
          <Route
            exact
            path="/technology"
            element={
              <News
                setProgress={setProgress}
                key="technology"
                section="technology"
              />
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
