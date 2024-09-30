import Hero from "./components/Hero";
import MainPage from "./components/MainPage";

export default function Home() {
  return (
    <div className="center-center lexend">
      <main className="flex flex-col justify-center items-center sm:items-start">
        <div className="center-center">
          <Hero />
        </div>
        <MainPage />
      </main>
    </div>
  );
}
