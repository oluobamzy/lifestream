import "./pastors.css";
const Card = ({ bio, title, image }) => {
  return (
    <div className="pastors-card">
        <div className="pastors-card-overlay">
            <img src={image} alt={title} />
        </div>
        <div className="pastors-card-bg">
            <h3>{title}</h3>
            <p>{bio}</p>
        </div>
    </div>
);
};
export default Card;