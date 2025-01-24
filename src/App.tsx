import { Fragment } from "react";
import "./App.css";
import Todos from "./components/Todos";
import Projects from "./components/Projects";

const App: () => JSX.Element = () => {

  return (

    <Fragment>

      <Projects />
      
      {/* <Todos /> */}

    </Fragment>

  );
}

export default App;
