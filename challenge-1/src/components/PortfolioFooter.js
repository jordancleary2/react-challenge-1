import "./PortfolioFooter.css";

export const PortfolioFooter = () => {
    return(
        <footer id={"contact-me"}>
            <h2 className={"display-6"}>Contact Me</h2>
            <p>
                <span className={"contact-option"}>
                    <i className="fa-brands fa-linkedin ps-1"></i><a className={"link-dark ps-1 pe-2"} href={"https://linkedin.com/in/jordancleary"}>LinkedIn</a>
                </span>
                <span className={"contact-option"}>
                    <i className="fa-brands fa-square-github ps-1"></i><a className={"link-dark ps-1 pe-2"} href={"https://github.com/jordancleary"}>GitHub</a>
                </span>
                <span className={"contact-option"}>
                    <i className="fa-solid fa-square-envelope ps-1"></i><a className={"link-dark ps-1 pe-2"} href={"mailto:jordancleary@example.com"}>jordancleary@example.com</a>
                </span>
                <span className={"contact-option"}>
                    <i className="fa-solid fa-square-phone ps-1"></i><a className={"link-dark ps-1 pe-2"} href={"tel:07700 123000"}>07700&nbsp;123000</a>
                </span>
            </p>
        </footer>
    );
}