import LogementCard from './LogementCard';
import data from '/Users/marie/Desktop/KASA/kasa-/kasa-app/src/annoncesLogements.json';

function LogementsList() {
    return(
        <div className="logementContainer">
            {data.slice(0, 6).map((logement, index) => (
                <LogementCard key={index} logement={logement} />
            ))}
        </div>
    )   
}

export default LogementsList

