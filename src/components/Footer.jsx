import React from 'react'
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faFacebook, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';


function Footer() {
  return (
    <div className='py-5 mt-4 w-100 justify-content-center align-items-center d-flex flex-column'>
      <div className='w-100 mt-5 row'>
     
          <div className="col-md-4 col-xs-12 p-4 ms-md-5">
          <div className='website'>
         <FontAwesomeIcon icon={faVideo} style={{color:'orange',fontSize:'30px'}} />
          <span style={{fontSize:'30px',color:'white'}} className='ms-3'>Media Player</span>
          <p className='mt-3' style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit doloremque recusandae eligendi saepe, dolorum deserunt at. Doloremque ex dolores, ducimus ratione iste, suscipit debitis minus vitae aspernatur, illo cumque. Ducimus.</p>
         </div>
          </div>
          <div className="col-md-2 p-4">
          <div className='links'>
          <h4>Links</h4>
          <p className='mt-3'><Link to={'/'}>Landing Page</Link></p>
          <p><Link to={'/home'}>Home</Link></p>
          <p><Link to={'/watchHistroy'}>Watch History</Link></p>
         </div>
          </div>
          <div className="col-md-2 p-4 ">
                
         <div className='guides'>
          <h4>Guides</h4>
          <p>React</p>
          <p>React-Bootstrap</p>
          <p>Bootswatch</p>
         </div>
          </div>
          <div className="col-md-3 col-12 p-4">
          <div className='contact'>
          <h4>Contacts</h4>
          <div className='d-flex mt-3'>
            <input type="text" className='form-control' placeholder='Enter your Email ID' />
            <button className='btn btn-warning ms-2'>Subscribe</button>
          </div>
          <div className='d-flex justify-content-around mt-3 pt-2'>
          <FontAwesomeIcon icon={faInstagram} size='2xl' />
          <FontAwesomeIcon icon={faFacebook} size='2xl' />
          <FontAwesomeIcon icon={faTwitter} size='2xl' />
          <FontAwesomeIcon icon={faLinkedinIn} size='2xl' />
          </div>
         </div>
          </div>
          <div className="col-md-1"></div>
       
     
       
      </div>
    </div>
  )
}

export default Footer