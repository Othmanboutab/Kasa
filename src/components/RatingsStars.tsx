import "../styles/component/rating.scss";

const RatingStars = ({ rating }: { rating: string }) => {
  const generateStars = (rating: string) => {
    const stars = [];
    const ratingValue = parseInt(rating, 10);

    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i}>
          <i
            className={`fa-solid fa-star ${
              i < ratingValue ? "filled" : "empty"
            }`}
          ></i>
        </span>
      );
    }

    return stars;
  };

  return <div className="rating-stars">{generateStars(rating)}</div>;
};

export default RatingStars;
