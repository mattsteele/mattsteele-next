import Image from 'next/image';

export default function Resume() {
  return (
    <>
      <div role="document">
        <header>
          <div>
            <div>
              <div>
                <div>
                  <h1>Matt Steele</h1>
                </div>
                <p>
                  <span>Senior Software Engineer</span>
                  <span aria-hidden="true">·</span>
                  <span>Denver, CO</span>
                </p>
                <div>
                  <a aria-label="Email" href="mailto:mattsteele@outlook.com">
                    <Image src="/images/avatar.png" width="200" height="200" alt="Matt Steele" />
                    <Image src="/icons/email.svg" width="24" height="24" alt="Email Icon" />
                    <span>mattsteele@outlook.com</span>
                  </a>
                  <a aria-label="Website" href="https://mattsteele.dev">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <path d="M22 18V3H2v15H0v2h24v-2h-2zm-8 0h-4v-1h4v1zm6-3H4V5h16v10z" />
                    </svg>
                    <span>mattsteele.dev</span>
                  </a>
                  <div>
                    <a href="https://github.com/mattsteele" aria-label="Github" rel="me">
                      <Image src="/icons/github.svg" width="24" height="24" alt="Github Icon" />
                      <span>@mattsteele</span>
                      <span className="sr-only">on Github</span>
                    </a>
                    <a href="https://www.linkedin.com/in/mattwsteele" aria-label="LinkedIn" rel="me">
                      <Image src="/icons/linkedin.svg" width="24" height="24" alt="LinkedIn Icon" />
                      <span>mattwsteele</span>
                      <span className="sr-only">on LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main>
          <section id="section-introduction">
            <h2>About Me</h2>
            <div>
              <p>
                I’m a Software Engineer with 10 years of experience. I create web applications with JavaScript (Vue, Angular, Node, etc.).
                I build prototypes, design systems tooling, and proof-of-concept work. My work encompasses front-end architecture, backend API’s & AWS.
              </p>
            </div>
          </section>

          <section id="section-experience">
            <h2>Work Experience</h2>
            <ol>
              <li>
                <article>
                  <div>
                    <h3>Senior Software Engineer</h3>
                    <p>
                      <time dateTime="2017-10-01">10/2017</time>
                      <span>–</span>
                      <span>Present</span>
                    </p>
                    <p>
                      <a href="https://www.spectrum.net" target="_blank" rel="noopener noreferrer">Charter Communications</a>
                      <span aria-hidden="true">·</span>
                      <span>Denver, CO</span>
                    </p>
                  </div>
                  <div>
                    <p>
                      As part of the Design Enablement Team I create JavaScript based prototypes, proof-of-concept applications & design systems work.
                      My work encompasses front-end architecture, backend API’s, and work in AWS.
                    </p>
                  </div>
                </article>
              </li>
              <li>
                <article>
                  <div>
                    <h3>Senior Web Developer</h3>
                    <p>
                      <time dateTime="2016-05-01">05/2016</time>
                      <span>–</span>
                      <time dateTime="2017-10-01">10/2017</time>
                    </p>
                    <p>
                      <a href="https://clover.partners/" target="_blank" rel="noopener noreferrer">Clover Partners</a>
                      <span aria-hidden="true">·</span>
                      <span>Denver, CO</span>
                    </p>
                  </div>
                  <div>
                    <p>
                      At Clover I created client-facing applications in JavaScript & PHP backed by Craft & Statamic CMS’s.
                      I saw the entire client lifecycle from initial UX design & flows to training clients on CMS usage.
                      My work included developing eCommerce sites & associated payment & user flows.
                    </p>
                  </div>
                </article>
              </li>
              <li>
                <article>
                  <div>
                    <h3>Lead Web Developer/UX Designer</h3>
                    <p>
                      <time dateTime="2015-01-01">01/2015</time>
                      <span>–</span>
                      <time dateTime="2016-02-01">02/2016</time>
                    </p>
                    <p>
                      <a href="https://www.brandiron.net" target="_blank" rel="noopener noreferrer">Brand Iron</a>
                      <span aria-hidden="true">·</span>
                      <span>Denver, CO</span>
                    </p>
                  </div>
                  <div>
                    <p>
                      At Brand Iron I led a small team creating websites for clients in a variety of industries.
                      I was responsible for front-end & back-end operations & maintenance.
                    </p>
                  </div>
                </article>
              </li>
            </ol>
          </section>

          <section id="section-education">
            <h2>Education</h2>
            <ol>
              <li>
                <article>
                  <div>
                    <h3>Bachelor of Fine Arts</h3>
                    <p>
                      <a href="https://www.academyart.edu/" target="_blank" rel="noopener noreferrer">Academy of Art University</a>
                      <span aria-hidden="true">·</span>
                      <span>San Francisco, CA</span>
                    </p>
                  </div>
                </article>
              </li>
            </ol>
          </section>
        </main>

        <aside>
          <div>
            <div>
              <a aria-label="Email" href="mailto:mattsteele@outlook.com">
                <Image src="/icons/email.svg" width="24" height="24" alt="Email Icon" />
              </a>
              <button aria-label="Print Résumé">
                <Image src="/icons/print.svg" width="24" height="24" alt="Print Icon" />
              </button>
            </div>
          </div>
        </aside>

        <footer>
          <div>
            <p>© Matt Steele</p>
            <p>Last updated: 16.06.2021</p>
          </div>
        </footer>
      </div>
    </>
  );
}