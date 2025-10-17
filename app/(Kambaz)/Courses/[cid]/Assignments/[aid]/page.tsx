"use client"
import { useParams } from "next/navigation";
import { Card, Col, Form, InputGroup, Row } from "react-bootstrap";
import InputGroupText from "react-bootstrap/esm/InputGroupText";
import { FaRegCalendarAlt } from "react-icons/fa";
import * as db from "../../../../Database";

export default function AssignmentEditor() {
  const { aid } = useParams();
  const assignment = db.assignments.filter((assignment) => assignment._id === aid);
  return (
    <div id="wd-assignments-editor">
      <Form.Label className="mb-3">Assignment Name</Form.Label>
      <Form.Control className="mb-3" value={assignment[0].title} />
      
      <Form.Control as="textarea" rows={12} className="mb-3" value="The assignment is available online 
      Submit a link to the landing page of your Web application running on Netify." />

      <Row>
        <Col xs={4}>
          <Form.Label className="mb-3 float-end">Points </Form.Label>
        </Col>
        <Col >
          <Form.Control className="mb-3 float-end" value='100'></Form.Control>
        </Col>
      </Row>

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
      </Row>

      <Row>
        <Col xs={4}>
          <Form.Label className="mb-3 float-end">Assign </Form.Label>
        </Col>
        <Col >
          <Card className="p-3 mb-3">
            <Form.Label> Assign To</Form.Label>
            <Form.Control className="mb-3 float-end" value="Everyone"></Form.Control>
            <Form.Label> Due</Form.Label>
            <InputGroup className="mb-3 float-start">
                <Form.Control className="mb-3"
                value="2024-05-13"
                />
                <InputGroupText className="mb-3"><FaRegCalendarAlt/></InputGroupText>
            </InputGroup>
            <Row>
              <Col>
                <Form.Label> Available from</Form.Label>
                <InputGroup className="mb-3 float-start">
                    <Form.Control className="mb-3"
                    value="2024-05-06"
                    />
                    <InputGroupText className="mb-3"><FaRegCalendarAlt/></InputGroupText>
                </InputGroup>
              </Col>
              <Col>
                <Form.Label> Until</Form.Label>
                <InputGroup className="mb-3 float-start" >
                    <Form.Control className="mb-3"
                    value="2024-05-20"
                    />
                    <InputGroupText className="mb-3"><FaRegCalendarAlt/></InputGroupText>
                </InputGroup>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
);}