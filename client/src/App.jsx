import Home from './pages/Home/home'
import './App.scss'
import Watch from './pages/Watch/Watch';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import {BrowserRouter as Router,Route, Routes, Navigate} from 'react-router-dom';
function App() {
  const user=true;
  return (
      <Router>
    <Routes>
      {/* <Route exact path='/'>
        <Home/>
        </Route>
        <Route path='/movies'>
        <Home type='movies'/>
        </Route>
        <Route path='/series'>
        <Home type='series'/>
        </Route>
        <Route path='/watch'>
        <Watch/>
        </Route> */}

        {//Above Code is decepreated after react-router-dom v6
         }
   
          
        <Route path="/" element={user ? <Home /> : <Navigate to="/register" />}/>
        <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
        <Route path="/register" element={!user ? <Register /> : <Navigate to="/" />} />

        { user &&
          (<>  
          <Route path="/movies" element={<Home type='movies'/>} />
          <Route path="/series" element={<Home type='series' />} />
          <Route path="/watch" element={<Watch />} />
         </>)
         }
    

  </Routes>
  </Router>
)}

export default App;
