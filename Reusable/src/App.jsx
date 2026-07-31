import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';
import MainContent from './Components/MainContent.jsx';

export default function App(){
  return(
    <div className="card">
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
}