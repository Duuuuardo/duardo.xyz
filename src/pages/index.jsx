import MainPage from "../components/pages/MainPage";

export default function Home() {
  return (
    <main className="px-[20%] bg-black">
      <MainPage />
      <div className="flicker" />
      <div className="scanlines" />
      <div className="noise" />
    </main>
  );
}
