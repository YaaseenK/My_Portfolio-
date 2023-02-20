
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { Header} from "./components/Header/header"
import { NavBar } from "./components/Navigation/Navbar";
import { Skills } from "./components/Skills/skills";
import { Projects } from "./components/Project/projects";
import { Contact } from "./components/Contact/contact";
import { Footer } from "./components/Footer/footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Header />
        <Skills />
        <Projects />
        <Contact />
        <Footer />        
      </header>
    </div>
  );
}

export default App;