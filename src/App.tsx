import {
  Component,
  PureComponent,
  Car,
  TypescriptCar,
  Counter,
  ImageLoader
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
      <h3>Class Components: PropTypes/Typings</h3>
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
      <hr />
      <h3>Class Components: State</h3>
      <Counter initialCount={0} />
      <hr />
      <h3>Class Components: Lifecycle</h3>
      <ImageLoader url="https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg" />
    </div>
  );
}
