import "./App.css";
import { Header, Footer } from "./components/index";
import { AllRoutes } from "./routes/AllRoutes";


function App() {
  const user = true;

  return (
    <div className="App">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
