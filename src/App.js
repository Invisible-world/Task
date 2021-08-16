import React,{ useState,useEffect } from 'react';
import {
  Layout,
 } from "./components/index";
import './App.css';

 function App() {
  const [user, setUser] = useState([])
  const [userSubs,setUserSubs] = useState([])
 
  const getUserData = async() => {
    const res=await fetch('./assests/users.json')
    const data=await res.json()
    return setUser(data)
  }
  const getUserSubsData = async() => {
    const res=await fetch('./assests/subscriptions.json')
    const data=await res.json()
    return setUserSubs(data)
  }
  
  useEffect(() => {
  getUserData()
  }, [])
  
  useEffect(() => {
    getUserSubsData()
    },[])
    
    let finalData = user.map((_user) => {
  const index = userSubs.findIndex((el) => el["user_id"] == _user["id"]);
  if (index !== -1) {
    const { package_subs } = index !== -1 ? userSubs[index] : {};
    const { expires_on } = index !== -1 ? userSubs[index] : {};
    const { user_id } = index !== -1 ? userSubs[index] : {};
    return {
      ..._user,
      package_subs,
      expires_on,
      user_id,
    };
  } 
 });
let data = finalData.filter(_finalData=> _finalData!==undefined)
// console.log(data);

return (
    <div className="App">
         <Layout data={data} />
    </div>
  );
}

export default App;
