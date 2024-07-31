import './Certs.css'

import dockerImage from '../Assets/certs/docker.png';
import kubImage from '../Assets/certs/kub.png';
import sustImage from '../Assets/certs/sust.png';
import hiltiImage from '../Assets/certs/hilti.png';

const Certs = () => {
    return (
        <div className='CVcontainer'>
            <div className='container'>
                <div className='title'>Competitions</div>
                <img src={sustImage} alt="cardImage" className="content" />
                <img src={hiltiImage} alt="cardImage" className="content" />
            </div>
            <div className='container'>
                <div className='title'>Courses</div>
                <img src={dockerImage} alt="cardImage" className="content" />
                <img src={kubImage} alt="cardImage" className="content" />
            </div>
        </div>
    )
}


export default Certs;