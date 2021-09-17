import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Sidebar from './Sidebar'
import Contribution from './pages/Contribution';
import Side from './Side'
import Form from './pages/Form';
import Batches from './pages/Batches';
import People from './pages/People';
import Events from './pages/Events';
import Follow from './pages/Follow';
import Envelopes from './pages/Envelopes';
import Funds from './pages/Funds';
import Groups from './pages/Groups';
import Notifications from './pages/Notifications';
import Online from './pages/Online';
import Reports from './pages/Reports';
import Payments from './pages/Payments';
import Calender from './pages/Calender';
import Dash from './pages/Dash';
import Member from './pages/Member';
import Users from './pages/Users';
import Roles from './pages/Roles';
import Help from './pages/Help';
import Tche from './pages/Tche';
function Dashboard(){
    return(
        <>
         <Router>
            <Sidebar/>
            {/* <Side/> */}
                <Switch>
                    <Route path='/dash' exact component={Dash} />
                    <Route path='/dash/Form' component={Form} />
                    <Route path='/dash/Contribution' component={Contribution}/>
                    <Route path='/dash/Batches' componenet={Batches} />
                    <Route path='/dash/People' component={People} />
                    <Route path='/dash/Events' component={Events} />
                    <Route path='/dash/Follow' component={Follow} />
                    <Route path='/dash/Envelopes' component={Envelopes} />
                    <Route path='/dash/Funds' component={Funds} />
                    <Route path='/dash/Groups' component={Groups} />
                    <Route path='/dash/Notifications' component={Notifications} />
                    <Route path='/dash/Online' component={Online} />
                    <Route path='/dash/Reports' component={Reports} />
                    <Route path='/dash/Payments' component={Payments} />
                    <Route path='/dash/Calender' component={Calender}/>
                    <Route path='/dash/Member' component={Member}/>
                    <Route path='/dash/Users' component={Users} />
                    <Route path='/dash/Help' component={Help} />
                    <Route path='/dash/Roles' component={Roles} />
                    <Route path='/dash/Tche' component={Tche} />

                </Switch> 
            </Router>
        </>
    )
}
export default Dashboard