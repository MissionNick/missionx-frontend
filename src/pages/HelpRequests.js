import ContentScrollCard from "../components/shared/ContentScrollCard";
import Navbar from "../components/shared/Navbar";
import TeacherSidebar from "../components/shared/TeacherSidebar";

export default function HelpRequests() {
  return (
    <div>
      <Navbar />
      <TeacherSidebar />
      <ContentScrollCard></ContentScrollCard>
    </div>
  );
}
