import Footer from '../components/footer';
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <>
      <div className="flex flex-col justify-center h-screen text-center">

        <div className="relative size-120 bg-blue-one mx-auto">
          <div className="absolute top-10 left-10 text-left text-2xl">
            <h2>Matt Steele</h2>
            <h3>Software Engineer</h3>
          </div>
          <Image
            src="/images/avatar.png"
            width={326}
            height={326}
            alt="Matt Steele"
            className="absolute bottom-0 right-0"
          />
        </div>

        <div className="max-w-4xl text-blue-one text-xl text-left mx-auto p-4">
          <p className="py-4 leading-7">I build &amp; maintain systems for designers &amp; developers. Much of my work is in component libraries, tokens, application prototyping, &amp; proof-of-concept work.</p>

          <p className="py-4 leading-7">My work is driven by <Link href="https://www.interaction-design.org/literature/topics/ux-design">User Experience (UX)</Link>,  <Link href="https://www.invisionapp.com/inside-design/guide-to-design-systems/">Design Systems</Link> &amp; <Link href="https://www.ideou.com/pages/design-thinking">Design Thinking</Link>.</p>

          <p className="py-4 leading-7">I currently work as a Senior Software Engineer at Charter Communications in Denver, Colorado.</p>

          <p className="py-4 leading-7">You can reach me <Link href="mailto:mattsteele000@gmail.com">here</Link>.</p>

          <div>
            <Image
              src="/images/mattsteele-signature.png"
              width={100}
              height={34}
              alt="Matt Steele Signature"
            />
            <h2>Matt Steele</h2>
          </div>
        </div>
      </div>



      <Footer />
    </>
  );
}