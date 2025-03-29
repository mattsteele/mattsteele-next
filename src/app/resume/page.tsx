import Image from 'next/image';

export default function Resume() {
  return (
    <>
      <div role="document" className="flex bg-gray-100 text-gray-900 font-sans min-h-screen">

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
                <button className="actions__btn js-print utl-screen-only has-tooltip" aria-label="Print Résumé">
                  <Image
                    className="icon icon--print"
                    src="/icons/print.svg"
                    width="24"
                    height="24"
                    alt="Print Resume"
                    style={{ filter: 'invert(1)' }}
                  />
                </button>
              </div>
            </div>
          </aside>
        </div>

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
                I’m a Software Engineer with 10 years of experience. I create web applications with JavaScript (Vue, Angular, Node, etc.).
                I build design systems, prototypes, and proof-of-concept work. My work encompasses front-end architecture, backend API’s & AWS.
              </p>
            </section>

            <section id="section-experience" className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Work Experience</h2>
              <ol className="space-y-8">
                <li>
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
                      As part of the Design Enablement Team I create JavaScript based prototypes, proof-of-concept applications & design systems work.
                      My work encompasses front-end architecture, backend API’s, and work in AWS.
                    </p>
                  </article>
                </li>
                <li>
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
                      At Clover I created client-facing applications in JavaScript & PHP backed by Craft & Statamic CMS’s.
                      I saw the entire client lifecycle from initial UX design & flows to training clients on CMS usage.
                      My work included developing eCommerce sites & associated payment & user flows.
                    </p>
                  </article>
                </li>
                <li>
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
                      At Brand Iron I led a small team creating websites for clients in a variety of industries.
                      I was responsible for front-end & back-end operations & maintenance.
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
              <p>© Matt Steele</p>
              <p>Last updated: 16.06.2021</p>
            </div>
          </footer>
        </div>

      </div>
    </>
  );
}