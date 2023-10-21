import MainPage from '../components/pages/MainPage';

export default function Home() {
  return (
    <main className="px-[20%]">
      <MainPage />
      <div className="flicker" />
      <div className="scanlines" />
      <div className="noise" />
    </main>
  );
}
