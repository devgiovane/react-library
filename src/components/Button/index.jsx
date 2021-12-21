import './index.css';
import play from '../../assets/play.png';

function Button({ onClick }) {
    return(
        <div className="container">
            <button className="button" role="button" onClick={onClick}>
                <img src={play} alt="Play" />
            </button>
        </div>
    )
}

export default Button;
