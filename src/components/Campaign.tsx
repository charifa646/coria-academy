import Image from "next/image";
import { campaign, nav } from "@/content";
import { Brand } from "@/components/Brand";

/** The orange campaign at the top: the menu, the promise and the booking on the left, the portrait in the middle
 *  over the word « CRÉATION. », the big line on the right. */
export function Campaign() {
  return (
    <div className="campaign">
      <header className="wrap">
        <Brand />
        <nav aria-label="Navigation principale">
          {nav.links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <a className="nav-cta" href="#reservation">
          {nav.cta} <span aria-hidden>↗</span>
        </a>
      </header>
      <section className="campaign-hero" id="contenu">
        <div className="wrap campaign-inner">
          <div className="campaign-left">
            <p className="eyebrow">{campaign.eyebrow}</p>
            <h1>
              {campaign.title} <em>{campaign.titleEnd}</em>
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
                <span>{campaign.pass.note}</span>
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
              {campaign.big[0]}
              <br />
              {campaign.big[1]} <span>{campaign.big[2]}</span>
            </p>
            <div className="campaign-aside">
              <p>
                {campaign.aside[0]}
                <br />
                {campaign.aside[1]}
              </p>
              <a href="#programme">
                {campaign.asideLink} <span aria-hidden>↗</span>
              </a>
              <p className="beginner-note">{campaign.note}</p>
            </div>
          </div>
          <span className="campaign-word" aria-hidden>
            {campaign.word}
          </span>
          <Image
            className="campaign-portrait"
            src="/assets/creative-portrait.webp"
            alt={campaign.portraitAlt}
            width={1024}
            height={1536}
            priority
            sizes="(max-width: 650px) 380px, (max-width: 1150px) 480px, 600px"
          />
          <span className="portrait-note">{campaign.portraitNote}</span>
        </div>
      </section>
    </div>
  );
}
