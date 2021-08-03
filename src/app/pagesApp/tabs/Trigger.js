import React from 'react'
import axios from 'axios'

let token = localStorage.getItem('token')


class Trigger extends React.Component{

    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    state ={
        posts: [],
        logo_file_id: ''

    }
    componentDidMount =() =>{
        this.getAllPost();
    }
    getAllPost = async () =>{
        const { data} = await axios.get("https://givyv2.herokuapp.com/users/api/authenticate",{
            headers: {
                'Authorization': token,
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
            }
        })
        this.setState({posts: data.user})
       
    }

    handleSubmit = (e) => {
        e.preventDefault()
       
        const  formData = new FormData();
        formData.append('logo_file_id', this.state.logo_file_id)
        console.log(this.props);
        fetch ('https://givyv2.herokuapp.com/design/api/design/create',{
            method: 'POST',
            body: JSON.stringify(this.props.values),
            headers: {
                'Content-Type' : 'application/json',
                "Accept":"application/json",
                "Authorization":token
            }
        })
        .then((res)=>res.json())
        .then((data)=>{
            // console.log(data)
            document.getElementById("error").innerHTML = data["message"]
        })
        .catch(error => console.log('error:', error));
    }
    back = e =>{
        e.preventDefault();
        this.props.prevStep()
    }
    onFilechange(e){
        this.setState({ logo_file_id: e.target.files[0]})
    }
    render(){
        const { values: {logo_file_id, color,
            sms_thank_you_title, sms_body,
            sms_reciept_body}} = this.props

         console.log(this.state.posts)

         let highdata = this.state.posts._id
            
   
    return (
        <div className="pages">
            <div className="gRWngx">
                <div className="row">
                    <div className="col-md-6">
                <form onSubmit={this.handleSubmit} encType="multiport/form-data">
                    <ul class="list-group">
                        <li class="list-group-item">{this.onFileChange} </li>
                        <li class="list-group-item"><b>Color|</b> &nbsp;&nbsp;{color}</li>
                        <li class="list-group-item"><b>Message Title|</b>&nbsp;&nbsp;{sms_thank_you_title}</li>
                        <li class="list-group-item"><b>Message body|</b>&nbsp;&nbsp;{sms_body}</li>
                        <li class="list-group-item"><b>Message Reciept|</b>&nbsp;&nbsp;{sms_reciept_body}</li>
                    </ul>
                    <br/>
                    <button type="submit" className="btn btn-primary">
                        Save Changes
                    </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button type="submit" onClick={this.back} className="btn btn-success">
                        Back
                    </button>
                    </form>
                    </div>
                    
                    <div className="col-md-6">

                    </div>  
                </div> 
                <hr/>
            <div className="RWng">
                <h2>Copy and use this link:</h2>
            </div>
            <div className="bjALwV">          
            <pre class=" language-markup"><code class=" language-markup">
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>iframe</span> 
            <span class="token attr-name"> src</span><span class="token attr-value">
                <span class="token punctuation attr-equals">=</span>
                <span class="token punctuation">"</span>https://givyapp.herokuapp.com/give/{highdata}<span class="token punctuation">"</span>
                </span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>
                <span class="token punctuation">"</span>540<span class="token punctuation">"</span></span> <span class="token attr-name">width</span>
                <span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>500<span class="token punctuation">"</span></span> 
                <span class="token attr-name"> allowfullscreen</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>
                <span class="token punctuation">"</span></span> <span class="token attr-name">frameborder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>
                <span class="token punctuation">"</span>0<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>iframe</span><span class="token punctuation">&gt;</span></span>
            </code></pre><div class="toolbar">
                {/* <div class="toolbar-item"><button type="button">Copy</button></div> */}
                </div>
                </div>
            </div>
        </div>
    )
    }
}

export default Trigger