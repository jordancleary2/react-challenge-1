import "./AboutMe.css"

export const AboutMe = () => {
    return (
        <section className={"row justify-content-center"} id={"about-me"}>
            <h2 className={"display-6 text-center"}>About Me</h2>
            <div className={"col-md-4"}>
                <div className={"card mb-4"}>
                    <img src={"me.jpeg"} alt={"Photograph of self"} className={"profile-photo rounded-circle align-self-center mt-3"}/>
                    <div className={"side-info-panel card-body"}>
                        <ul className={"card-text list-unstyled"}>
                            <li>
                                <strong>Job Title:</strong> Software Engineer
                            </li>
                            <li>
                                <strong>Bio:</strong> I am a predominantly back-end developer, currently learning React in order to improve my front-end skills.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}