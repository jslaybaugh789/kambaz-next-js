"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function CourseNavigation({id}: {id : string}) {
  const pathname = usePathname();
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => (
        <Link href={`/Courses/${id}/${link}`} key={link}
          className={`border-0 ${pathname.includes(link) ? "active" : "text-danger"}`}>
            {link}</Link>
      ))}
    </div>
);}
