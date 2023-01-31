export const NavBar = () => {
 return (
     <nav className={"navbar navbar-light"}>
         <div className={"container-fluid mx-1"}>
             <a className={"nav-link active"} href={"#"}>Home</a>
             <a className={"nav-link"} href={"#about-me"}>About Me</a>
             <a className={"nav-link"} href={"#projects"}>Projects</a>
             <a className={"nav-link"} href={"#contact-me"}>Contact Me</a>
         </div>
     </nav>
 );
 // TODO: fix horrific width of nav bar, but get all the content done first.
}