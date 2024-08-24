import Featured from '../../components/featured/Featured.jsx';
import Navbar from '../../components/navbar/navbar.jsx';
import List from '../../components/list/List.jsx';
import './home.scss'
import axios from 'axios'
import { useState,useEffect } from 'react';

const Home=({type})=>{
 const [lists,setLists]=useState([]);
 const [genre ,setGenre]=useState(null);

 useEffect(()=>{
    const getRandomLists=async ()=>{
        try{
            const res=await axios.get(
                `lists${type? "?type="+type:""}${genre ? "&genre=" +genre :""}`,
                {headers:{
                    token:
                    'bearer' +JSON.parse(localStorage.getItem("user")).accessToken,
                },
            }
            );
            console.log(res);
            setLists(res.data);
        }catch(err){
            console.log(err);
        }
    };
    getRandomLists();
 },[type,genre]);
return(
    <>
      <div className="home"> 
       <Navbar/>
       <Featured type={type} setGenre={setGenre}/>
       {lists.map((list) => (
        <List list={list} />
      ))}
        </div>

    </>
)

}

export default Home;