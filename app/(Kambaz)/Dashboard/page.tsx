import Link from "next/link";
import Image from "next/image";
import { Button, Card, CardBody, CardImg, CardText, CardTitle, Col, Row } from "react-bootstrap";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
            <Link href="/Courses/1234/Home"
                  className="wd-dashboard-course-link text-decoration-none text-dark">
              <CardImg variant="top" src="/images/reactjs.jpg" width="100%" height={160}/>
              <CardBody>
              <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS1234 React JS</CardTitle>
              <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                Full Stack software developer</CardText>
              <Button variant="primary">Go</Button>
              </CardBody>
            </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
            <Link href="/Courses/4500/Home"
                  className="wd-dashboard-course-link text-decoration-none text-dark">
              <CardImg variant="top" src="/images/webbrowsers.jpg" width="100%" height={160}/>
              <CardBody>
              <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS4550 Web Development</CardTitle>
              <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                Web Dev</CardText>
              <Button variant="primary">Go</Button>
              </CardBody>
            </Link>
            </Card>
          </Col>

        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
            <Link href="/Courses/4700/Home"
                  className="wd-dashboard-course-link text-decoration-none text-dark">
              <CardImg variant="top" src="/images/networks.jpg" width="100%" height={160}/>
              <CardBody>
              <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS4700 Networks</CardTitle>
              <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                Computer Networks</CardText>
              <Button variant="primary">Go</Button>
              </CardBody>
            </Link>
            </Card>
          </Col>
      

        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
            <Link href="/Courses/3650/Home"
                  className="wd-dashboard-course-link text-decoration-none text-dark">
              <CardImg variant="top" src="/images/systems.jpg" width="100%" height={160}/>
              <CardBody>
              <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS3650 Computer Systems</CardTitle>
              <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                Computer Systems</CardText>
              <Button variant="primary">Go</Button>
              </CardBody>
            </Link>
            </Card>
          </Col>
        
        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
            <Link href="/Courses/1800/Home"
                  className="wd-dashboard-course-link text-decoration-none text-dark">
              <CardImg variant="top" src="/images/discrete.jpg" width="100%" height={160}/>
              <CardBody>
              <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS1800 Discrete Structures</CardTitle>
              <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                Discrete Structures</CardText>
              <Button variant="primary">Go</Button>
              </CardBody>
            </Link>
            </Card>
          </Col>

        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
            <Link href="/Courses/4520/Home"
                  className="wd-dashboard-course-link text-decoration-none text-dark">
              <CardImg variant="top" src="/images/mobiledev.jpg" width="100%" height={160}/>
              <CardBody>
              <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS4520 Mobile App Development</CardTitle>
              <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                Mobile App Dev</CardText>
              <Button variant="primary">Go</Button>
              </CardBody>
            </Link>
            </Card>
          </Col>

        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
            <Link href="/Courses/3000/Home"
                  className="wd-dashboard-course-link text-decoration-none text-dark">
              <CardImg variant="top" src="/images/algorithms.jpg" width="100%" height={160}/>
              <CardBody>
              <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden"> CS3000 Algorithms</CardTitle>
              <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                Algorithms</CardText>
              <Button variant="primary">Go</Button>
              </CardBody>
            </Link>
            </Card>
          </Col>

        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
            <Link href="/Courses/4400/Home"
                  className="wd-dashboard-course-link text-decoration-none text-dark">
              <CardImg variant="top" src="/images/pl.jpg" width="100%" height={160}/>
              <CardBody>
              <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden"> CS4400 Programming Languages</CardTitle>
              <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                Programming Languages</CardText>
              <Button variant="primary">Go</Button>
              </CardBody>
            </Link>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
);}
