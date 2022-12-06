import './About.css';
import { Component } from "react";

class AboutProfile extends Component {

    render() {
        return (
            <>
                <span id="aboutCards">
                    <div className="card1">
                        <div className="card1-inner">
                            <h4 id="nameheader">Cody De La Torre</h4>
                            <img
                                src="https://avatars.githubusercontent.com/u/103235685?v=4"
                                alt="Creator PFP"
                                width="200px"
                            />
                        </div>
                    </div>
                    <div className="card2">
                        <div className="card2-inner">
                            <h4 id="nameheader">Tracy Oakley</h4>
                            <img
                                src="https://avatars.githubusercontent.com/u/113792883?v=4"
                                alt="Creator PFP"
                                width="200px"
                            />
                            <div>
                                <ul>
                                    <ul>fef</ul>
                                    <ul>dfs</ul>
                                    <ul>sdfcs</ul>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="card3">
                        <div className="card3-inner">
                            <h4 id="nameheader">Devon Terry</h4>
                            <img
                                src="https://avatars.githubusercontent.com/u/114770792?v=4"
                                alt="Creator PFP"
                                width="200px"
                            />
                        </div>
                    </div>
                    <div className="card4">
                        <div className="card4-inner">
                            <h4 id="nameheader">Todd Wolden</h4>
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