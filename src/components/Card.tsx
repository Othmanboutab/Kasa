import { Link } from "react-router-dom";
import "../styles/component/card.scss";

const Card = ({ logement }: { logement: Logement }) => {
  return (
    <Link to={`rental/${logement?.id}`} className="card">
      <img src={logement?.cover} />
      <p>{logement?.title}</p>
    </Link>
  );
};

export default Card;
