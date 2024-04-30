import './App.css';
import Faq from './clone/Faq';
import Footer from './clone/Footer';
import Header from './clone/Header';
import Section1 from './clone/Section1';
import Section2 from './clone/Section2';
import Section3 from './clone/Section3';
import Section4 from './clone/Section4';

function App() {
  return (
    <div className="App">
      <Header/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Faq/>
      <Footer/>
    </div>
  );
}

export default App;
