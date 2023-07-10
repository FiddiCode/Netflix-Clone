import Featured from '../components/featured/Featured.jsx';
import Navbar from '../components/navbar/navbar.jsx';
import './home.scss'
const Home=()=>{

return(
    <>
      <div className="home"> 
       <Navbar/>
       <Featured type={'movies'}/>
        </div>

    </>
)

}

export default Home;