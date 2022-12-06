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
                    <p id="explain-1-para">Welcome to My Virtual Portfolio! You can select your favorite stocks with our easy to use application and enjoy the effortless tracking of your stock's daily change as your fortune grows.</p>
                </section>
            </body>
            </>
        )
    }
}

export default LandingPage;
