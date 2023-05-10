import { Row, Col, Container } from "react-bootstrap";


export default function Page1() {
   return (
      <section>
         <Container>
            <Row>
               <Col> h2: Element </Col>
            </Row>

             <Row>
               <Col>
                  <div className="box-scale">
                     <p className="text-center text-white">Scale</p>
                  </div>
               </Col>
              
            
               <Col>
                  <div className="box scale-x">
                     <p className="text-center text-white">Scale X</p>
                     Scale X
                  </div>
               </Col>
         
             
               <Col>
                  <div className="box rotate">
                     <p className="text-center text-white">Rotate </p>
                     Rotate
                  </div>
               </Col>

               <Col>
                  <div className="box skew">
                     <p className="text-center text-white">Skew </p>
                     Skew
                  </div>
               </Col>

               <Col>
                  <div className="box translate">
                     <p className="text-center text-white">Translate</p>
                     Translate
                  </div>
               </Col>
            </Row>

            <Row>
              <Col>
                  <div className="box1 bgcolor1">
                     <p className="text-center text-white">
                     Bgcolor1
                     </p>
                  </div>
               </Col>
              <Col>
                  <div className="box1 bgcolor2">
                     <p className="text-center text-white">
                     Bgcolor2
                     </p>
                  </div>
               </Col>

            </Row>

            <Row>
               <Col>
                  <div className="boxrace race1"></div>
                  <div className="boxrace race2"></div>
                  <div className="boxrace race3"></div>
                  <div className="boxrace race4"></div>
                  <div className="boxrace race5"></div>

               </Col>
            </Row>
         </Container>
      </section>
   )
}

