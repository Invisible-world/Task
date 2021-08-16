import React from 'react'
import './Layout.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {
    Dashboard,
    User,
    UserSubscription,
    Setting
    } from "../index";

    const Layout = ({data}) => {
    return (
        <div>
       <Router>
          <nav className="menu" tabindex="0">
	          <div className="smartphone-menu-trigger"></div>
            <header className="avatar">
		        <img src="./image/user.jpeg"  alt='userImage'/>
            <h2>John Wick.</h2>
            </header>
	          <ul>
             <li tabindex="0" className="icon-dashboard"><span><Link to='/' >Dashboard</Link></span></li>
             <li tabindex="0" className="icon-users"><span><Link to='/user'>Users</Link></span></li>
             <li tabindex="0" className="icon-customers"><span><Link to='/usersubscription'>Users Subscription</Link></span></li>
             <li tabindex="0" className="icon-settings"><span><Link to='/setting'>Settings</Link></span></li>
            </ul>
          </nav>
        <main>
         <div>
           <Route exact path="/" component={Dashboard} />
           <Route exact path="/user"><User data={data} /></Route>
           <Route exact path="/usersubscription" component={UserSubscription} />
           <Route exact path="/setting" component={Setting} /> 
         </div>
       </main>
      </Router>
      </div>
    )
  }
export default Layout
