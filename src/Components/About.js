import './About.css';
import { Component } from "react";

class AboutProfile extends Component {

    render() {
        return (
            <>
                <span id="aboutCards">
                    <div className="card1">
                        <div className="card1-inner">
                            <h2 id="h1P">Cody De La Torre</h2>
                            <img
                                src="https://avatars.githubusercontent.com/u/103235685?v=4"
                                alt="Creator PFP"
                                width="200px"
                            />
                        </div>
                    </div>
                    <div className="card2">
                        <div className="card2-inner">
                            <h2 id="h1P">Tracy Oakley</h2>
                            <img
                                src="https://avatars.githubusercontent.com/u/113792883?v=4"
                                alt="Creator PFP"
                                width="200px"
                            />
                        </div>
                    </div>
                    <div className="card3">
                        <div className="card3-inner">
                            <h2 id="h1P">Devon Terry</h2>
                            <img
                                src="https://avatars.githubusercontent.com/u/114770792?v=4"
                                alt="Creator PFP"
                                width="200px"
                            />
                        </div>
                    </div>
                    <div className="card4">
                        <div className="card4-inner">
                            <h2 id="h1P">Todd Wolden</h2>
                            <img
                                src="https://avatars.githubusercontent.com/u/112423639?v=4"
                                alt="Creator PFP"
                                width="200px"
                            />
                        </div>
                    </div>
                </span>



            </>
        )
    }
};

export default AboutProfile;