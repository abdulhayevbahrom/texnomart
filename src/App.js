import Home from "./routes/home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Admin from "./routes/admin/Admin";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/admin" component={Admin} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
