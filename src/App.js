import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import Homepage from './Homepage';
import Dashboard from './dash/Dashboard';
import Sidebar from './dash/Sidebar';
// import Contribution from './dash/pages/Contribution';
import Form from './dash/pages/Form';
import Applink from './app/Applink'
import Give from './app/pagesApp/Give';



function App(){
    return (
    <>
      <Router>
            <Switch>
                <Route path='/give' component={Give} />
                <Route path='/' exact component={Homepage} />
                <Route path='/app' component={Applink} />
                <Route path='/dash' component={Dashboard}/>
                <Route path='/dash/Form' component={Form} />
                {/* <Route path='/dash/Contribution' exact component={Contribution}/> */}  
            </Switch>       
        </Router>
    </>
    );
}
export default App