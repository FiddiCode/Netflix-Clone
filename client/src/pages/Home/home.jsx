import Featured from '../../components/featured/Featured.jsx';
import Navbar from '../../components/navbar/navbar.jsx';
import List from '../../components/list/List.jsx';
import './home.scss'
import axios from 'axios'
import { useState,useEffect } from 'react';
const Home=({type})=>{
 const [lists,setLists]=useState([]);
 const [genre,setGenre]=useState(null);

 useEffect(()=>{
    const getRandomLists=async ()=>{
        try{
            const res=await axios.get(
                `lists${type? "?type="+type:""}${genre ? "genre=" +genre :""}`,
                {headers:{
                    token:
                    'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OWZhNGE5MDhmODI5Y2YwMjE5MGNiZSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2ODgyODc2MzYsImV4cCI6MTY4ODI5MTIzNn0.UmPHYpihwimw0kqyj8UZb3tn14pJryU5jjmwtklCioY'
                }}
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
       <Featured type={type}/>
       <List list={lists}/>
        </div>

    </>
)

}

export default Home;