import { useParams } from 'react-router-dom';
import data from "../../annoncesLogements.json";
import NotFound from '../../pages/NotFound';
import Carousel from '../Carousel';
import StarRating from "./StarsRating";
import Collapse from '../Collapse';

function LogementDetails() {
  const { id } = useParams();
  const logement = data.find(log => log.id === id);
  if (!logement) {
    return (
      <NotFound></NotFound>
    )
  }
  const { tags } = logement;
  return (
    <div className='logementDetails'>
      <Carousel pictures={logement.pictures}></Carousel>

      <div className='logementInformations'>
        <div className='containerTitre'>

          <div className='logementTitre' >
            <h1>{logement.title}</h1>
            <p>{logement.location}</p>
          </div>
          <div className='containerTags'>
            {tags.map((tag, index) => (
              <span key={index} className='tags'>
                {tag}
              </span>
            ))}
          </div>

        </div>
        <div className="informations">
          <div className='hostInformations'>
            <img className='hostPicture' src={logement.host.picture} alt={logement.host.name} />
            <p>{logement.host.name}</p>
          </div>
          <StarRating rating={logement.rating}></StarRating>
        </div>

      </div>

      <div className='containerToggle'>
        <Collapse title={"Description"} content={logement.description} />
        <Collapse title={"Equipments"} content={logement.equipments} />
      </div>

    </div>
  );
}

export default LogementDetails;
