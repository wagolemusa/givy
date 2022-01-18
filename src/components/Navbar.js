import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <a class="navbar-brand me-2" href="https://mdbgo.com/">
            <img
              src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
              height="16"
              alt="MDB Logo"
              loading="lazy"
              style="margin-top: -1px;"
            />
          </a>

          <button
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarButtonsExample"
            aria-controls="navbarButtonsExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars"></i>
          </button>

          <div class="collapse navbar-collapse" id="navbarButtonsExample">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" href="#">Dashboard</a>
              </li>
            </ul>

            <div class="d-flex align-items-center">
              <button type="button" class="btn btn-link px-3 me-2">
                Login
              </button>
              <button type="button" class="btn btn-primary me-3">
                Sign up for free
              </button>
              <a
                class="btn btn-dark px-3"
                href="https://github.com/mdbootstrap/mdb-ui-kit"
                role="button"
              ><i class="fab fa-github"></i></a>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
export default Navbar;

// function Navbar() {
//   const [click, setClick] = useState(false);
//   const [button, setButton] = useState(true);

//   const handleClick = () => setClick(!click);
//   const closeMobileMenu = () => setClick(false);

//   const showButton = () => {
//     if (window.innerWidth <= 960) {
//       setButton(false);
//     } else {
//       setButton(true);
//     }
//   };

//   useEffect(() => {
//     showButton();
//   }, []);

//   window.addEventListener('resize', showButton);

//   return (
//     <>
//       <nav className='navbar'>
//         <div className='navbar-container'>
//           <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
//             Givy
//             <i class='fab fa-typo3' />
//           </Link>
//           <div className='menu-icon' onClick={handleClick}>
//             <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
//           </div>
//           <ul className={click ? 'nav-menu active' : 'nav-menu'}>
//             <li className='nav-item'>
//               <Link to='/' className='nav-links' onClick={closeMobileMenu}>
//                 Overview
//               </Link>
//             </li>
//             <li className='nav-item'>
//               <Link
//                 to='/features'
//                 className='nav-links'
//                 onClick={closeMobileMenu}
//               >
//                 Features
//               </Link>
//             </li>
//             <li className='nav-item'>
//               <Link
//                 to='/pricing'
//                 className='nav-links'
//                 onClick={closeMobileMenu}
//               >
//                 Pricing
//               </Link>
//             </li>
//             <li className='nav-item'>
//               <Link
//                 to='/login'
//                 className='nav-links'
//                 onClick={closeMobileMenu}
//               >
//                 Log In
//               </Link>
//             </li>

//             <li>
//               <Link
//                 to='/sign-up'
//                 onClick={closeMobileMenu}
//               >
//                 <button class="btn btn-tangerine btn-round nav-button px-3" type="button">Start For Free</button>
//               </Link>
             
//             </li>
//           </ul>
//           {/* {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>} */}
//         </div>
//       </nav>
//     </>
//   );
// }

// export default Navbar;
