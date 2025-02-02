import Link from 'next/link';

export default function About() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
       <h1 className="text-8xl uppercase">About</h1>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">

        <Link className="flex items-center gap-2 hover:underline hover:underline-offset-4" href="/" rel="noopener noreferrer">Home</Link>

        <Link className="flex items-center gap-2 hover:underline hover:underline-offset-4" href="/about" rel="noopener noreferrer">About</Link>

        <Link className="flex items-center gap-2 hover:underline hover:underline-offset-4" href="/resume" rel="noopener noreferrer">Resume</Link>

        <Link className="flex items-center gap-2 hover:underline hover:underline-offset-4" href="https://www.linkedin.com/in/mattwsteele" rel="noopener noreferrer">LinkedIn</Link>

        <Link className="flex items-center gap-2 hover:underline hover:underline-offset-4" href="https://westerncode.com" rel="noopener noreferrer">Western Code</Link>
      </footer>
    </div>
  );
}