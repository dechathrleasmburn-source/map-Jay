import "./App.css";
import places from "./data/places";
import PlaceCard from "./components/PlaceCard";

function App() {
  return (
    <div className="container">
      <h1 className="title">สถานที่ท่องเที่ยวในจังหวัดของฉัน</h1>

      <p className="subtitle">
        แสดงข้อมูลด้วย React Props, map และ Component
      </p>

      <div className="place-list">
        {places.map((place) => (
          <PlaceCard
            key={place.id}
            name={place.name}
            province={place.province}
            type={place.type}
            description={place.description}
            image={place.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;