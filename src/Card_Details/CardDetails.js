import './CardDetails.css';
import { useParams } from "react-router-dom"
import { useNavigate, NavLink } from 'react-router-dom';

import githubLOGO from '../Assets/github_LOGO.png';
import arrowBack from '../Assets/arrow_back.png';

import Data from '../Data';
import CDitems from './CDitems';
import CDteam from './CDteam';

const CardDetails = () => {
    let { id } = useParams();
    const navigate = useNavigate();
    
    // Get the card details
    const card = Data.find(card => card.id === id);
    
    const navigateBack = () => {
        navigate(-1);
    }

    return (
        <div className="cdContainer">
            <button className="cdArrowBack" onClick={() => navigateBack() }><img src={arrowBack} alt="" /> Go Back</button>
            <div className="cdMainTitle">{card.title}</div>
            <img src={card.image} alt="" className="cdImage" />
            <div className="cdInfoContainer">
                <div className="cdTitle">{card.title} - ({card.organization})</div>
                <div className="cdContent">{card.content}</div>
                <div className="cdCreated">Created: {card.created_date}</div>
                <div className="cdUpdated">Updated: {card.updated_date}</div>
                <div className="cdLanguages">Languages: <CDitems items={card.language} /></div>
                <div className="cdLibraries">Libraries: <CDitems items={card.framework} /></div>
                <div className="cdTeam"><CDteam items={card.team} /></div>
                <div className="cdButtons">
                        <NavLink to={card.demo} target="_blank"><button className="DemoButton">Link to Demo</button></NavLink>
                        <NavLink to={card.code} target="_blank"><button className="CodeButton"><img src={githubLOGO} alt="" /> Link to Code</button></NavLink>
                </div>
            </div>
        </div>
    )
}

export default CardDetails;