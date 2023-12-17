import { useParams } from "react-router-dom";
import { logements } from "../data/logements";
import Slider from "../components/Slider";
import Collapse from "../components/Collapse";
import "../styles//pages/details.scss";
import RatingStars from "../components/RatingsStars";

const Details = () => {
  const { id } = useParams<{ id: string }>();

  const currentLogement = logements?.find((logement) => logement?.id === id);

  if (!currentLogement) return <p>Aucun logement trouvé</p>;

  const {
    pictures,
    title,
    location,
    host: { name, picture },
    tags,
    description,
    equipments,
    rating,
  } = currentLogement;

  return (
    <div className="main">
      {pictures && <Slider slides={pictures} />}
      <div className="logement-details">
        <div className="info">
          <div className="title-tags-container">
            <div className="title-container">
              <span className="title">{title}</span>
              <span className="location">{location}</span>
            </div>
            <div className="tags-container">
              <div className="tags-container">
                {tags.map((tag: string, index: number) => (
                  <span key={index}>{tag}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="host-rating-container">
            <div className="host-container">
              <span className="host-name">{name}</span>
              <img src={picture} alt={`image de ${name}`} />
            </div>

            <div className="rating">
              <RatingStars rating={rating} />
            </div>
          </div>
        </div>
        <div className="collapses-container">
          <Collapse title="Description" className="description">
            <p>{description}</p>
          </Collapse>

          <Collapse title="Equipments" className="equipments">
            <div className="content">
              {equipments.map((equipment: string, index: number) => (
                <span key={index}>{equipment}</span>
              ))}
            </div>
          </Collapse>
        </div>
      </div>
    </div>
  );
};

export default Details;
