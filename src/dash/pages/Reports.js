import React from 'react'
import './pages.css'

function Reports(){
    return(
        <>
        <br/>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='card'>
                            <div className='card-header'>
                            General Reports
                            </div>
                                <div className='card-body px-3 pt-3 pb-1'>
                                <ul>
                                <li><i class="fas fa-arrow-right"></i>&nbsp;&nbsp;<a href="#">Archived People Report</a></li>
                                <li><i class="fas fa-arrow-right"></i>&nbsp;&nbsp;<a href="#">Attendance Report</a></li>
                                <li><i class="fas fa-arrow-right"></i>&nbsp;&nbsp;<a href="#">Birthdays Report</a></li>
                                <li><i class="fas fa-arrow-right"></i>&nbsp;&nbsp;<a href="#">Deleted People Report</a></li>
                                <li><i class="fas fa-arrow-right"></i>&nbsp;&nbsp;<a href="#">Email History Report</a></li>
                                <li><i class="fas fa-arrow-right"></i>&nbsp;&nbsp;<a href="#">Family Report</a></li>
                                <li><i class="fas fa-arrow-right"></i>&nbsp;&nbsp;<a href="#">Follow up Report</a></li>
                                <li><i class="fas fa-arrow-right"></i>&nbsp;&nbsp;<a href="#">Households Report</a></li>
                                <li><i class="fas fa-arrow-right"></i>&nbsp;&nbsp;<a href="#">Notification History Report</a></li>
                                <li><i class="fas fa-arrow-right"></i>&nbsp;&nbsp;<a href="#">Sessions Report</a></li>
                                <li><i class="fas fa-arrow-right"></i>&nbsp;&nbsp;<a href="#">Wedding Anniversaries Report</a></li>
                                <li><i class="fas fa-arrow-right"></i>&nbsp;&nbsp;<a href="#">Text History Report</a></li>
                                </ul>
                                </div>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='card'>
                            <div className='card-header'>
                            Statistical Reports
                            </div>
                                <div className='card-body px-3 pt-3 pb-1'>
                                <ul>
                                <li><i class="fas fa-arrow-right"></i>&nbsp;&nbsp;<a href="#">Attendance Rate Report</a></li>
                                <li><i class="fas fa-arrow-right"></i>&nbsp;&nbsp;<a href="#">Geographical Distribution Report</a></li>
                                <li><i class="fas fa-arrow-right"></i>&nbsp;&nbsp;<a href="#">New People Rate Report</a></li>
                                <li><i class="fas fa-arrow-right"></i>&nbsp;&nbsp;<a href="#">Recurring Event Report</a></li>
 
                                </ul>
                                </div>
                           
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}
export default Reports