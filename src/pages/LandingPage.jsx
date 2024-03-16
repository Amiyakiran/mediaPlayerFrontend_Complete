import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigateByUrl = useNavigate()

  return (
    <>
      <Row className='d-flex justify-content-center align-items-center mt-5 mb-5 mx-4'>
        <Col lg={1}></Col>
        <Col lg={5} className='p-3'>
          <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
          <p className='mt-3 p-sm-5 p-md-0'style={{textAlign:'justify'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam fuga numquam ratione nobis reiciendis tenetur explicabo praesentium, eligendi voluptatibus laboriosam deserunt esse eaque? Ex nesciunt libero iusto totam sapiente sequi? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi deleniti tenetur veniam, nihil est quo beatae praesentium saepe amet alias, sunt quae excepturi pariatur quas maiores repudiandae, totam iure vero!</p>
          <button onClick={()=>navigateByUrl('/home')} className='btn btn-warning mt-5'>Get Started <i class="fa-solid fa-arrow-right"></i></button>
        </Col>
        <Col lg={1}></Col>
        <Col lg={5} className='p-5 d-flex justify-content-center align-items-center'>
          <img src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="img1"className=" w-75" />
        </Col>
      </Row>

      <div className="container d-flex justify-content-center align-items-center mt-5 flex-column">
        <h3>Features</h3>
        <div className='row mt-5'>
          <div className="col-md-1"></div>
          <div className="col-md-3 m-md-3">
          <Card className='p-4 mt-2' style={{ width: '100%' }}>
            <Card.Img variant="top" style={{ width: '100%', height: '300px' }} src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
            <Card.Body>
              <Card.Title className='text-center'>Managing Video</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          </div>
          <div className="col-md-3 m-md-3">
          <Card className='p-4 mt-2' style={{ width: '100%' }}>
            <Card.Img variant="top" style={{ width: '100%', height: '300px' }} src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
            <Card.Body>
              <Card.Title className='text-center'>Categorized Video</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          </div>
          <div className="col-md-3 m-md-3">
          <Card className='p-4 mt-2' style={{ width: '100%' }}>
            <Card.Img variant="top" style={{ width: '100%', height: '300px' }} src="https://i.pinimg.com/originals/48/c6/12/48c61262980bb7dbf2557940d41c7d0b.gif" />
            <Card.Body>
              <Card.Title className='text-center'>Watch History</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          </div>
          <div className="col-md-1"></div>

       

         

         

        </div>
      </div>

      <div className='w-100 d-flex justify-content-center align-items-center mt-5'>
        <div className="row w-100">
          <div className="col-md-1"></div>
          <div className="col-md-10 ps-5">
            <div className="row  rounded border-2 border w-100 p-md-5" style={{ borderColor: 'white' }}>
              <div className="col-md-5">
                <h3 style={{ fontSize: '36px', fontWeight: '600' }} className='text-warning mt-4'>Simple fast and PowerFul</h3>
                <h6 className='mt-5'><span style={{ fontSize: '28px' }}>Play Everything </span>: Amet consectetur adipisicing elit. Autem veritatis totam tempore expedita! Quae quam, commodi dolorum iste unde atque alias debitis voluptates nesciunt</h6>
                <h6 className='mt-4'><span style={{ fontSize: '28px' }}>Play Everything</span> : Amet consectetur adipisicing elit. Autem veritatis totam tempore expedita! Quae quam, commodi dolorum iste unde atque alias debitis voluptates nesciunt</h6>
                <h6 className='mt-4'><span style={{ fontSize: '28px' }}>Play Everything </span>: Amet consectetur adipisicing elit. Autem veritatis totam tempore expedita! Quae quam, commodi dolorum iste unde atque alias debitis voluptates nesciunt</h6>
              </div>
              <div className="col-md-1"></div>
              <div className="col-md-6 pt-4">
                <iframe width="100%" height={'400px'} src="https://www.youtube.com/embed/PmdyY38g6Rg" title="ANIMAL: ABRAR’S ENTRY - JAMAL KUDU(Full Video) |Ranbir Kapoor,Bobby Deol |Sandeep Vanga |Bhushan K" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
    </>
  )
}

export default LandingPage



