import { strip } from "@/content";

/** The black strip under the campaign: the three verbs (they light up one after the other), the three words, the way down. */
export function Strip() {
  return (
    <div className="campaign-strip">
      <div className="wrap">
        <span className="strip-verbs" data-reveal>
          {strip.verbs.split(" ").map((v, i) => (
            <span key={v} style={{ "--i": i } as React.CSSProperties}>
              {v}{" "}
            </span>
          ))}
        </span>
        <div>
          {strip.pills.map((p) => (
            <span key={p}>{p}</span>
          ))}
        </div>
        <a href="#programme">{strip.link}</a>
      </div>
    </div>
  );
}
