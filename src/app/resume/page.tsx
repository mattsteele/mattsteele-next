import Image from 'next/image'

export default function Resume() {
  return (
    <>
      <div className="layout h-resume" role="document"><header className="header"><div className="container"><div className="vcard h-card">

        <Image className="vcard__avatar u-photo" src="/images/avatar.png" width="200" height="200" alt="Matt Steele" />


        <div className="vcard__content"><div className="vcard__title"><h1 className="p-name">Matt Steele</h1></div><p className="vcard__subtitle lead"><span className="p-job-title">Senior Software Engineer</span> <span aria-hidden="true">·</span> <span className="p-locality">Denver, CO</span></p><div className="vcard__contact p-contact"><a className="vcard__link u-email" aria-label="Email" href="mailto:mattsteele@outlook.com">

          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
          </svg>




          <span className="vcard__link-text">mattsteele@outlook.com</span> </a><a className="vcard__link u-url" aria-label="Website" href="https://mattsteele.dev">

            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M22 18V3H2v15H0v2h24v-2h-2zm-8 0h-4v-1h4v1zm6-3H4V5h16v10z" />
            </svg>


            <span className="vcard__link-text">mattsteele.dev</span></a><div className="vcard__social"><a className="vcard__link" href="https://github.com/mattsteele" aria-label="Github" rel="me">

              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021.798-.221 1.649-.332 2.496-.336.849.004 1.701.115 2.496.336 1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z" />
              </svg>


              <span className="vcard__link-text p-nickname">@mattsteele</span> <span className="sr-only">on Github</span></a> <a className="vcard__link" href="https://www.linkedin.com/in/mattwsteele" aria-label="LinkedIn" rel="me">

              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M19.668 3H4.328C3.595 3 3 3.581 3 4.298v15.403C3 20.417 3.595 21 4.328 21h15.34c.733 0 1.331-.582 1.331-1.299V4.298c0-.717-.598-1.298-1.331-1.298zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574c-.856 0-1.548-.694-1.548-1.548s.691-1.548 1.548-1.548c.854 0 1.548.693 1.548 1.548s-.694 1.548-1.548 1.548zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z" />
              </svg>


              <span className="vcard__link-text p-nickname">mattwsteele</span> <span className="sr-only">on LinkedIn</span></a></div></div></div></div></div></header><main className="main container"><section className="section" id="section-introduction"><h2 className="section__title">About Me</h2><div className="lead p-summary"><p>I’m a Software Engineer with 10 years of experience. I create web applications with JavaScript (Vue, Angular, Node, etc.). I build prototypes, design systems tooling, and proof-of-concept work. My work encompasses front-end architecture, backend API’s &amp; AWS.</p></div></section><section className="section" id="section-experience"><h2 className="section__title">Work Experience</h2><ol className="entrylist"><li className="entrylist__item h-event p-experience"><article className="entry"><div className="entry__header"><h3 className="entry__title p-name">Senior Software Engineer</h3><p className="entry__time"><time className="dt-start" dateTime="2017-10-01">10/2017 </time><span>–</span> <span>Present</span></p><p className="entry__organization p-org h-card"><a href="https://www.spectrum.net" className="p-name u-url" target="_blank" rel="noopener noreferrer">Charter Communications</a> <span aria-hidden="true">·</span> <span className="p-location">Denver, CO</span></p></div><div className="entry__content p-summary"><p>As part of the Design Enablement Team I create JavaScript based prototypes, proof-of-concept applications &amp; design systems work. My work encompasses front-end architecture, backend API’s, and work in AWS.</p></div></article></li><li className="entrylist__item h-event p-experience"><article className="entry"><div className="entry__header"><h3 className="entry__title p-name">Senior Web Developer</h3><p className="entry__time"><time className="dt-start" dateTime="2016-05-01">05/2016 </time><span>–</span> <time className="dt-end" dateTime="2017-10-01">10/2017</time></p><p className="entry__organization p-org h-card"><a href="https://clover.partners/" className="p-name u-url" target="_blank" rel="noopener noreferrer">Clover Partners</a> <span aria-hidden="true">·</span> <span className="p-location">Denver, CO</span></p></div><div className="entry__content p-summary"><p>At Clover I created client-facing applications in JavaScript &amp; PHP backed by Craft &amp; Statamic CMS’s. I saw the entire client lifecycle from initial UX design &amp; flows to training clients on CMS usage. My work included developing eCommerce sites &amp; associated payment &amp; user flows.</p></div></article></li><li className="entrylist__item h-event p-experience"><article className="entry"><div className="entry__header"><h3 className="entry__title p-name">Lead Web Developer/UX Designer</h3><p className="entry__time"><time className="dt-start" dateTime="2015-01-01">01/2015 </time><span>–</span> <time className="dt-end" dateTime="2016-02-01">02/2016</time></p><p className="entry__organization p-org h-card"><a href="https://www.brandiron.net" className="p-name u-url" target="_blank" rel="noopener noreferrer">Brand Iron</a> <span aria-hidden="true">·</span> <span className="p-location">Denver, CO</span></p></div><div className="entry__content p-summary"><p>At Brand Iron I led a small team creating websites for clients in a variety of industries. I was responsible for front-end &amp; back-end operations &amp; maintenance.</p></div></article></li></ol></section><section className="section" id="section-education"><h2 className="section__title">Education</h2><ol className="entrylist"><li className="entrylist__item h-event p-education"><article className="entry"><div className="entry__header"><h3 className="entry__title p-name">Bachelor of Fine Arts</h3><p className="entry__organization p-org h-card"><a href="https://www.academyart.edu/" className="p-name u-url" target="_blank" rel="noopener noreferrer">Academy of Art University</a> <span aria-hidden="true">·</span> <span className="p-location">San Francisco, CA</span></p></div></article></li></ol></section><div className="grid grid--2col"><section className="section section--half" id="section-skills"><h2 className="section__title">Skills</h2><ul className="bulletlist"><li className="p-skill">Javascript</li><li className="p-skill">Vue</li><li className="p-skill">Angular</li><li className="p-skill">Node</li><li className="p-skill">Express</li><li className="p-skill">AWS</li><li className="p-skill">Git</li><li className="p-skill">HTML</li><li className="p-skill">CSS</li></ul></section></div></main><aside className="sidebar"><div className="container"><div className="actions"><a className="actions__btn has-tooltip" aria-label="Email" href="mailto:mattsteele@outlook.com">

                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>

              </a>

                <button className="actions__btn js-print utl-screen-only has-tooltip" aria-label="Print Résumé">

                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z" />
                  </svg>


                </button></div></div></aside><footer className="footer"><div className="container utl-space-between"><p>© Matt Steele</p><p>Last updated: 16.06.2021</p></div></footer></div>
    </>
  );
}