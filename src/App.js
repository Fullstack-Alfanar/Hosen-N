import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("");
  return (
    <div className="App">
      <header className="App-header">
        <div className="container" style={{ backgroundColor: color }}>
          <div>
            <label>Input Color:</label>
          </div>
          <div>
            <input placeholder="Color" id="colorName" />
            <input
              type="submit"
              value="Change"
              onClick={() => {
                setColor(document.getElementById("colorName").value);
              }}
            />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
