import { Link } from "react-router-dom";

function LogementCard({ logement }) {
    return (
        <div className='logementCard'>
            <Link className="linkToLogement" to={`/logement/${logement.id}`}>
                <img className='logementImage' src={logement.cover} alt={logement.title} />
                <h1 className='logementTitle'>{logement.title}</h1>
            </Link>
        </div>
    );
}

export default LogementCard;



