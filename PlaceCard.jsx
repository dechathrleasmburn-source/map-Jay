function PlaceCard(props) {
  return (
    <div className="place-card">
      <img src={props.image} alt={props.name} />

      <div className="place-content">
        <h2>{props.name}</h2>
        <p>จังหวัด: {props.province}</p>
        <p>ประเภท: {props.type}</p>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default PlaceCard;