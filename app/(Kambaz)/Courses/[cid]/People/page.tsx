import { redirect } from "next/dist/client/components/navigation";

export default function PeoplePage() {
 redirect("./People/Table");
}