import { BrowserRouter, Switch, Route } from "react-router-dom";
import Page1 from "../pages/page1";
import Error from "../pages/error";
import CodeSplit from "../pages/codesplit";
import ForwardRefExample from "../pages/ref";
import Hoc from "../pages/hoc";
import Portals from "../pages/portals";
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
          <Route path="/ref">
            <ForwardRefExample />
          </Route>
          <Route path="/hoc">
            <Hoc />
          </Route>
          <Route path="/portals">
            <Portals />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
