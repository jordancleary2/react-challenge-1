import "./AboutMe.css"

export const AboutMe = () => {
    return (
        <section className={"row justify-content-center"} id={"about-me"}>
            <div className={"col-auto"}>
                <img src={"me.jpeg"} alt={"Photograph of self"} className={"profile-photo rounded-circle"}/>
                <div className={"side-info-panel"}>
                    <ul className={"list-unstyled"}>
                        <li>
                            <strong>Name:</strong> Jordan James Cleary
                        </li>
                        <li>
                            <strong>Job Title:</strong> Software Engineer
                        </li>
                        <li>
                            <strong>Bio:</strong> I am a predominantly back-end developer, currently learning React in order to improve my front-end skills.
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}