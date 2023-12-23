import "./services.css";
import Card from "./Card";
const Services = ({ cardData }) => {
  return (
    <div className="services-container">
      <h1>
        JOIN OUR <br></br>SERVICES
      </h1>
      <div className="main-services-card">
        <ul>
          {cardData.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Services;