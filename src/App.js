import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Bio from "./pages/about/bio/Bio";
import Projects from "./pages/about/projects/Projects";
import Skills from "./pages/about/skills/Skills";
import Certificates from "./pages/about/certificates/Certificates";
import Contact from "./pages/contact/Contact";
import Layout from './Layout';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/about" element={<Layout />}>
            <Route index Component={About} />
            <Route path="bio" Component={Bio} />
            <Route path="skills" Component={Skills} />
            <Route path="certificates" Component={Certificates} />
            <Route path="projects" Component={Projects} />
          </Route>
          <Route path="/contact" Component={Contact} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
