import "./Home.css";
const HomeButton = ({onClick}) => {

    return (
        <div>
            <button onClick={onClick}>Join Us</button>
        </div>
    );
};
export default HomeButton;