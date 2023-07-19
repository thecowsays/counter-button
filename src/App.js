import "./styles.css";
import { useState } from "react";

export default function App() {
  // State for positive clicks
  const [countPositive, setPositiveCount] = useState(0);
  // State for negative clicks
  const [countNegative, setNegativeCount] = useState(0);
  // Tally for total no. of clicks
  const totalClicks = countPositive + countNegative * -1;
  // Reset all counters to 0
  const resetAll = () => {
    setPositiveCount(0);
    setNegativeCount(0);
  };

  return (
    <>
      <header>
        <h1>Counter-button: Thaddius Clicker</h1>
      </header>
      <main className="main-wrapper">
        <div className="box-wrapper">
          <div className="positive-box">
            <h2>Positive:</h2>
            <p className="p-counter">{countPositive}</p>
            <button onClick={() => setPositiveCount(countPositive + 1)}>
              &lt;&lt;&nbsp;&nbsp;+++
            </button>
          </div>

          <div className="negative-box">
            <h2>Negative:</h2>
            <p className="p-counter">{countNegative}</p>
            <button onClick={() => setNegativeCount(countNegative - 1)}>
              ---&nbsp;&nbsp;&gt;&gt;
            </button>
          </div>
        </div>

        <div className="total-box-wrapper">
          <div className="total-box">
            <h2>Total:</h2>
            <p className="p-counter">{totalClicks}</p>
            <button onClick={() => resetAll()}>Reset</button>
          </div>
        </div>
      </main>
      <footer>
        &copy;2023 made with <span>♥</span> inc.
      </footer>
    </>
  );
}
