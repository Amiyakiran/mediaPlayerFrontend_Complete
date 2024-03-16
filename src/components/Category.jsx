import { faPen, faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { Form, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import VideoCard from '../components/VideoCard'
import { addCategoryApi, deleteCategoryApi, getAVideoApi, getCategoryApi, updateCategory } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Category({dragOutVideoStatus, setDragOutVideoStatus}) {

  //state to store the category name
  const [categoryName, setCategoryName] = useState("")
  const [allCategory, setAllCategory] = useState([])
  const [addCategoryStatus, setAddCategoryStatus] = useState(false)
  const [deleteCategoryStatus, setDeleteCategoryStatus] = useState(false)

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  console.log(categoryName);

  //function to add category
  const handleCategoryAdd = async () => {

    if (categoryName) {
      let reqBody = {
        category: categoryName,
        allVideos: []
      }

      const response = await addCategoryApi(reqBody)
      console.log(response);
      if (response.status >= 200 && response.status < 300) {
        toast.success('Category added successfully')
        setAddCategoryStatus(true)
        handleClose()
      }
      else {
        alert('Something went wrong')
      }
    }
    else {
      alert('Please enter the Category Name')
    }
  }

  //function to get category

  const getAllCategory = async () => {
    const response = await getCategoryApi()
    /* console.log(response.data); */
    setAllCategory(response.data)
  }


  //function to delete category

  const handleDeleteCategory = async (id) => {
    await deleteCategoryApi(id)
    setDeleteCategoryStatus(true)
  }



  console.log(allCategory);
  //function to prevent the data lose on drag
  const dragOver = (e) => {
    e.preventDefault()
  }

  //function for drop
  const videoDrop = async (e, categoryId) => {
    console.log(`category id is ${categoryId}`);

    //get the videoid send from the videoCard component
    const videoid = e.dataTransfer.getData("VideoId")
    console.log(`video is ${videoid}`);

    //api call to get a details of a particular video that is dragged
    const { data } = await getAVideoApi(videoid)
    console.log(data);

    //seleted category
    const selectedCategory = allCategory.find((item)=>item.id==categoryId)
    console.log(selectedCategory);

    if(selectedCategory.allVideos.find(item=>item.id==data.id)){
      toast.error('Video already exist in the same category')
    }
    else{
      selectedCategory.allVideos.push(data)

    }
  //function to update category
   await updateCategory(categoryId,selectedCategory)

   getAllCategory()

  }

//function to delete cards from category
const dragStart = (e,categoryId, videoId)=>{
  console.log(`category id is ${categoryId}`);
  console.log(`video id is ${videoId}`);

  let dataShared ={
    categoryId,videoId
  }
  e.dataTransfer.setData("dataShared",JSON.stringify(dataShared))
}

  useEffect(() => {
    getAllCategory()
    setAddCategoryStatus(false)
    setDeleteCategoryStatus(false)
    setDragOutVideoStatus(false)
   
  }, [addCategoryStatus, deleteCategoryStatus, dragOutVideoStatus])


  return (
    <>
      <div className='d-flex justify-content-center align-items-center mt-5 mb-5'>
        <button className='btn btn-warning  w-100' onClick={handleShow}>Add New Category <FontAwesomeIcon icon={faPlus} /></button>
      </div>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><FontAwesomeIcon icon={faPen} className='text-warning me-3' />Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className='border border-secondary rounded p-3'>
            <p>Category Name</p>
            <Form.Group className='mb-3'>
              <Form.Control type="text" placeholder="Enter the Category Name" onChange={(e) => setCategoryName(e.target.value)} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="warning" onClick={handleCategoryAdd}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>


      {allCategory?.length > 0 ?
        allCategory?.map((item) => (
          <div className='border border-secondary w-100 p-3 rounded mt-3' droppable onDragOver={(e) => dragOver(e)} onDrop={(e) => videoDrop(e, item.id)}>
            <div className='d-flex justify-content-center align-items-center'>
              <p>{item.category}</p>
              <button onClick={() => handleDeleteCategory(item.id)} className='btn btn-danger ms-auto'><FontAwesomeIcon icon={faTrashCan} /></button>
            </div>
            <Row>
              {item.allVideos.length>0?
              item.allVideos.map((card)=>( <Col sm={12} draggable onDragStart={(e)=>dragStart(e, item.id, card.id)}>
                <VideoCard displayVideo ={card} isPresent={true}/> 
                </Col>))
               :null}
            </Row>
          </div>))

        : <p className='text-danger mt-5'>No category Added Yet</p>
      }

      <ToastContainer position='top-center' theme='colored' autoClose={2000} />
    </>

  )
}

export default Category