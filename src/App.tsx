import {
  Component,
  PureComponent,
  Car,
  TypescriptCar
} from "../code/components/class";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>React JS</h1>
      <hr />
      <h3>Components</h3>
      <Component />
      <PureComponent />
      <hr />
      <h3>Components: PropTypes</h3>
      <Car
        name="bmw"
        model="x1"
        number="TN 00 1829"
        isFourWheelDriving={true}
      />
      <TypescriptCar
        name="bmw"
        number="TN 00 1829"
        model="x1"
        isFourWheelDriving={true}
      />
    </div>
  );
}
