import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components";
import { Allroutes } from "./routes/Allroutes";

function App() {
  return (
    <div className="App">
      <Header/>
      <Allroutes/>
      <Footer/>
    </div>
  )
}

export default App;