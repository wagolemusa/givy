import React from 'react'
import './Side.css'

function Side(){
    return(

<section>
    <div class="container-fluid display-table">
        <div class="row display-table-row">
            <div class="col-md-2 col-sm-1 hidden-xs display-table-cell v-align box" id="navigation">
                <div class="logo">
                    <a hef="home.html">
                        {/* <img src="http://jskrishna.com/work/merkury/images/logo.png" alt="merkery_logo" class="hidden-xs hidden-sm"> */}
                        {/* <img src="http://jskrishna.com/work/merkury/images/circle-logo.png" alt="merkery_logo" class="visible-xs visible-sm circle-logo"> */}
                    </a>
                </div>
                <div class="navi">
                    <ul>
                        <li class="active"><a href="#"><i class="fas fa-chart-line"></i><span class="hidden-xs hidden-sm">Dashboard</span></a></li>
                        <li><a href="/dash/Form"><i class="fa fa-tasks" aria-hidden="true"></i><span class="hidden-xs hidden-sm">People</span></a></li>
                        <li><a href="#"><i class="fas fa-users"></i><span class="hidden-xs hidden-sm">Groups</span></a></li>
                        <li><a href="#"><i class="fas fa-calendar"></i><span class="hidden-xs hidden-sm">Events</span></a></li>
                        <li><a href="#"><i class="fas fa-hands-helping"></i><span class="hidden-xs hidden-sm">Follow up</span></a></li>
                        <li><a href="#"><i class="far fa-calendar-alt"></i><span class="hidden-xs hidden-sm">Calender</span></a></li>
                        <li><a href="#"><i class="fab fa-wpforms"></i><span class="hidden-xs hidden-sm">Forms</span></a></li>
                        <li><a href="#"><i class="fas fa-bell"></i><span class="hidden-xs hidden-sm">Notifications</span></a></li>
                        <li><a href="#"><i class="fas fa-chart-bar"></i><span class="hidden-xs hidden-sm">Reports</span></a></li>
                        <li><a href="#"><i class="fas fa-mobile-alt"></i><span class="hidden-xs hidden-sm">Member Access</span></a></li>
                        <li>
                            <a class="accordion-toggle collapsed toggle-switch" data-toggle="collapse" href="#submenu-3">
                                <span class="sidebar-icon"><i class="fa fa-newspaper-o"></i></span>
                                <span class="sidebar-title">Contribution </span>
                                <b class="caret"></b>
                            </a>
                            <ul id="submenu-3" class="panel-collapse collapse panel-switch" role="menu">
                                <li><a href="/dash/Contribution"><i class="fa fa-caret-right"></i>All Contribution</a></li>
                                <li><a href="#"><i class="fa fa-caret-right"></i>Batches</a></li>
                                <li><a href="#"><i class="fa fa-caret-right"></i>Funds</a></li>
                                <li><a href="#"><i class="fa fa-caret-right"></i>Payments Methods</a></li>
                                <li><a href="#"><i class="fa fa-caret-right"></i>Online Giving</a></li>
                                <li><a href="#"><i class="fa fa-caret-right"></i>Envelopes</a></li>
                            </ul>
                        </li>

                        <li>
                        <a class="accordion-toggle collapsed toggle-switch" data-toggle="collapse" href="#submenu-2">
                            <span class="sidebar-icon"><i class="fa fa-users"></i></span>
                            <span class="sidebar-title">Management</span>
                            <b class="caret"></b>
                        </a>
                        <ul id="submenu-2" class="panel-collapse collapse panel-switch" role="menu">
                            <li><a href="#"><i class="fa fa-caret-right"></i>Users</a></li>
                            <li><a href="#"><i class="fa fa-caret-right"></i>Roles $ Permissions</a></li>
                        </ul>
                    </li>
                    <li><a href="#"><i class="far fa-question-circle"></i><span class="hidden-xs hidden-sm">Help</span></a></li>
                    <li><a href="#"><i class="fas fa-sign-out-alt"></i><span class="hidden-xs hidden-sm">Log Out</span></a></li>
                    </ul>
                </div>
            </div>
            <div class="display-table-cell v-align">
                {/* <!--<button type="button" class="slide-toggle">Slide Toggle</button> --> */}
                <div class="row">
                    <header>
                        <div class="col-md-7">
                            <nav class="navbar-default pull-left">
                                <div class="navbar-header">
                                    <button type="button" class="navbar-toggle collapsed" data-toggle="offcanvas" data-target="#side-menu" aria-expanded="false">
                                        <span class="sr-only">Toggle navigation</span>
                                        <span class="icon-bar"></span>
                                        <span class="icon-bar"></span>
                                        <span class="icon-bar"></span>
                                    </button>
                                </div>
                            </nav>
                            {/* <div class="search hidden-xs hidden-sm">
                                <input type="text" placeholder="Search" id="search" />
                            </div> */}
                        </div>
                        <div class="col-md-5">
                            <div class="header-rightside">
                                <ul class="list-inline header-top pull-right">
                                    <li class="hidden-xs">
                                        <a href="#" class="add-project" data-toggle="modal" data-target="#add_project">Sraelabby</a>
                                    </li>
                                    <li><a href="#"><i class="fa fa-user" aria-hidden="true"></i></a></li>
                                    {/* <li>
                                        <a href="#" class="icon-info">
                                            <i class="fa fa-bell" aria-hidden="true"></i>
                                            <span class="label label-primary">3</span>
                                        </a>
                                    </li> */}
                                    <li class="dropdown">
                                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                            {/* <img src="http://jskrishna.com/work/merkury/images/user-pic.jpg" alt="user"> */}
                                            <b class="caret"></b></a>
                                        <ul class="dropdown-menu">
                                            <li>
                                                <div class="navbar-content">
                                                    <span>Sraelabby</span>
                                                
                                                </div>
                                                </li>
                                                    <li><a href="#">Change Password</a></li>
                                                    <li><a href="#">Account Settings</a></li>
                                                    <li><a href="#">Profile Fields</a></li>
                                                    <li><a href="#">Integration</a></li>
                                                    <li><a href="#">Notifications Settings</a></li>     
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </header>
                </div>
            

                {/* <div class="container">
                    <h1>Hello, JS</h1>
       
                </div> */}
            </div>
        </div>

    </div>




</section>

    )
}

export default Side
