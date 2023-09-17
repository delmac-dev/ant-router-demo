import Content from './components/Content';
import SideMenu from './components/SideMenu';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css'

function App() {

  return (
    <div className='main'>
      <Header />
      <div className='main-section'>
        <SideMenu />
        <Content />
      </div>
      <Footer />
    </div>
  )
}


export default App
