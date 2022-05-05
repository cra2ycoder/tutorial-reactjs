import { BrowserRouter, Switch, Route } from "react-router-dom";
import Page1 from "../pages/page1";
import Page2 from "../pages/page2";
import Hooks from "../pages/hooks";
import Error from "../pages/error";
import CodeSplit from "../pages/codesplit";
import ForwardRefExample from "../pages/ref";
import Hoc from "../pages/hoc";
import Portals from "../pages/portals";
import Profiler from "../pages/profiler";
import RenderProps from "../pages/renderprops";
import DOMElements from "../pages/dom";

// import { decode } from "html-entities";
// import sanitizeHtml from "sanitize-html";
import xss from "xss";

import "./styles.css";

export default function App() {
  const brokenURL =
    "?sort=%7b%22sort%22%3a[%7b%22field%22%3a%22a74qo%3c%5c%2fscript%3e%3cscript%3ealert(1)%3c%5c%2fscript%3ebpbkb%22%2c%22direction%22%3a%22ASC%22%7d%2c%7b%22field%22%3a%22sort_number_price%22%2c%22direction%22%3a%22ASC%22%7d]%7d";

  const multiEncodeURL =
    // "sort%3D%257b%2522sort%2522%253a%5B%257b%2522field%2522%253a%2522a74qo%253c%255c%252fscript%253e%253cscript%253ealert(1)%253c%255c%252fscript%253ebpbkb%2522%252c%2522direction%2522%253a%2522ASC%2522%257d%252c%257b%2522field%2522%253a%2522sort_number_price%2522%252c%2522direction%2522%253a%2522ASC%2522%257d%5D%257d";
    "sort%2525252525253D%252525252525257b%2525252525252522sort%2525252525252522%252525252525253a%2525252525255B%252525252525257b%2525252525252522field%2525252525252522%252525252525253a%2525252525252522a74qo%252525252525253c%252525252525255c%252525252525252fscript%252525252525253e%252525252525253cscript%252525252525253ealert(1)%252525252525253c%252525252525255c%252525252525252fscript%252525252525253ebpbkb%2525252525252522%252525252525252c%2525252525252522direction%2525252525252522%252525252525253a%2525252525252522ASC%2525252525252522%252525252525257d%252525252525252c%252525252525257b%2525252525252522field%2525252525252522%252525252525253a%2525252525252522sort_number_price%2525252525252522%252525252525252c%2525252525252522direction%2525252525252522%252525252525253a%2525252525252522ASC%2525252525252522%252525252525257d%2525252525255D%252525252525257d";

  const decodeURLToBase = (url) => {
    let tempDecodeURL = url;
    while (tempDecodeURL !== decodeURIComponent(tempDecodeURL)) {
      tempDecodeURL = decodeURIComponent(tempDecodeURL);
    }
    return tempDecodeURL;
  };

  const decodeURL = decodeURLToBase(multiEncodeURL);
  // console.log({ decodeURL });

  console.log("complete decode url: ", decodeURLToBase(multiEncodeURL));

  const xssCleaned = xss(decodeURL, {
    whiteList: {},
    stripIgnoreTag: true, // filter out all HTML not in the whilelist
    stripIgnoreTagBody: ["script"]
  });

  console.log({ decodeURL });
  console.log("xss", xssCleaned);

  // const encodeURL = encodeURIComponent(xssCleaned);
  // console.log({ encodeURL });
  // console.log({ decodeURL });
  // const sanitizeURL = sanitizeHtml(decodeURL);

  // console.log({ sanitizeURL });

  return (
    <div className="App">
      <h1>React JS</h1>
      <hr />
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Page1 />
          </Route>
          <Route exact path="/page2">
            <Page2 />
          </Route>
          <Route exact path="/hooks">
            <Hooks />
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
          <Route path="/profiler">
            <Profiler />
          </Route>
          <Route path="/renderprops">
            <RenderProps />
          </Route>
          <Route path="/dom">
            <DOMElements />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
