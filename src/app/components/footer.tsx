import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="flex flex-col w-full">
      <Link className="flex w-full justify-center py-2.5 uppercase items-center border-b-2 border-solid hover:underline hover:underline-offset-4 bg-red-two" href="/" rel="noopener noreferrer">Home</Link>

      <Link className="flex w-full justify-center py-2.5 uppercase items-center border-b-2 border-solid hover:underline hover:underline-offset-4 bg-red-one" href="/about" rel="noopener noreferrer">About</Link>

      <Link className="flex w-full justify-center py-2.5 uppercase items-center border-b-2 border-solid hover:underline hover:underline-offset-4 bg-blue-two" href="/resume" rel="noopener noreferrer">Resume</Link>

      <Link className="flex w-full justify-center py-2.5 uppercase items-center border-b-2 border-solid hover:underline hover:underline-offset-4 bg-blue-one" href="https://www.linkedin.com/in/mattwsteele" rel="noopener noreferrer">LinkedIn</Link>

      <Link className="flex w-full justify-center py-2.5 uppercase items-center border-b-2 border-solid hover:underline hover:underline-offset-4 bg-gray-two" href="https://westerncode.com" rel="noopener noreferrer">Western Code</Link>
    </footer>
  );
}