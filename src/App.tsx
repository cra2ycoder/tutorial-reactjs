import { BrowserRouter, Switch, Route } from "react-router-dom";
import Page1 from "../pages/page1";
import Error from "../pages/error";
import CodeSplit from "../pages/codesplit";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>React JS</h1>
      <hr />
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Page1 />
          </Route>
          <Route path="/error">
            <Error />
          </Route>
          <Route path="/codesplit">
            <CodeSplit />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
