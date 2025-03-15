import Footer from '../components/footer';
import Image from 'next/image'

export default function About() {
  return (
    <>
      <div className="flex flex-col justify-center h-screen text-center">

        <div className="relative m-auto size-120 bg-blue-one pt-2 pl-2">
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

        <div className="text-blue-one">
          <p>I build &amp; maintain systems for designers &amp; developers. Much of my work is in component libraries, tokens, application prototyping, &amp; proof-of-concept work.</p>

          <p>My work is driven by <a href="https://www.interaction-design.org/literature/topics/ux-design">User Experience (UX)</a>,  <a href="https://www.invisionapp.com/inside-design/guide-to-design-systems/">Design Systems</a> &amp; <a href="https://www.ideou.com/pages/design-thinking">Design Thinking</a>.</p>

          <p>I currently work as a Senior Software Engineer at Charter Communications in Denver, Colorado.</p>

          <p>You can reach me <a href="mailto:mattsteele@outlook.com">here</a>.</p>

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