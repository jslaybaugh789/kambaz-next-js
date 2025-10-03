import Link from "next/link";
import { Col, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import { FiFileText } from "react-icons/fi";
import AssignmentsControlButtons from "./AssignmentsControlButtons";
import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentControls from "./AssignmentControls";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <AssignmentControls/>
      <br /><br /><br /><br />
      <ListGroup className="rounded-0" id="wd-modules">
        <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary"> 
            <BsGripVertical className="me-2 fs-3" /> <IoMdArrowDropdown/> ASSIGNMENTS <AssignmentsControlButtons/>
          </div>
          <ListGroup className="wd-lessons rounded-0">
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <Row>
              <Col xs="auto"><BsGripVertical className="me-2 fs-3" /></Col>
              <Col xs="auto"><FiFileText className="me-2" style={{ color:"green"}}/></Col>
              <Col> <Link href="/Courses/1234/Assignments/123" style={{color:"black"}}><h4> A1 - ENV + HTML</h4></Link>
              <span className="text-danger"> Multiple Modules </span>| <b>Not available until</b> May 6 at 12:00am | <b>Due</b> May 13 at 11:59pm | 100 pts
              </Col>
              <Col xs="auto"> <AssignmentControlButtons/></Col>
              </Row>
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <Row>
              <Col xs="auto"><BsGripVertical className="me-2 fs-3" /></Col>
              <Col xs="auto"><FiFileText className="me-2" style={{ color:"green"}}/></Col>
              <Col> <Link href="/Courses/1234/Assignments/123" style={{color:"black"}}><h4> A2 - CSS + BOOTSTRAP</h4></Link>
              <span className="text-danger"> Multiple Modules </span>| <b>Not available until</b> May 13 at 12:00am | <b>Due</b> May 20 at 11:59pm | 100 pts
              </Col>
              <Col xs="auto"> <AssignmentControlButtons/></Col>
              </Row>
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <Row>
              <Col xs="auto"><BsGripVertical className="me-2 fs-3" /></Col>
              <Col xs="auto"><FiFileText className="me-2" style={{ color:"green"}}/></Col>
              <Col> <Link href="/Courses/1234/Assignments/123" style={{color:"black"}}><h4> A3 - JAVASCRIPT + REACT</h4></Link>
              <span className="text-danger"> Multiple Modules </span>| <b>Not available until</b> May 20 at 12:00am | <b>Due</b> May 27 at 11:59pm | 100 pts
              </Col>
              <Col xs="auto"> <AssignmentControlButtons/></Col>
              </Row>
            </ListGroupItem>
          </ListGroup>
        </ListGroupItem>
      </ListGroup>
    </div>
);}
