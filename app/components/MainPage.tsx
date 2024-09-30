import { Calendar } from "@/components/ui/calendar";
import { Separator } from "@/components/ui/separator";

const MainPage = () => {
  return (
    <div>
      <h1>Main Page</h1>
      <p>This is the main page</p>
      <div className="w-[50vw]">
        <Separator />
      </div>
      <p>Events Calendar</p>
      <Calendar />
    </div>
  );
};

export default MainPage;
