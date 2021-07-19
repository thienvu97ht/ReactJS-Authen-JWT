import "./App.css";
import { Route, Switch } from "react-router-dom";
import NotFound from "./components/NotFound";
import LoginFeature from "./features/Login";
import HomeFeature from "./features/Home";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={HomeFeature} exact />
        <Route path="/login" component={LoginFeature} />

        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
