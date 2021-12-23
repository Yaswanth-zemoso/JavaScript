import logo from './logo.svg';
import './App.css';
import LandingPageTemplate from './pages/home';
import Header from './organisms/header';
import Footer from './organisms/footer';

function App() {
  const props = {
    className: ["header"]
  }
  return (
    <LandingPageTemplate 
      header={<Header {...props} />}
      footer={<Footer {...props} />}
    />
  );
}

export default App;
