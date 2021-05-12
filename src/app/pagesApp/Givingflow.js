import React from 'react'
import axios from 'axios';

class Givingflow extends React.Component {
    constructor(props) {
      super(props)
      this.state = { merchid:"800000000605",
              
        }   
      this.handleSubmit = this.handleSubmit.bind(this)
    }
  
    handleSubmit(event) {
      event.preventDefault()

      const user = {
        merchid: this.state.merchid,
        account: this.account,
        amount: this.amount,
        expiry: this.expiry
      };

      let base64 = require('base-64');

      let username = "testing"
      let password = "testing123"
      let auth = 'Basic ' + base64.encode(username + ":" + password);
      //  headers.set('Authorization', 'Basic ' + base64.encode(username + ":" + password));  
      const config ={

      }

      axios.post('https://boltgw-uat.cardconnect.com/cardconnect/rest/auth',{
      body: JSON.stringify(user),
        header: {
          "Content-Type": "application/json",
          "Access-Control-Request-Method": "POST",
          "Access-Control-Allow-Origin": "*",
          "Content-type": "application/json; charset=UTF-8",
          "Accept":"application/json",
          "Authorization":auth
          
        }
      })
      .then(res => {
        console.log(res);
      }
      ).catch(err =>{
        console.log(err)
      })
      
    }
  
    render() {
      return (
        <div className="pages">
            
        <form onSubmit={this.handleSubmit}>

        <div class="form-outline">
            <input type="hidden" 
                id="typeText"
                // value={this.state.merchid} 
               
                onChange={event => this.merchid = event.target.value}
                class="form-control" 
            />
          </div>
        <div class="form-outline">
            <label class="form-label" for="typeText">Account Number</label>
            <input type="number" 
                id="typeText"
                // value={this.state.account} 
                // onChange={this.handleChange}
                onChange={event => this.account = event.target.value}
                class="form-control" 
            />
            
        </div>
        <div class="form-outline">
            <label class="form-label" for="typeText">Amount</label>
            <input type="number" 
                id="typeText" 
                class="form-control" 
                // value={this.state.amount}
                // onChange={this.handleChange}
                onChange={event => this.amount = event.target.value}
            />
        </div>
        <div class="form-outline">
            <label class="form-label" for="typeText">Expiry Date</label>
            <input type="text" 
                id="typeText" 
                class="form-control" 
                // value={this.state.expiry}
                onChange={event => this.expiry = event.target.value}
            />
        </div>

          <input type="submit" value="Submit" />
        </form>
        </div>
      )
    }
  }

export default Givingflow