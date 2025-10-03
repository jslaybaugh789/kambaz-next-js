import Link from "next/link";
import { FormControl } from "react-bootstrap";
export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h1>Profile</h1>
      <FormControl id="wd-username"
             value="alice"
             className="mb-2"/><br />
      <FormControl id="wd-password"
             value="123"
             className="mb-2"/><br />
      <FormControl id="wd-firstname"
             value="Alice"
             className="mb-2"/><br />
      <FormControl id="wd-lastname"
             value="Wonderland"
             className="mb-2"/><br />
      <FormControl id="wd-dob"
             value="2000-01-01"
             className="mb-2"/><br />
      <FormControl id="wd-email"
             value="alice@wonderland"
             className="mb-2"/><br />
      <FormControl id="wd-role"
             value="Faculty"
             className="mb-2"/><br />

      <Link id="wd-signout-btn"
            href="/Account/Signin"
            className="btn btn-danger w-100 mb-2">
            Signout</Link><br />

      <h3>Profile</h3>
      <input defaultValue="alice" placeholder="username" className="wd-username"/><br/>
      <input defaultValue="123"   placeholder="password" type="password"
             className="wd-password" /><br/>
      <input defaultValue="Alice" placeholder="First Name" id="wd-firstname" /><br/>
      <input defaultValue="Wonderland" placeholder="Last Name" id="wd-lastname" /><br/>
      <input defaultValue="2000-01-01" type="date" id="wd-dob" /><br/>
      <input defaultValue="alice@wonderland" type="email" id="wd-email" /><br/>
      <select defaultValue="FACULTY" id="wd-role">
        <option value="USER">User</option>       <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option> <option value="STUDENT">Student</option>
      </select><br/>
      <Link href="Signin" > Sign out </Link>
    </div>
);}
