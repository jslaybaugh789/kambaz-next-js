import Link from "next/link";
import Image from "next/image";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image src="/images/reactjs.jpg" width={200} height={150} alt={""} />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
            <Link href="/Courses/4550" className="wd-dashboard-course-link">
            <Image src="/images/webbrowsers.jpg" width={200} height={150} alt={""} />
            <div>
              <h5> CS4550 Web Development </h5>
              <p className="wd-dashboard-course-title">
                Web Dev
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
            <Link href="/Courses/4700" className="wd-dashboard-course-link">
            <Image src="/images/networks.jpg" width={200} height={150} alt={""} />
            <div>
              <h5> CS4700 Networks </h5>
              <p className="wd-dashboard-course-title">
                Computer Networks
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
            <Link href="/Courses/3650" className="wd-dashboard-course-link">
            <Image src="/images/systems.jpg" width={200} height={150} alt={""} />
            <div>
              <h5> CS3650 Computer Systems</h5>
              <p className="wd-dashboard-course-title">
                Computer Systems
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
            <Link href="/Courses/1800" className="wd-dashboard-course-link">
            <Image src="/images/discrete.jpg" width={200} height={150} alt={""} />
            <div>
              <h5> CS1800 Discrete Structures </h5>
              <p className="wd-dashboard-course-title">
                Discrete Structures
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
            <Link href="/Courses/4520" className="wd-dashboard-course-link">
            <Image src="/images/mobiledev.jpg" width={200} height={150} alt={""} />
            <div>
              <h5> CS4520 Mobile App Development </h5>
              <p className="wd-dashboard-course-title">
                Mobile App Dev
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
            <Link href="/Courses/3000" className="wd-dashboard-course-link">
            <Image src="/images/algorithms.jpg" width={200} height={150} alt={""} />
            <div>
              <h5> CS3000 Algorithms </h5>
              <p className="wd-dashboard-course-title">
                Algorithms
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
            <Link href="/Courses/4400" className="wd-dashboard-course-link">
            <Image src="/images/pl.jpg" width={200} height={150} alt={""} />
            <div>
              <h5> CS4400 Programming Languages </h5>
              <p className="wd-dashboard-course-title">
                Programming Languages
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
);}
