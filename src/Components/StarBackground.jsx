import React, { useEffect } from 'react'
import { useState } from 'react';


const StarBackground = () => {
  const [stars,setstars] = useState([]);
  const [meteros, setmeteros] = useState([])
 useEffect(() => {
  generateStars();
  generatemeteors();

  const handleresize = () =>{
    generateStars();
    generatemeteors();
  };

  window.addEventListener("resize",handleresize)

  return ()=> window.removeEventListener("resize", handleresize)
 }, [])
 


 const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );


  const newstars = []

  for (let i = 0; i<numberOfStars; i++){
    newstars.push({
      id: i,
      size: Math.random() * 3 + 1,
      x: Math.random() * 100, // now 0–100%
      y: Math.random() * 100, // now 0–100%
      opacity: Math.random() * 0.8 + 0.2, // range: 0.2–1.0
      animationDuration: Math.random() * 3 + 2, // optional
    });
  }
  setstars(newstars)
  };

  
 const generatemeteors= () => {
  const numberOfMeteros = 4;

const newmeteros = []

for (let i = 0; i<numberOfMeteros; i++){
  newmeteros.push({
    id: i,
    size: Math.random() * 2 + 1,
    x: Math.random() * 100, // now 0–100%
    y: Math.random() * 20, // now 0–100%
    delay: Math.random() * 15, // range: 0.2–1.0
    animationDuration: Math.random() * 3 + 3, // optional
  });
}
setmeteros(newmeteros)
};





  return (  <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
          }}/>
       
      ))}


{meteros.map((metero) => (
        <div
          key={metero.id}
          className="meteor animate-meteor"
          style={{
            width: metero.size * 30 + "px",
            height: metero.size * 2 + "px",
            left: metero.x + "%",
            top: metero.y + "%",
            animationDelay: metero.animationDelay,
            animationDuration: metero.animationDuration + "s",
          }}/>
       
      ))}
      </div>
  )  
}


export default StarBackground
