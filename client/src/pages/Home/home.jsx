import Featured from '../../components/featured/Featured.jsx';
import Navbar from '../../components/navbar/navbar.jsx';
import List from '../../components/list/List.jsx';
import './home.scss'
const Home=()=>{

return(
    <>
      <div className="home"> 
       <Navbar/>
       <Featured type={'movies'}/>
       <List/>
       <List/>
       <List/>
       <List/>
        </div>

    </>
)

}

export default Home;