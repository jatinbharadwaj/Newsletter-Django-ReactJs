import "./App.css";
import Newsletter from "./Newsletter";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DisplayAll from "./DisplayAll";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route path="/display">
              <DisplayAll />
            </Route>
            <Route path="/">
              <Newsletter />
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
