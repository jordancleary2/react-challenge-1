export const NavBar = () => {
 return (
     <nav className={"navbar navbar-light row justify-content-center"}>
         <div className={"container col-auto"}>
             {/* eslint-disable-next-line */}
             <a className={"nav-item nav-link active px-4"} href={"#"}>Home</a>
             <a className={"nav-item nav-link px-4"} href={"#about-me"}>About Me</a>
             <a className={"nav-item nav-link px-4"} href={"#projects"}>My Projects</a>
             <a className={"nav-item nav-link px-4"} href={"#contact-me"}>Contact Me</a>
         </div>
     </nav>
 );
}