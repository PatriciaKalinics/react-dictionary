import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App container">
      <div className="row justify-content-md-center">
        <Dictionary />
        <footer className="App-footer">
          <a
            href="https://github.com/PatriciaKalinics/react-dictionary"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>{" "}
          by Pat Kalinics
        </footer>
      </div>
    </div>
  );
}

export default App;
