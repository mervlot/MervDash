import './App.css';
import Head from './component/Head';
import AboutHeader from './component/About_Header';
import HeroSection from './component/HeroSection';
import BestProduct from './component/BestProduct';
import Cats from './component/Cats';
import Card from './component/Img';
import Footer from './component/Footer';
function App() {
  return (
    <div className="bg-white relative ">
      {/* Hero Header Section */}
      <Head />

      {/* Content Sections */}
      <div className="relative text-sm space-y-20 px-4 md:px-10">
        <HeroSection />
        <AboutHeader />
        <BestProduct />
      
        <Cats />
        <Card />
       
        </div>
    <Footer/>
     </div>
  );
}

export default App;
