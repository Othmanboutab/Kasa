import Banner from "../components/Banner";
import bannerImage from "../assets/home-banner.jpg";
import Card from "../components/Card";
import "../styles/pages/home.scss";
import { logements } from "../data/logements";

const Home = () => {
  return (
    <div className="main">
      <Banner imageUrl={bannerImage} text="Chez vous, partout et ailleurs" />
      <div className="cards-container">
        {logements?.map((logement: Logement) => (
          <Card key={logement?.id} logement={logement} />
        ))}
      </div>
    </div>
  );
};

export default Home;
