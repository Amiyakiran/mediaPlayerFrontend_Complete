import { faArrowLeft, faHouse, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteWatchHistoryapi, getAllVideoHistory } from '../services/allAPI'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function WatchHistory() {

  const [historyVideos, setHistoryVideos] = useState([])
  const [deleteVideoStatus, setDeleteVideoStatus] = useState(false)
  //function get all videos in history
  const getHistory = async () => {
    const response = await getAllVideoHistory()
    /* console.log(response); */
    setHistoryVideos(response.data)
  }
  /* console.log(historyVideos); */
  //function to delete video from history

  const handleDelete = async (id) => {
    const response = await deleteWatchHistoryapi(id)
    /* console.log(response); */
    if (response.status >= 200 && response.status < 300) {
      setDeleteVideoStatus(true)
    }
    else {
      toast.error('something went wrong')
    }
  }


  useEffect(() => {
    getHistory()
    setDeleteVideoStatus(false)
  }, [deleteVideoStatus])
  return (
    <>
      <div className=' d-flex  align-items-center  mx-3 p-md-5 mt-4'>
        <h3 id='link'>Watch History</h3>
        <h5 className='ms-auto'> <Link style={{ textDecoration: 'none', color: 'white' }} to={'/home'}><FontAwesomeIcon id='w' className='me-md-3' icon={faArrowLeft} beat /><span id='w'>Back to Home</span>  <FontAwesomeIcon icon={faHouse} className='me-3' /></Link></h5>

      </div>

      <div className='row mx-3 p-md-4 mt-5'>
        <div className="col-md-1"></div>
        <div className="col-md-10 P-5" style={{overflowX:'auto'}}>
          {historyVideos?.length > 0 ?

            <table className='table table-light table-bordered'>
              <thead>
                <tr>
                  <th className='p-4'>#</th>
                  <th className='p-4'>Caption</th>
                  <th className='p-4'>URL</th>
                  <th className='p-4'>Time Stamp</th>
                  <th className='p-4'>Action</th>
                </tr>
              </thead>
              <tbody>
                {historyVideos?.map((item, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{item.caption}</td>
                    <td><a href={item.url} target='_blank'>{item.url}</a></td>
                    <td>{item.timeStamp}</td>
                    <td>
                      <button className='btn btn-danger' onClick={() => handleDelete(item.id)}> <FontAwesomeIcon icon={faTrashCan} /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table> :
            <p className='text-danger fs-4'>No Watch History</p>
          }
        </div>
        <div className="col-md-1"></div>

      </div>

      <ToastContainer position='top-center' theme='colored' autoClose={2000} />
    </>
  )
}

export default WatchHistory