import {PortfolioHeader} from "./components/PortfolioHeader";
import {AboutMe} from "./components/AboutMe";

export const App = () => {
  return (
    <div className="container pt-3">
        <PortfolioHeader />
        <AboutMe />
    </div>
  );
}

export default App;
