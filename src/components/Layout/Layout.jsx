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
            <nav class="menu" tabindex="0">
	<div class="smartphone-menu-trigger"></div>
  <header class="avatar">
		<img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"  alt='userImage'/>
    <h2>John Wick.</h2>
  </header>
	<ul>
    <li tabindex="0" class="icon-dashboard"><span><Link to='/' >Dashboard</Link></span></li>
    <li tabindex="0" class="icon-users"><span><Link to='/user'>Users</Link></span></li>
    <li tabindex="0" class="icon-customers"><span><Link to='/usersubscription'>Users Subscription</Link></span></li>
    <li tabindex="0" class="icon-settings"><span><Link to='/setting'>Settings</Link></span></li>
  </ul>
</nav>
 
<main>
  <div class="">
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
