import React from 'react'
import './pages.css'

function Notifications(){
    return(
        <>
        <br/>
            <div className='container'>
                <b>15/02/2021</b>
                <div className='bg-whight'>
                    <div className='time_note'>
                        <i>09:00 AM</i>

                        <div class="btn-group pull-right" data-toggle="dropdown">
                        <i class="fas fa-bell"></i>&nbsp;&nbsp;&nbsp;&nbsp;
                            <i _ngcontent-rux-c388="" class="fas fa-ellipsis-v"></i>
                            <i _ngcontent-rux-c388="" class="fas fa-ellipsis-v"></i>                 
                        </div>
                            <ul class="dropdown-menu" role="menu">
                                <div className='downmenu'>
                                <li><a href="#">Mark as Unread</a></li>
                                <li><a href="#">Remove</a></li>
                                </div>
                                        
                            </ul>
                    </div>
                    
                    <h4>Demo Account</h4>
                    
                    <div className='text-truncate'>
                        You've 3 pending follow-up(s) today
                    </div>
                </div>

                <br/>
                <b>14/02/2021</b>
                <div className='bg-whight'>
                    <div className='time_note'>
                        <i>09:00 AM</i>

                        <div class="btn-group pull-right" data-toggle="dropdown">
                        <i class="fas fa-bell"></i>&nbsp;&nbsp;&nbsp;&nbsp;
                            <i _ngcontent-rux-c388="" class="fas fa-ellipsis-v"></i>
                            <i _ngcontent-rux-c388="" class="fas fa-ellipsis-v"></i>                 
                        </div>
                            <ul class="dropdown-menu" role="menu">
                                <div className='downmenu'>
                                    <li><a href="#">Mark as Unread</a></li>
                                    <li><a href="#">Remove</a></li>
                                </div>
                                        
                            </ul>
                    </div>
                    
                    <h4>Demo Account</h4>
                    
                    <div className='text-truncate'>
                        You've 3 pending follow-up(s) today
                    </div>
                </div>
            </div>
        </>
    )
}
export default Notifications