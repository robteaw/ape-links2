import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//components
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Seo from "./pages/Seo";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/seo" component={Seo} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
