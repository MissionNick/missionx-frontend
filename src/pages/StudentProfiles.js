import Navbar from "../components/shared/Navbar";
import Sidebar from "../components/shared/Sidebar";
import StudentCard from "../components/StudentProfiles/StudentCard";

export default function StudentProfiles() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <StudentCard />
    </div>
  );
}
