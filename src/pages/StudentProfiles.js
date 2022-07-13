import ContentScrollCard from "../components/shared/ContentScrollCard";
import Navbar from "../components/shared/Navbar";
import SecondaryFooter from "../components/shared/SecondaryFooter";
import TeacherSidebar from "../components/shared/TeacherSidebar";
import StudentCard from "../components/StudentProfiles/StudentCard";

export default function StudentProfiles() {
  return (
    <div>
      <Navbar />
      <TeacherSidebar />
      <ContentScrollCard>
        <StudentCard />
      </ContentScrollCard>
      <SecondaryFooter />
    </div>
  );
}
