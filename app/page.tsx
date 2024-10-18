import MainPage from "./components/MainPage";
import MenuTest from "./components/MenuTest";

export default function Home() {
  return (
    <main className="lexend flex flex-col justify-center items-center">
      <MenuTest className="" />
      <MainPage className="max-w-screen" />
    </main>
  );
}
