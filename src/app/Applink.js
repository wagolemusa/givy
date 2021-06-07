import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Nav from './Nav'
import Giver from './pagesApp/Giver'
import Recuring from './pagesApp/Recuring'
import Givingflow from './pagesApp/Givingflow'
import Setting from './pagesApp/Setting'
import Actave from './pagesApp/Actave'
import { Link } from 'react-router-dom';
import Give from './pagesApp/Give'

function Applink (){
    return (
        <>
        <Router>
            <Nav/>
                <Switch>
                    <Route exact path='/app/Giver' component={Giver}/>
                    <Route path ='/app/Actave' component={Actave} />
                    <Route path='/app/Recuring' component={Recuring} />
                    <Route path='/app/Givingflow' component={Givingflow}/>
                    <Route path='/app/Setting' component={Setting}/>
                    <Route path='/app/Give' component={Give} />
                </Switch>
            </Router>

           
        </>
    )
}
export default Applink;