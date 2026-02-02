import "./App.css";

function App() {
  function getData() {
    alert("Hello from App.jsx");
  }
  return (
    <>
      <div className="div">
        <h2>Hello from App.jsx</h2>
        <button onClick={getData}>FetchData</button>
      </div>
    </>
  );
}

export default App;
