import { Component } from "react";
import HERO from './img/HERO.jpg';
import explain from './img/explain-1.jpg';

class LandingPage extends Component {
    render () {
        return (
            <>
            <body id="home">
                <img id="hero-img" src={HERO} alt="this is the hero img"/>
                <section className="explanation">
                    <img id="explain-1" src={explain} alt="guy on computer"></img>
                    <p id="explain-1-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </section>
            </body>
            </>
        )
    }
}

export default LandingPage;
