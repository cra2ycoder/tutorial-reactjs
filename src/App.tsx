import { BrowserRouter, Switch, Route } from "react-router-dom";
import Page1 from "../pages/page1";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>React JS</h1>
      <hr />
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <Page1 />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
