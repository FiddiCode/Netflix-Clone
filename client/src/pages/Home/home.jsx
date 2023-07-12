import Featured from '../../components/featured/Featured.jsx';
import Navbar from '../../components/navbar/navbar.jsx';
import List from '../../components/list/List.jsx';
import './home.scss'
import axios from 'axios'
const Home=({type})=>{

return(
    <>
      <div className="home"> 
       <Navbar/>
       <Featured type={type}/>
       <List/>
       <List/>
       <List/>
       <List/>
        </div>

    </>
)

}

export default Home;