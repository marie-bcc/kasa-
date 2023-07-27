import { useParams } from 'react-router-dom';
import data from '/Users/marie/Desktop/KASA/kasa-/kasa-app/src/annoncesLogements.json';
import ReactStars from "react-rating-stars-component";
import NotFound from '../../pages/NotFound';
import Carousel from '../Carousel';


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
      <p>Localisation : {logement.location}</p>
      </div>
      

      <div className='hostInformations'>
        <img className='hostPicture' src={logement.host.picture} alt={logement.host.name} />
        <p>{logement.host.name}</p>
        
      </div>


      <div className='rating'>
        <ReactStars
          count={5}
          value={Number(logement.rating)}
          size={24}
          edit={false}
          activeColor="#FF6060"
        />
      </div>


      <div className='description-container'>
       
      </div>



    </div>
  );
}

export default LogementDetails;
