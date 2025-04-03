import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {

  const imageStyle = {
    color: 'white',
    fill: 'white'
  }

  return (
    <footer className="flex flex-col w-full">

      <div className="bg-red-two relative">
        <Link className="flex w-full justify-center py-2 uppercase items-center no-underline hover:*:w-full" href="/" rel="noopener noreferrer">Home
          <span className="bg-gray-300 absolute bottom-0 left-0 block w-0 h-1 transparent transition-width duration-400"></span>
        </Link>
      </div>

      <div className="bg-red-one relative">
        <Link className="flex w-full justify-center py-2 uppercase items-center no-underline hover:*:w-full" href="/about" rel="noopener noreferrer">About
          <span className="bg-gray-300 absolute bottom-0 left-0 block w-0 h-1 transparent transition-width duration-400"></span>
        </Link>
      </div>

      <div className="bg-blue-two relative">
        <Link className="flex w-full justify-center py-2 uppercase items-center no-underline hover:*:w-full" href="/resume" rel="noopener noreferrer">Resume
          <span className="bg-gray-300 absolute bottom-0 left-0 block w-0 h-1 transparent transition-width duration-400"></span>
        </Link>
      </div>

      <div className="bg-blue-one relative">
        <Link className="flex w-full justify-center py-2 uppercase items-center no-underline hover:*:w-full" href="https://www.linkedin.com/in/mattwsteele" rel="noopener noreferrer">LinkedIn
          <Image
            className="self-start pt-0.5"
            src="/icons/external-link.svg"
            width="12"
            height="12"
            alt="External Link Icon"
            style={{ filter: 'invert(1)' }}
          />
          <span className="bg-gray-300 absolute bottom-0 left-0 block w-0 h-1 transparent transition-width duration-400"></span>
        </Link>
      </div>

      <div className="bg-gray-two relative">
        <Link className="flex w-full justify-center py-2 uppercase items-center no-underline hover:*:w-full" href="https://westerncode.com" rel="noopener noreferrer">Western Code
          <Image
            className="self-start pt-0.5"
            src="/icons/external-link.svg"
            width="12"
            height="12"
            alt="External Link Icon"
            style={{ filter: 'invert(1)' }}
          />
          <span className="bg-gray-300 absolute bottom-0 left-0 block w-0 h-1 transparent transition-width duration-400"></span>
        </Link>
      </div>
    </footer>
  );
}