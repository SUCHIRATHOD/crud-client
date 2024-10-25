import './App.css';
import { Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/Dashboard';
import PostUser from './components/PostUser';
import UpdateUser from './components/UpdateUser';
import NoMatch from './components/NoMatch';
import Navbar from './components/Header'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Dashboard/>}></Route>
        <Route path='/user' element={<PostUser/>}></Route>
        <Route path='/user/:id' element={<UpdateUser/>}></Route>
        <Route path='*' element={<NoMatch/>}></Route>
      </Routes>
    
    </div>
  );
}

export default App;