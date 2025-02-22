import Footer from '../app/components/footer';

export default function Home() {
  return (
    <>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-8xl uppercase text-blue-one">Matt Steele</h1>
        <h2 className="text-4xl text-blue-one">Software Engineer</h2>
        </main>
      </div>
      <Footer />
    </>
  );
}
