const Country = ({ country }) => {
  const { name,flags,capital } = country;
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
    </div>
  );
};

export default Country;
