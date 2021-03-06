import './App.css';
import Header from './header/header';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './footer/header/footer';
import Main from './main/main';
import About from './about/about';
import Blog from './blog/blog';
import Contacts from './contacts/contacts';
import WorksContainer from './works/worksContainer';
function App() {
  return (
    <div className="App_wrapper">
      <BrowserRouter>
        <Header />
        <div className="mainBlock">
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/main' element={<Main />} />
            <Route path='/about' element={<About />} />
            <Route path='/works' element={<WorksContainer />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/contacts' element={<Contacts />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
