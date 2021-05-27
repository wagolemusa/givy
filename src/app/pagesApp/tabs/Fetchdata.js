// import React, { Component} from 'react'

// let token = localStorage.getItem('token')
// class Fetchdata extends React.Component {
//     state = {
//         posts: []
//     }
    
//     componentDidMount() {
//         fetch('https://givyv2.herokuapp.com/givers/api/giver',{
//         headers: {
//             'Authorization': token,
//             'Accept' : 'application/json',
//             'Content-Type': 'application/json'
//         }
//         })
//         .then((response) => response.json())
//         .then(query => {
//             this.setState({ posts: query });
//         });
//     }
    
//     render() {
//         return (
//             <ul>
//                 {this.state.posts.map((post) => (
//                     <li key={post.id}>{post.firstname}</li>
//                 ))}
//             </ul>
//         )
//     }
// }

// export default Fetchdata;

// import React,{useState, useEffect} from 'react'
// import axios from 'axios'
// let token = localStorage.getItem('token')

// function Fetchdata() {
//     const [givers, setPosts] = useState([]);
  
//     useEffect(() => {
//       axios.get("https://givyv2.herokuapp.com/givers/api/giver",{
//         headers: {
//             'Authorization': token,
//             'Accept' : 'application/json',
//             'Content-Type': 'application/json'
//         }
//       }).then(res => setPosts(res.data ))
//       // console.log(givers)    
//       // .catch(()=>{
//       //     alert('Error retriving data')
//       // })
//     }) 
//     return (
//       <ul>
//         {givers.map((query, key) => (
//           <div>
//           <li>{query.firstname}</li>
//           </div>
//         ))}
//       </ul>
//     );
//   }
  

//   export default Fetchdata;