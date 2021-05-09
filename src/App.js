import "./App.css";
import Fullname from "./Component/Profile/FullName";
import Profileimg from "./Component/Profile/ProfilePhoto";
import Adress from "./Component/Profile/Adress";
function App() {
  return (
    <div className="App">
      <div className="card-container">
        <Profileimg />
        <Fullname />
        <Adress />
      </div>
    </div>
  );
}

export default App;
