
import './App.css';
import SplashScreen from './Home/SplashScreen';
import { useState } from 'react';
import MissionImg from './Mission/MissionImg';
import Services from './Services/Services';

function App() {
  const [showJoinUs, setShowJoinUs] = useState(false);
  const cardData = [
    {
      title: "Sunday Experience",
      image: "https://th.bing.com/th/id/OIP.Jbh75Y4cgME19lXp2ntH-AHaEK?w=279&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      description: "Description for Card 1.",
    },
    {
      title: "Wednesday Service",
      image: "https://i.ytimg.com/vi/GUjGuF1eqkc/maxresdefault.jpg",
      description: "Description for Card 2.",
    },
    {
      title: "Saturday Prep-Service",
      image: "https://media.istockphoto.com/id/1348130668/photo/acting-students-doing-an-improv-exercise-in-a-drama-class.jpg?s=2048x2048&w=is&k=20&c=3Gq7ty0anOlnJp4xkbxTnzauRefPvEKZZ194zGYLCgc=",
      description: "Description for Card 3.",
    },
    // Add more objects as needed
  ];
  
  const handleJoinUs = () => {
    setShowJoinUs(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <SplashScreen onClick = {handleJoinUs}/>
        { showJoinUs && <MissionImg />}
        <Services cardData={cardData} />
      </header>
    </div>
  );
}


export default App;
