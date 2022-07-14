import SpreadsheetExport from "../components/ProgressTracker/SpreadsheetExport";
import ContentScrollCard from "../components/shared/ContentScrollCard";
import Navbar from "../components/shared/Navbar";
import TeacherSidebar from "../components/shared/TeacherSidebar";

export default function ProgressTracker() {
  return (
    <div>
      <Navbar />
      <TeacherSidebar />
      <ContentScrollCard>
        <SpreadsheetExport />
      </ContentScrollCard>
    </div>
  );
}
