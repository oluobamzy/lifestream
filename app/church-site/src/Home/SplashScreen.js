
import "./Home.css";
import HomeButton from "./HomeButton";



const SplashScreen = ({onClick}) => {
 
  return (
    <div className="splash-screen">
      <div className="text-part">
        <h1>LCC NIGERIA</h1>
        <p>...making you unbeatable</p>
        <HomeButton onClick={onClick}/>
      </div>
      <div className="img-part">
      {/* <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m20 20h-15.25c-.414 0-.75.336-.75.75s.336.75.75.75h15.75c.53 0 1-.47 1-1v-15.75c0-.414-.336-.75-.75-.75s-.75.336-.75.75zm-1-17c0-.478-.379-1-1-1h-15c-.62 0-1 .519-1 1v15c0 .621.52 1 1 1h15c.478 0 1-.379 1-1zm-9.25 6.75v-3c0-.414.336-.75.75-.75s.75.336.75.75v3h3c.414 0 .75.336.75.75s-.336.75-.75.75h-3v3c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-3h-3c-.414 0-.75-.336-.75-.75s.336-.75.75-.75z" fill-rule="nonzero"/></svg> */}
      </div>
    </div>

  );
};
export default SplashScreen;