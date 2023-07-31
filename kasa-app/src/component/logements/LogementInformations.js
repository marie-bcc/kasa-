import { useParams } from 'react-router-dom';
import data from '/Users/marie/Desktop/KASA/kasa-/kasa-app/src/annoncesLogements.json';
import NotFound from '../../pages/NotFound';
import Carousel from '../Carousel';
import StarRating from "./StarsRating";


function LogementDetails() {
  const { id } = useParams();
  const logement = data.find(log => log.id === id);

  if (!logement) {
    return (
      <NotFound></NotFound>
    )
  }

  return (
    <div className='logementDetails'>
    
      
      <Carousel pictures={logement.pictures}></Carousel>

      <div className='logementInformations'>
        <h1>{logement.title}</h1>
        <p>{logement.location}</p>
      </div>
      

        <div className="informations">
            <div className='hostInformations'>
                <img className='hostPicture' src={logement.host.picture} alt={logement.host.name} />
                <p>{logement.host.name}</p>
            </div>

                <StarRating rating={logement.rating}></StarRating>


        </div>





      <div className='description-container'>
       
      </div>



    </div>
  );
}

export default LogementDetails;
