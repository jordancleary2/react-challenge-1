import "./PortfolioHeader.css";
import {NavBar} from "./NavBar";

export const PortfolioHeader = () => {
    return(
        <header>
            <h1 className={"display-4"}>Jordan James Cleary</h1>
            <NavBar />
        </header>
    );
}