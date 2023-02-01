import {PortfolioHeader} from "./components/PortfolioHeader";
import {AboutMe} from "./components/AboutMe";
import {Projects} from "./components/Projects";

export const App = () => {
  return (
    <div className="container pt-3">
        <PortfolioHeader />
        <AboutMe />
        <Projects />
    </div>
  );
}

export default App;
