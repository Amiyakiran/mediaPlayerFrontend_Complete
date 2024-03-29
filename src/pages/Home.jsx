import React, { useState } from 'react'
import Add from '../components/Add'
import View from '../components/View'
import Category from '../components/Category'
import { Link } from 'react-router-dom'
import './Home.css'
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



function Home() {
    const [uploadVideoStatus, setUploadVideoStatus]= useState({})
    const [dragOutVideoStatus, setDragOutVideoStatus]= useState(false)

  return (
    <>
      <div className="container d-flex align-items-center mt-5">
          <Add setUploadVideoStatus={setUploadVideoStatus} />
          <Link className='ms-auto' id='link' to={'/watchHistroy'}><span id='w'>Watch History</span> <FontAwesomeIcon icon={faClockRotateLeft} className='me-4' /></Link>
      </div>
      <div className='row p-4'>
            <div className="col-md-9">
              <h4 className='mt-4'>All Videos</h4>
              <View uploadVideoStatus={uploadVideoStatus} setDragOutVideoStatus={setDragOutVideoStatus} />
            </div>
            <div className="col-md-3 px-4">
              <Category setDragOutVideoStatus={setDragOutVideoStatus} dragOutVideoStatus={dragOutVideoStatus}/>
            </div>
      </div>
    </>
  )
}

export default Home