import Image from "next/image";
import { programme } from "@/content";

/** 03 · The programme: the intro on two columns, then three offset cards (cream, orange, black). The drawings on
 *  the cards are HTML and CSS, as in the mockup; the two photographs are the mockup's original visuals. */
export function Programme() {
  const { design, code, future } = programme;
  return (
    <section className="programme" id="programme">
      <div className="wrap">
        <div className="programme-intro">
          <p className="eyebrow">{programme.eyebrow}</p>
          <div>
            <h2>
              {programme.title[0]}
              <br />
              <span>{programme.title[1]}</span> <em>{programme.title[2]}</em>
            </h2>
            <p>{programme.text}</p>
          </div>
        </div>

        <div className="learning-grid">
          <article className="learning learning-design">
            <div className="lesson-art" aria-hidden>
              <div className="wireframe">
                <div className="wire-nav" />
                <div className="wire-heading" />
                <div className="wire-heading short" />
                <div className="wire-box" />
                <span>{design.wire}</span>
              </div>
              <div className="finished-design">
                <Image src="/assets/architecture.webp" alt="" fill sizes="210px" />
                <b>{design.name}</b>
                <p>
                  {design.line[0]}
                  <br />
                  <em>{design.line[1]}</em>
                </p>
                <span>{design.live}</span>
              </div>
            </div>
            <Lesson {...design} />
          </article>

          <article className="learning learning-code">
            <div className="lesson-art" aria-hidden>
              <div className="editor">
                <div className="editor-header">
                  <span>{code.head}</span>
                  <span>↗</span>
                </div>
                <p className="prompt">
                  {code.prompt[0]}
                  <br />
                  {code.prompt[1]}
                  <br />
                  {code.prompt[2]}
                </p>
                <div className="code-lines">
                  <span>
                    &lt;section <i>class=&quot;hero&quot;</i>&gt;
                  </span>
                  <span>&nbsp;&nbsp;&lt;h1&gt;Une idée prend vie.&lt;/h1&gt;</span>
                  <span>&nbsp;&nbsp;&lt;style&gt;</span>
                  <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;design: <i>sur mesure</i>;
                  </span>
                  <span>&nbsp;&nbsp;&lt;/style&gt;</span>
                  <span>&lt;/section&gt;</span>
                </div>
                <span className="editor-bottom">{code.foot}</span>
              </div>
            </div>
            <Lesson {...code} />
          </article>

          <article className="learning learning-future">
            <div className="lesson-art future-art" aria-hidden>
              <Image src="/assets/motion.webp" alt="" fill sizes="(max-width: 650px) 100vw, 430px" />
              <div className="portfolio-label">
                {future.label[0]}
                <br />
                <em>{future.label[1]}</em>
              </div>
              <div className="project-slip">
                <span>{future.slip}</span>
                <b>{future.slipTitle}</b>
                <small>{future.slipList}</small>
              </div>
            </div>
            <Lesson {...future} />
          </article>
        </div>

        <div className="programme-bottom">
          <p>
            {programme.note[0]}
            <br />
            {programme.note[1]}
          </p>
          <a className="underlined" href="#reservation">
            {programme.link} <span aria-hidden>↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function Lesson({ category, title, text }: { category: string; title: string[]; text: string }) {
  return (
    <div className="lesson-copy">
      <p className="lesson-category">{category}</p>
      <h3>
        {title[0]}
        <br />
        <em>{title[1]}</em>
      </h3>
      <p>{text}</p>
    </div>
  );
}
