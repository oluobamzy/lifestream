import "./services.css";
const Card = ({ title, description, image }) => {
    return (
        <div className="services-card">
            <div className="services-card-overlay">
                <img src={image} alt={title} />
            </div>
            <div className="services-card-bg">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};
export default Card;