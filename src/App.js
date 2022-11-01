import './App.css';
import Home from './pages/Home/Home';
import {Routes, Route, Link} from 'react-router-dom';
import Header from './components/Header/Header';
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
