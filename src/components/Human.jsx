const Human = ({ humanProp }) => {
  return (
    <div>
      <h3>{humanProp.name} - {humanProp.planet}</h3>
    </div>
  );
};

export default Human;
