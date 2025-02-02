import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      <Link className="flex items-center gap-2 hover:underline hover:underline-offset-4" href="/" rel="noopener noreferrer">Home</Link>
      <Link className="flex items-center gap-2 hover:underline hover:underline-offset-4" href="/about" rel="noopener noreferrer">About</Link>
      <Link className="flex items-center gap-2 hover:underline hover:underline-offset-4" href="/resume" rel="noopener noreferrer">Resume</Link>
      <Link className="flex items-center gap-2 hover:underline hover:underline-offset-4" href="https://www.linkedin.com/in/mattwsteele" rel="noopener noreferrer">LinkedIn</Link>
      <Link className="flex items-center gap-2 hover:underline hover:underline-offset-4" href="https://westerncode.com" rel="noopener noreferrer">Western Code</Link>
    </footer>
  );
}