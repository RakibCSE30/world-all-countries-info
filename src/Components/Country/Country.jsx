import { useState } from "react";

const Country = ({ country }) => {

    const [clicked,setClicked]=useState(false)
    const handleClicked = () =>{
         setClicked(!clicked)
    }
  const { name,flags,capital,population } = country;
  return (
    <div
      style={{
        border: "3px solid green",
        margin: "10px",
        padding: "10px",
        borderRadius: "8px",
      }}
    >
      <h3>Name: {name.common}</h3>
      <p><img src={flags.png} alt="" /></p>
       <p>{capital}</p>
       <p>{population}</p>
       <button onClick={handleClicked}>{clicked ?'Visited':'Going'}</button>
       {clicked ? 'The country is visited':'I want to visite'}

    </div>
  );
};

export default Country;
