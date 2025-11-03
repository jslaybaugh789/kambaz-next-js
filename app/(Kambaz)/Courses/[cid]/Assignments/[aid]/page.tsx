"use client"
import { useParams } from "next/navigation";
import { Button, Card, Col, Form, InputGroup, Row } from "react-bootstrap";
import InputGroupText from "react-bootstrap/esm/InputGroupText";
import { FaRegCalendarAlt } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
import { addAssignment, updateAssignment }
  from "../reducer";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/(Kambaz)/store";
export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const dispatch = useDispatch();
  const { assignments } = useSelector((state: RootState) => state.assignmentsReducer);
  const assignment = assignments.filter((assignment) => assignment._id === aid)[0];
  let assignmentExists = true;
  if (assignment == null) {
    assignmentExists = false;
  }
  const [assignmentName, setAssignmentName] = useState(assignmentExists ? assignment.title : "");
  const [assignmentDescription, setAssignmentDescription] = useState(assignmentExists ? assignment.description : "");
  const [assignmentPoints, setAssignmentPoints] = useState(assignmentExists ? assignment.points : "");
  const [assignmentDue, setAssignmentDue] = useState(assignmentExists ? assignment.due : "");
  const [assignmentAvailableFrom, setAssignmentAvailableFrom] = useState(assignmentExists ? assignment.available_from : "");
  const [assignmentAvailableUntil, setAssignmentAvailableUntil] = useState(assignmentExists ? assignment.available_until : "");
  return (
    <div id="wd-assignments-editor">
      <Form.Label className="mb-3">Assignment Name</Form.Label>
      <Form.Control className="mb-3" value={assignmentName}
      onChange={(e) => { setAssignmentName(e.target.value); }} />
      <Form.Control as="textarea" rows={12} className="mb-3" value={assignmentDescription}
      onChange={(e) => { setAssignmentDescription(e.target.value); }} />
      <Row>
        <Col xs={4}>
          <Form.Label className="mb-3 float-end">Points </Form.Label>
        </Col>
        <Col >
          <Form.Control className="mb-3 float-end" value={assignmentPoints}
          onChange={(e) => { setAssignmentPoints(e.target.value); }}></Form.Control>
        </Col>
      </Row>
      {/*
      <Row>
        <Col xs={4}>
          <Form.Label className="mb-3 float-end">Assignment Group </Form.Label>
        </Col>
        <Col >
          <Form.Select className="mb-3 float-end">
            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
            <option value="QUIZZES">QUIZZES</option>
            <option value="EXAMS">EXAMS</option>
          </Form.Select>
        </Col>
      </Row>

      <Row>
        <Col xs={4}>
          <Form.Label className="mb-3 float-end">Display Grade As </Form.Label>
        </Col>
        <Col >
          <Form.Select className="mb-3 float-end">
            <option value="Percentage">Percentage</option>
            <option value="Letter">Letter</option>
          </Form.Select>
        </Col>
      </Row>

      <Row>
        <Col xs={4}>
          <Form.Label className="mb-3 float-end">Submission Type </Form.Label>
        </Col>
        <Col >
          <Form>
            <Card className="p-3 mb-3">
              <Form.Select className="mb-3 float-end">
                <option value="Online">Online</option>
                <option value="In-Person">In-Person</option>
              </Form.Select>
              <Form.Label className="mb-3">Online Entry Options </Form.Label>
              <Form.Check type="checkbox" label="Text Entry" name="check-entry-options"  />
              <Form.Check type="checkbox" label="Website URL" name="check-entry-options"  />
              <Form.Check type="checkbox" label="Media Recordings" name="check-entry-options"  />
              <Form.Check type="checkbox" label="Student Annotations" name="check-entry-options"  />
              <Form.Check type="checkbox" label="File Uploads" name="check-entry-options"  />
            </Card>
          </Form>
        </Col>
      </Row>*/}
      <Row>
        <Col xs={4}>
          <Form.Label className="mb-3 float-end">Assign </Form.Label>
        </Col>
        <Col >
          <Card className="p-3 mb-3">
            {/*
            <Form.Label> Assign To</Form.Label>
            <Form.Control className="mb-3 float-end" value="Everyone"></Form.Control>*/}
            <Form.Label> Due</Form.Label>
            <InputGroup className="mb-3 float-start">
                <Form.Control className="mb-3"
                value={assignmentDue}
                onChange={(e) => { setAssignmentDue(e.target.value); }}
                />
                <InputGroupText className="mb-3"><FaRegCalendarAlt/></InputGroupText>
            </InputGroup>
            <Row>
              <Col>
                <Form.Label> Available from</Form.Label>
                <InputGroup className="mb-3 float-start">
                    <Form.Control className="mb-3"
                    value={assignmentAvailableFrom}
                    onChange={(e) => { setAssignmentAvailableFrom(e.target.value); }}
                    />
                    <InputGroupText className="mb-3"><FaRegCalendarAlt/></InputGroupText>
                </InputGroup>
              </Col>
              <Col>
                <Form.Label> Until</Form.Label>
                <InputGroup className="mb-3 float-start" >
                    <Form.Control className="mb-3"
                    value={assignmentAvailableUntil}
                    onChange={(e) => { setAssignmentAvailableUntil(e.target.value); }}
                    />
                    <InputGroupText className="mb-3"><FaRegCalendarAlt/></InputGroupText>
                </InputGroup>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row> <hr/>
      <div className="float-end">
        <Link href={`./`}>
          <Button className="btn btn-secondary me-3 mb-3">Cancel</Button>
        </Link>
        <Link href={`./`}>
          <Button className="btn btn-danger me-3 mb-3"
          onClick={() => {
            const assignment_mod = {
              _id: aid,
              title: assignmentName,
              course: cid,
              available_from: assignmentAvailableFrom,
              available_until: assignmentAvailableUntil,
              points: assignmentPoints,
              due: assignmentDue,
              description: assignmentDescription
            }
            if (assignmentExists) {
              dispatch(updateAssignment(assignment_mod));
            }
            else {
              dispatch(addAssignment(assignment_mod));
            } 
          }}>
            Save</Button>
        </Link>
      </div>
    </div>
);}