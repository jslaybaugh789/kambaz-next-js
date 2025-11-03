/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import Link from "next/link";
import { Col, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import { FiFileText } from "react-icons/fi";
import AssignmentsControlButtons from "./AssignmentsControlButtons";
import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentControls from "./AssignmentControls";
import { useParams } from "next/navigation";
import { RootState } from "../../../store";
import { addAssignment, updateAssignment, deleteAssignment }
  from "./reducer";
import { useSelector, useDispatch } from "react-redux";
export default function Assignments() {
  const { cid } = useParams();
  const { assignments } = useSelector((state: RootState) => state.assignmentsReducer);
  const dispatch = useDispatch();
  return (
    <div id="wd-assignments">
      <AssignmentControls/>
      <br /><br /><br /><br />
      <ListGroup className="rounded-0" id="wd-modules">
        <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary"> 
            <BsGripVertical className="me-2 fs-3" /> <IoMdArrowDropdown/> ASSIGNMENTS <AssignmentsControlButtons/>
          </div>
          <ListGroup className="wd-assignments rounded-0">
            {assignments
            .filter((assignment: any) => assignment.course === cid)
            .map((assignment: any) => (
            <ListGroupItem key={assignment._id} className="wd-lesson p-3 ps-1">
              <Row>
              <Col xs="auto"><BsGripVertical className="me-2 fs-3" /></Col>
              <Col xs="auto"><FiFileText className="me-2" style={{ color:"green"}}/></Col>
              <Col> <Link href={`/Courses/${cid}/Assignments/${assignment._id}`} style={{color:"black"}}><h4>{assignment._id} - {assignment.title}</h4></Link>
              <span className="text-danger"> Multiple Modules </span>| <b>Not available until</b> {assignment.available_from} | <b>Due</b> {assignment.due} | {assignment.points} pts
              </Col>
              <Col xs="auto">
              <AssignmentControlButtons assignmentId={assignment._id} 
                deleteAssignment={(assignmentId) => {dispatch(deleteAssignment(assignmentId))}}/>
              </Col>
              </Row>
            </ListGroupItem>))}
          </ListGroup>
        </ListGroupItem>
      </ListGroup>
    </div>
);}
