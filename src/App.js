import './App.css';
import { AuthProvider } from "./context/AuthContext";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Home />
      </AuthProvider>
    </div>
  );
}

export default App;
