import './Top_Section.css';
import IntroImage from '../Assets/IntroPhoto.jpeg'

function Intro(){
    return (
        <div className="IntroContainer">
            <div className="IntroWords">
                Hello,
                <div className="IntroIAM">
                    I am <span className="IntroName">JianCong</span>
                </div>
                A Student of Singapore Polytechnic |
                <br/>
                Aspiring Software Developer
            </div>
            <img src={IntroImage} alt="" className='IntroImage'></img>
        </div>
    )
}

export default Intro;