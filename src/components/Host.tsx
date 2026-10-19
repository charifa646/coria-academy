import { host } from "@/content";

/** 03 bis · Who runs the masterclass: a few lines from Charifa and the way to see her work. */
export function Host() {
  return (
    <section className="host" data-reveal>
      <div className="wrap host-grid">
        <h2>{host.title}</h2>
        <div>
          <p>{host.text}</p>
          <a className="underlined" href={host.href} target="_blank" rel="noopener">
            {host.link} <span aria-hidden>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
