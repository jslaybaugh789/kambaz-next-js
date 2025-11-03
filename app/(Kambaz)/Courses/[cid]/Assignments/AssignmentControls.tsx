import Link from "next/link";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import InputGroupText from "react-bootstrap/esm/InputGroupText";
import { BiSearch } from "react-icons/bi";
import { FaPlus } from "react-icons/fa6";
import { v4 as uuidv4 } from "uuid";
export default function AssignmentControls() {
    return (
        <div id="wd-modules-controls" className="text-nowrap">
            <InputGroup className="mb-3 float-start" size="lg" style={{ width: "500px"}}>
                <InputGroupText><BiSearch/></InputGroupText>
                <FormControl 
                placeholder="Search..."
                />
            </InputGroup>
            <Link href={`./Assignments/${uuidv4()}`}>
            <Button variant="danger" size="lg" className="me-1 float-end" id="wd-add-assignment-btn">
            <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
            Assignment
            </Button>
            </Link>
            <Button variant="secondary" size="lg" className="me-2 float-end" id="wd-add-group-btn">
            <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
            Group
            </Button>
        </div>
    )
}