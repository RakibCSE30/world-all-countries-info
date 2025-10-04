import { useState } from "react";
import './country.css'

const Country = ({ country }) => {

    const [clicked,setClicked]=useState(false)
    const handleClicked = () =>{
         setClicked(!clicked)
    }
  const { name,flags,capital,population } = country;
  return (
    <div className={`country ${clicked? `visited`: `non-visited`}`  }>
      <h3>Name: {name.common}</h3>
      <p><img src={flags.png} alt="" /></p>
       <p>{capital}</p>
       <p>{population}</p>
       <button onClick={handleClicked}>{clicked ?'Visited':'Going'}</button>
       {clicked ? 'The country is visited':'I want to visit'}

    </div>
  );
};

export default Country;
