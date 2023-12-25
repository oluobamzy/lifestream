import Card from "./Card";
import "./pastors.css";

const PastorCard = ({ cardData2 }) => {
  return (
    <div className="pastorsCard">
      <h1>MEET OUR PASTORS</h1>
      <div className="main-pastors-card">
        <ul>
          {cardData2.map((card, index) => (
            <li key={index}>
              <Card {...card} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PastorCard;
