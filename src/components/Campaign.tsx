import { getImageProps } from "next/image";
import { campaign, nav } from "@/content";
import { Brand } from "@/components/Brand";
import { Words } from "@/components/Words";

/** The orange campaign at the top: the menu, the promise and the booking on the left, the portrait in the middle
 *  over the word « CRÉATION. », the big line on the right. */
export function Campaign() {
  const { props: portrait } = getImageProps({
    src: "/assets/creative-portrait.webp",
    alt: campaign.portraitAlt,
    width: 1024,
    height: 1536,
    priority: true,
    sizes: "(max-width: 1150px) 480px, 600px",
  });
  return (
    <div className="campaign">
      {/* the glass bar floats at the top and follows the page (Motion.tsx turns it dark-on-light over the cream) */}
      <header className="top">
        <div className="bar">
          <div className="bar-pill">
            <Brand />
            <nav aria-label="Navigation principale">
              {nav.links.map((l) => (
                <a key={l.href} href={l.href}>
                  {l.label}
                </a>
              ))}
            </nav>
            <a className="nav-cta" href="#reservation">
              {nav.cta}
            </a>
          </div>
        </div>
      </header>
      <section className="campaign-hero" id="contenu">
        <div className="wrap campaign-inner">
          <div className="campaign-left">
            <p className="eyebrow">{campaign.eyebrow}</p>
            <h1>
              <Words text={campaign.title} /> <em><Words text={campaign.titleEnd} start={campaign.title.split(" ").length} /></em>
            </h1>
            <p className="campaign-description">{campaign.text}</p>
            <a className="button campaign-button" href="#reservation">
              {campaign.cta} <span aria-hidden>↗</span>
            </a>
            <div className="session-cards">
              <div className="pass-card">
                <span>{campaign.pass.label}</span>
                <strong>
                  {campaign.pass.price}
                  <small>{campaign.pass.currency}</small>
                </strong>
              </div>
              <div className="date-card">
                <span>{campaign.date.label}</span>
                <strong>{campaign.date.day}</strong>
                <span>
                  {campaign.date.line1}
                  <br />
                  {campaign.date.line2}
                </span>
              </div>
            </div>
          </div>
          <div className="campaign-right">
            <p className="campaign-title">
              <Words text={campaign.big[0]} start={0} />
              <br />
              <Words text={campaign.big[1]} start={campaign.big[0].split(" ").length} />{" "}
              <span>
                <Words text={campaign.big[2]} start={campaign.big[0].split(" ").length + campaign.big[1].split(" ").length} />
              </span>
            </p>
            <div className="campaign-aside">
              <p>
                {campaign.aside[0]}
                <br />
                {campaign.aside[1]}
              </p>
              <a href="#programme">
                {campaign.asideLink} <span aria-hidden>↓</span>
              </a>
              <p className="beginner-note">{campaign.note}</p>
            </div>
          </div>
          <span className="campaign-word" aria-hidden>
            {campaign.word}
          </span>
          {/* the cut-out portrait is for computers and tablets; a phone has its photograph in the background (see
              coria.css) and gets an empty pixel here, so it never downloads the portrait */}
          <picture>
            <source media="(max-width: 650px)" srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
            <img {...portrait} className="campaign-portrait" alt={campaign.portraitAlt} />
          </picture>
          <span className="portrait-note">{campaign.portraitNote}</span>
        </div>
      </section>
    </div>
  );
}
