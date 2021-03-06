import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//components
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Seo from "./pages/Seo";
import Ranking from "./pages/Ranking";
import PayPerClick from "./pages/PayPerClick";
import Audit from "./pages/Audit";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import AboutSeo from "./pages/AboutSeo";
import Career from "./pages/Career";
import Footer from "./components/Footer";
import Reserve from "./components/Reserve";
import ScrollToTop from "./components/ScrollToTop";
// Animation
import { motion } from "framer-motion/dist/framer-motion";

function App() {
  return (
    <motion.div initial="hidden" animate="show">
      <Router>
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/seo" component={Seo} />
          <Route path="/ranking" component={Ranking} />
          <Route path="/ppc" component={PayPerClick} />
          <Route path="/audit" component={Audit} />
          <Route path="/about" component={About} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
          <Route path="/about-seo" component={AboutSeo} />
          <Route path="/career" component={Career} />
        </Switch>
        <Footer />
        <Reserve />
      </Router>
    </motion.div>
  );
}

export default App;
