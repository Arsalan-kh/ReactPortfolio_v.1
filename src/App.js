
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
import Skill from './components/Skill/Skill'
function App() {
  return (
    <div className="App">
   
{/* 
<h1 className="text-2xl font-bold underline">
      Hello world!
    </h1> */}

    <Navbar/>
    <Header/>
     <Skill/>
    <Projects />
    <Footer/> 
    </div>
  );
}

export default App;
