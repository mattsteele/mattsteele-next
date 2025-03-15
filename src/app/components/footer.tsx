import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="flex flex-col w-full">

      <div className="bg-red-two border-b-4 border-solid border-transparent hover:border-b-amber-400">
        <Link className="flex w-full justify-center pt-2 uppercase items-center no-underline" href="/" rel="noopener noreferrer">Home</Link>
      </div>

      <div className="bg-red-one border-b-4 border-solid border-transparent hover:border-b-amber-400">
        <Link className="flex w-full justify-center pt-2 uppercase items-center " href="/about" rel="noopener noreferrer">About</Link>
      </div>

      <div className="bg-blue-two border-b-4 border-solid border-transparent hover:border-b-amber-400">
        <Link className="flex w-full justify-center pt-2 uppercase items-center" href="/resume" rel="noopener noreferrer">Resume</Link>
      </div>

      <div className="bg-blue-one border-b-4 border-solid border-transparent hover:border-b-amber-400">
        <Link className="flex w-full justify-center pt-2 uppercase items-center " href="https://www.linkedin.com/in/mattwsteele" rel="noopener noreferrer">LinkedIn</Link>
      </div>

      <div className="bg-gray-two border-b-4 border-solid border-transparent hover:border-b-amber-400">
        <Link className="flex w-full justify-center pt-2 uppercase items-center" href="https://westerncode.com" rel="noopener noreferrer">Western Code</Link>
      </div>

    </footer>
  );
}