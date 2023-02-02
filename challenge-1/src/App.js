import {PortfolioHeader} from "./components/PortfolioHeader";
import {AboutMe} from "./components/AboutMe";
import {Projects} from "./components/Projects";
import {PortfolioFooter} from "./components/PortfolioFooter";

export const App = () => {
  return (
    <div className="container pt-3">
        <PortfolioHeader />
        <AboutMe />
        <Projects />
        <PortfolioFooter />
    </div>
  );
}

export default App;
