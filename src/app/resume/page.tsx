import Image from 'next/image';

export default function Resume() {
  return (
    <>
      <div role="document" className="flex bg-gray-100 text-gray-900 font-sans">

        <div className="left-content basis-2xs bg-[var(--color-blue-five)] text-white w-1/4 p-6">
          <aside className="sidebar">
            <div className="container">
              <div className="actions">
                <a className="actions__btn has-tooltip" aria-label="Email" href="mailto:mattsteele@outlook.com">
                  <Image
                    className="icon icon--email"
                    src="/icons/email.svg"
                    width="24"
                    height="24"
                    alt="Email"
                    style={{ filter: 'invert(1)' }}
                  />
                </a>
                {/* The click event is causing an error */}
                {/* <button
                  className="actions__btn js-print utl-screen-only has-tooltip"
                  aria-label="Print Résumé"
                  onClick={() => window.print()}
                > 
                <Image
                  className="icon icon--print"
                  src="/icons/print.svg"
                  width="24"
                  height="24"
                  alt="Print Resume"
                  style={{ filter: 'invert(1)' }}
                /> 
                </button> */}
              </div>
            </div>
          </aside>
        </div >

        <div className="right-content">
          <header className="py-12 text-gray-900">
            <div className="container mx-auto px-6">
              <div className="flex items-center">
                <div className="mr-8">
                  <Image
                    src="/images/avatar.png"
                    width="150"
                    height="150"
                    alt="Matt Steele"
                    className="rounded-full border-4 white"
                  />
                </div>
                <div>
                  <h1 className="text-5xl font-bold">Matt Steele</h1>
                  <p className="text-xl mt-2">
                    <span>Senior Software Engineer</span>
                    <span className="mx-2" aria-hidden="true">·</span>
                    <span>Denver, CO</span>
                  </p>
                  <div className="flex items-center mt-6 space-x-6">
                    <a
                      aria-label="Email"
                      href="mailto:mattsteele@outlook.com"
                      className="flex items-center text-gray-900 hover:underline"
                    >
                      <Image
                        className="fill-white"
                        src="/icons/email.svg"
                        width="20"
                        height="20"
                        alt="Email Icon"
                      />
                      <span className="ml-2">mattsteele@outlook.com</span>
                    </a>
                    <a
                      aria-label="Website"
                      href="https://mattsteele.dev"
                      className="flex items-center text-gray-900 hover:underline"
                    >
                      <Image
                        className="fill-white"
                        src="/icons/laptop.svg"
                        width="20"
                        height="20"
                        alt="Website Icon"
                      />
                      <span className="ml-2">mattsteele.dev</span>
                    </a>
                  </div>
                  <button aria-label="Print Résumé" className="text-gray-900 hover:text-gray-900">
                    <Image
                      className="fill-white"
                      src="/icons/print.svg"
                      width="24"
                      height="24"
                      alt="Print Icon"
                    />
                  </button>
                </div>
              </div>
            </div>
          </header>

          <main className="container mx-auto px-6 pb-12 flex-grow">
            <section id="section-introduction" className="mb-12">
              <p className="text-lg leading-relaxed">
                Experienced Software Engineer with 10+ years of expertise in building scalable web applications, design systems, and enhancing developer experience (DX). Proficient in JavaScript, React, and Angular with a strong focus on front-end architecture, backend APIs, and AWS. Skilled in delivering end-to-end solutions, including eCommerce platforms, developer tooling, and client-facing applications.
              </p>
            </section>

            <section id="section-experience" className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Work Experience</h2>
              <ol className="entrylist space-y-8">
                <li className="entrylist__item">
                  <article>
                    <div className="mb-4">
                      <h3 className="text-2xl font-semibold">Senior Software Engineer</h3>
                      <p className="text-sm text-gray-600">
                        <time dateTime="2017-10-01">10/2017</time>
                        <span className="mx-1">–</span>
                        <span>Present</span>
                      </p>
                      <p className="text-sm text-gray-600">
                        <a href="https://www.spectrum.net" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                          Charter Communications
                        </a>
                        <span className="mx-1" aria-hidden="true">·</span>
                        <span>Denver, CO</span>
                      </p>
                    </div>
                    <p className="text-lg leading-relaxed">
                      At Charter I contribute to the Design Systems Engineering Team by developing and maintaining scalable libraries and tools in JavaScript, React, and Angular. I develop solutions using design tokens, iconography, and individual components to enhance the developer experience and streamline application development.
                    </p>
                  </article>
                </li>
                <li className="entrylist__item">
                  <article>
                    <div className="mb-4">
                      <h3 className="text-2xl font-semibold">Senior Web Developer</h3>
                      <p className="text-sm text-gray-600">
                        <time dateTime="2016-05-01">05/2016</time>
                        <span className="mx-1">–</span>
                        <time dateTime="2017-10-01">10/2017</time>
                      </p>
                      <p className="text-sm text-gray-600">
                        <a href="https://clover.partners/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                          Clover Partners
                        </a>
                        <span className="mx-1" aria-hidden="true">·</span>
                        <span>Denver, CO</span>
                      </p>
                    </div>
                    <p className="text-lg leading-relaxed">
                      Developed client-facing applications using JavaScript and PHP, integrated with Craft and Statamic CMS platforms. Led the full client lifecycle, from UX design and workflows to CMS training. Delivered eCommerce solutions, including payment systems and user flow optimizations.
                    </p>
                  </article>
                </li>
                <li className="entrylist__item">
                  <article>
                    <div className="mb-4">
                      <h3 className="text-2xl font-semibold">Lead Web Developer/UX Designer</h3>
                      <p className="text-sm text-gray-600">
                        <time dateTime="2015-01-01">01/2015</time>
                        <span className="mx-1">–</span>
                        <time dateTime="2016-02-01">02/2016</time>
                      </p>
                      <p className="text-sm text-gray-600">
                        <a href="https://www.brandiron.net" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                          Brand Iron
                        </a>
                        <span className="mx-1" aria-hidden="true">·</span>
                        <span>Denver, CO</span>
                      </p>
                    </div>
                    <p className="text-lg leading-relaxed">
                      Led a team to design and develop websites for clients across various industries. Managed front-end and back-end development, ensuring seamless operations and ongoing maintenance.
                    </p>
                  </article>
                </li>
              </ol>
            </section>

            <section id="section-education" className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Education</h2>
              <ol className="space-y-6">
                <li>
                  <article>
                    <div>
                      <h3 className="text-2xl font-semibold">Bachelor of Fine Arts</h3>
                      <p className="text-sm text-gray-600">
                        <a href="https://www.academyart.edu/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                          Academy of Art University
                        </a>
                        <span className="mx-1" aria-hidden="true">·</span>
                        <span>San Francisco, CA</span>
                      </p>
                    </div>
                  </article>
                </li>
              </ol>
            </section>
          </main>

          <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto px-6 text-center">
              {/* <p>© Matt Steele</p> */}
              {/* <p>Last updated: 16.06.2021</p> */}
            </div>
          </footer>
        </div>

      </div >
    </>
  );
}