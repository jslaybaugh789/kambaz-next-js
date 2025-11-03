"use client";
import { ReactNode } from "react";
import CourseNavigation from "./Navigation";
import { FaAlignJustify } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useParams } from "next/navigation";
import { RootState } from "../../store";
export default  function CoursesLayout({ children }: { children: ReactNode }) {
 const { cid } = useParams();
 const { courses } = useSelector((state: RootState) => state.coursesReducer);
 // eslint-disable-next-line @typescript-eslint/no-explicit-any
 const course = courses.find((course: any) => course._id === cid);
 let hide_nav = false;
 function changeNavVis() {
  hide_nav = !hide_nav;
  document.getElementById("show-nav").hidden = hide_nav;
 } 
 return (
   <div id="wd-courses">
    <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" onClick={()=>changeNavVis()}/>
        {course?.name}</h2> <hr />

    <div className="d-flex">
      <div id="show-nav">
        <CourseNavigation id={String(cid)} />
      </div>
      <div className="flex-fill">
        {children}
      </div></div>
  </div>
);}
