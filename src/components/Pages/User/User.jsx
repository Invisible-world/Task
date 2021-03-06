import React,{useState} from 'react'
import './User.css'

 const User = ({data}) => {
   const [searchTerm, setSearchTerm] = useState('')
   const [sortConfig, setSortConfig] = useState(null);
   let sortedData= [...data]
  // console.log(sortedData)

  if (sortConfig !== null) {
    sortedData.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });
  } 
  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig && sortConfig.key === key  && sortConfig.direction === 'ascending') {
      direction = 'descending';
      }
    setSortConfig({ key, direction });
  }
  return(
        <div>
          <div className="container">
          <input type="text" 
            className="form__input"  
            placeholder="Search..." 
            required="" 
            onChange={(e)=>setSearchTerm(e.target.value)}
            />
          <h2>Users<small>Data</small></h2>
          <ul className="responsive-table">
          <li className="table-header">
          <div className="col col-1"  >
          <button type="button" onClick={() => requestSort('id')}> Id</button>
            </div>
            <div className="col col-2">
            <button type="button" onClick={() => requestSort('first_name')}> User Name</button>
            </div>
            <div className="col col-3">
            <button type="button" onClick={() => requestSort('email')} >Email</button>
            </div>
            <div className="col col-5">
            <button type="button" onClick={() => requestSort('package_subs')}>Package</button>
            </div>
            <div className="col col-4">
            <button type="button" onClick={() => requestSort('expires_on')}>Expires on</button>
            </div>
            </li>
            {sortedData && sortedData.length > 0 ? sortedData.filter(val=>{
              if(searchTerm===''){
                return val;
              }
              else if(
                val.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                val.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                val.package_subs.toLowerCase().includes(searchTerm.toLowerCase())
                ){
                  return val;
                }
            }).map(dat=>(
                <li className="table-row" key={dat.id}>
                    <div className="col col-1" data-label=" Id">{dat.id}</div>
                    <div className="col col-2" data-label="User Name">{dat.first_name}</div>
                    <div className="col col-3" data-label="Email">{dat.email}</div>
                    <div className="col col-5" data-label="Country">{dat.package_subs}</div>
                    <div className="col col-4" data-label="Country">{dat.expires_on}</div>
                  </li>
                  ))
            :"Loading"
            }
        </ul>
        </div>
        </div>
        )
  }
export default User
    