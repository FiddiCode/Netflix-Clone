import './navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState } from 'react';
       

const Navbar=()=>{

  const [isScroll,setIsScroll]=useState(false);

  window.onscroll=()=>{
    setIsScroll(window.scrollY===0?false:true);
    return ()=>(window.onscroll=null);
  }
  

    return(
        <div className={isScroll?"navbar scrolled":"navbar"}>
            <div className="container">
                <div className="left">
                <svg xmlns="http://www.w3.org/2000/svg" width="1024" height="100.742" viewBox="0 0 1024 276.742">
                    <path d="M140.803 258.904c-15.404 2.705-31.079 3.516-47.294 5.676l-49.458-144.856v151.073c-15.404 1.621-29.457 3.783-44.051 5.945v-276.742h41.08l56.212 157.021v-157.021h43.511v258.904zm85.131-157.558c16.757 0 42.431-.811 57.835-.811v43.24c-19.189 0-41.619 0-57.835.811v64.322c25.405-1.621 50.809-3.785 76.482-4.596v41.617l-119.724 9.461v-255.39h119.724v43.241h-76.482v58.105zm237.284-58.104h-44.862v198.908c-14.594 0-29.188 0-43.239.539v-199.447h-44.862v-43.242h132.965l-.002 43.242zm70.266 55.132h59.187v43.24h-59.187v98.104h-42.433v-239.718h120.808v43.241h-78.375v55.133zm148.641 103.507c24.594.539 49.456 2.434 73.51 3.783v42.701c-38.646-2.434-77.293-4.863-116.75-5.676v-242.689h43.24v201.881zm109.994 49.457c13.783.812 28.377 1.623 42.43 3.242v-254.58h-42.43v251.338zm231.881-251.338l-54.863 131.615 54.863 145.127c-16.217-2.162-32.432-5.135-48.648-7.838l-31.078-79.994-31.617 73.51c-15.678-2.705-30.812-3.516-46.484-5.678l55.672-126.75-50.269-129.992h46.482l28.377 72.699 30.27-72.699h47.295z" fill="#d81f26"/>
                    </svg>

                <span>Homepage</span>
                <span>Series</span>
                <span>Movies</span>
                <span>New and Popular</span>
                <span>My List</span>
                </div>

                <div className="right">
                    <SearchIcon className='icon'/>
                    <span>Kid</span>
                    <NotificationsIcon className='icon'/>
                    <img src='https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80' alt='UserImage'/>
                    <div className="profile">
                    <ArrowDropDownIcon className='icon'/>
                    <div className="options">
                        <span>Settings</span>
                        <span>Logout</span>
                    </div>
                    </div>
                   

                </div>
            </div>
        </div>
    )
}

export default Navbar;