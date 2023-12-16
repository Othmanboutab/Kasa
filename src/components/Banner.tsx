import "../styles/component/banner.scss";

interface Props {
  imageUrl: string;
  text?: string;
  className?: string;
}

const Banner = ({ imageUrl, text, className }: Props) => {
  return (
    <div className={`banner ${className}`}>
      <img src={imageUrl} alt="Banner" />
      <p>{text}</p>
    </div>
  );
};

export default Banner;
