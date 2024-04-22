import githubLOGO from '../Assets/github_LOGO.png';
import { useNavigate, NavLink } from 'react-router-dom';

const Card = ({ item }) => {
    const navigate = useNavigate();
    
    const handleCardClick = (cardId) => {
        navigate(`/card-details/${cardId}`);
    }

    const redirectTo = (link, event) => {
        event.stopPropagation();
        window.location.href = link;
    }

    return (
    <div className="allCards">
        {item.map((Val) => {
        return (
            <div 
            className="cardContainer" 
            key={Val.id}
            onClick={() => handleCardClick(Val.id)}>
                <div className="cardTags">{Val.type_display}</div>
                <img src={Val.image} alt="cardImage" className="cardBG" />
                <div className="cardGrid">
                    <img src={Val.image} alt="cardImage" className="cardSideImage" />
                    <div className="cardTitle">{Val.title}</div>
                    <p className="cardContent">{Val.content}</p>
                    <div className="cardButtons">
                        <NavLink to={Val.demo} exact><button className="DemoButton" onClick={(event) => redirectTo(Val.demo, event)}>Link to Demo</button></NavLink>
                        <NavLink to={Val.code}><button className="CodeButton"><img src={githubLOGO} alt="" /> Link to Code</button></NavLink>
                    </div>
                </div>
            </div>
            );
        })}
    </div>
    );
};

export default Card;
