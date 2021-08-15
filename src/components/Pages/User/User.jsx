import React from 'react'
import './User.css'
const User = ({data}) => {
   
   

   return (
        <div>
            <div class="container">
                <h2>  Users  <small>Data</small></h2>
                <ul class="responsive-table">
                  <li class="table-header">
                    <div class="col col-1"> Id</div>
                    <div class="col col-2">User Name</div>
                    <div class="col col-3">Email</div>
                    <div class="col col-5">Package</div>
                    <div class="col col-4">Expires on</div>
                  </li>
            {data.map(dat=>(
                
                  <li class="table-row">
                    <div class="col col-1" data-label=" Id">{dat.id}</div>
                    <div class="col col-2" data-label="User Name">{dat.first_name}</div>
                    <div class="col col-3" data-label="Email">{dat.email}</div>
                    <div class="col col-5" data-label="Country">{dat.package_subs}</div>
                    <div class="col col-4" data-label="Country">{dat.expires_on}</div>
                  </li>
                  
                
            ))}
        </ul>
              </div>
        </div>
    )
}

export default User
