import React,{useState,useEffect} from 'react';
import './App.css';

import {
  Layout,
  
  
 } from "./components/index";

function App() {
  // const [merge, setMerge] = useState({})
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
  // const datamerge = async () => {
   
  //   return setMerge(prevState=>[...prevState,user])
      
  // }
  useEffect(() => {
  getUserData()
  }, [])
  
  useEffect(() => {
    getUserSubsData()
    },[])
    // useEffect(() => {
    //   datamerge()
    //   })
  //   const result = user.map(itemA => {
  //     return userSubs
  //         .filter(itemB => itemB.user_id === itemA.id)
          
//   // });const arrayA = ["Apple", "Banana", "Orange"];


// const newArray = user.map((item, i) => {
//   if(item.id===userSubs[i].user_id)
//     return {
//       "id" : userSubs[i],
//       "name" : item.first_name,
//   }
//   else{
//     return null
//   }
  
    
  
// });

// console.log(newArray);
// function merge(a, b, prop) {
//   let map = new Map(b.map(o => [o[prop], o]));
//   return a.reduce((acc, o) => {
//       let match = map.get(o[prop]);
//       return match ? acc.concat({ ...o, ...match }) : acc;
//   }, []);
// }
// console.log(merge(user, userSubs, "user_id"));
// var combinedDictionary = {}

// for(let obj of user) {
//   combinedDictionary[obj.user_id] = obj;
// }

// for(let obj of userSubs) {
//   combinedDictionary[obj.id] = { 
//     ...(combinedDictionary[obj.id] || {}),
//     ...obj
//   };
// }

// var result = Object.keys(combinedDictionary).map(key => combinedDictionary[key]);

// console.log(result);
  
  // console.log(user)
  // console.log(Object.entries(user));
  console.log(userSubs)
  // console.log(merge)
//   var result = user.map(function (o1) {
//     return userSubs.filter(function (o2) {
//         return o1.id === o2.user_id; // return the ones with equal id
//    });
  
// });
// console.log(result)

// let newArr=[]
// for(let i=0; i<user.length; i++){
// for(let j=0 ; j<userSubs.length;j++){
//   if(user[i].id===userSubs[j].user_id){
    
//   //   return {
//   //            "id" : userSubs.user_id,
             
          
//   // }

// newArr.push(userSubs[i].user_id)
// } 
// }
//   }
// console.log(newArr)
  // var props = ['id', 'email','expires_on'];

// var result = user.filter(function(o1){
//     // filter out (!) items in result2
//     return !userSubs.some(function(o2){
//         return o1.id === o2.user_id;          // assumes unique id
//     });
// }).map(function(o){
//     // use reduce to make objects with only the required properties
//     // and map to apply this to the filtered array as a whole
//     return props.reduce(function(newo, email,expires_on){
//         newo[email] = o[email];
//         newo[expires_on]=o[expires_on]
//         return newo;
//     }, {});
// });
// console.log(result)

// const mergeArrays = (arr1 = [], arr2 = []) => {
//   let res = [];
//   res = arr1.map(obj => {
//      const index = arr2.find(el => el["user_id"] === obj["id"]);
//     //  const { expires_on } = index !== -1 ? arr2[index] : {};
//      return {
//         ...obj,
//         index
//         // expires_on
//      };
//   });
//   return res;
// };
// console.log(mergeArrays(user, userSubs));
// const map = new Map();
// const mergedArr=user.forEach(item => map.set(item.id));
// // userSubs.forEach(item => map.set(item.user_id, {...map.get(item.user_id), ...item}));
// // const mergedArr = Array.from(map.values());

// var messagesWithUserNames = user.map((msg)=> {
//   var haveEqualId = (user) => user.user_id === msg.id
//   var userWithEqualId= userSubs.find(haveEqualId)
//   return Object.assign({}, msg, userWithEqualId)
// })
// console.log(messagesWithUserNames)// console.log(mergedArr);
// function findCommonElement(array1, array2) {
//   let newArr=[]

//   // Loop for array1
//   for(let i = 0; i < array1.length; i++) {
        
//       // Loop for array2
//       for(let j = 0; j < array2.length; j++) {
            
//           // Compare the element of each and
//           // every element from both of the
//           // arrays
                      
//    return newArr.push[array1[i].id]           // Return if common element found
                            
          
//       }
//   }
    
//   // Return if no common element exist
  
// }
// console.log(findCommonElement(user,userSubs))
// const merge = (arr1, arr2) => {
//   const temp = []

//   arr1.forEach(x => {
//     arr2.forEach(y => {
//       if (x.id === y.user_id) {
//         temp.push({ ...x, ...y.user_id })
//       }
//     })
//   })

//   return temp
// }

// console.log(merge(user, userSubs))
// let arr3 = user.map((item, i) => Object.assign({}, item, userSubs[i]));

// console.log(arr3);  
// var result = user.map(val=>{
//      let index = userSubs.find(k=>k.user_id===val.id);
//     // if(index) val.expiryDate = index.expires_on
//     return index;
// });
// let finalData = user.map((_user, i) =>
// {if(_user.id===userSubs[_user.id].user_id){
// return Object.assign({}, _user, userSubs[i])
// } else{
//   return null

// }}   

//   );

//   console.log(finalData);
// var userSub=userSubs.filter(user=>user.user_id >='4564' && user.user_id<='5063')
// console.log(userSub)
// var messagesWithUserNames = user.map((msg)=> {
//   // var haveEqualId = (user) => user.user_id === msg.id
//   let id=msg.id
//   var userWithEqualId= userSub.find(({user_id})=>user_id === id)
//   // return Object.assign({}, msg, userWithEqualId)
//   return userWithEqualId
// })
// console.log(messagesWithUserNames)
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
console.log(data);

  return (
    <div className="App">
         <Layout data={data}/>
    </div>
  );
}

export default App;
