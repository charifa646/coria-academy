import { strip } from "@/content";

/** The black strip under the campaign: the three verbs, the three pills, the way down. */
export function Strip() {
  return (
    <div className="campaign-strip">
      <div className="wrap">
        <span>{strip.verbs}</span>
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
