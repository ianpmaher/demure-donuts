import { Separator } from "@/components/ui/separator";
import MainPage from "./components/MainPage";
import MenuTest from "./components/MenuTest";
import CommentModal from "./components/CommentModal";

export default function Home() {
  return (
    <main className="lexend flex flex-col justify-center items-center">
      <MainPage className="max-w-screen" />
      <Separator className="my-4" />
      <MenuTest className="" />
      <CommentModal />
    </main>
  );
}
