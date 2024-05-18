import './Top_Section.css';
import { Link } from 'react-router-dom';

function HeaderBar(){
    return (
        <div className="headerBar">
            <Link to="/"><div className="headerButton">Home</div></Link>
            <Link to="/CV"> <div className="headerButton">View CV</div></Link>
            <Link to="/Socials"><div className="headerButton">Socials</div></Link>
        </div>
    )
}

export default HeaderBar;