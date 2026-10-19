import { Fragment } from "react";

/** A line of text cut into words, each in its own mask (class « w »), numbered with --i so the CSS can bring them in
 *  one after the other. A « ? » or « ! » stays glued to the word before it (non-breaking space) so it never ends
 *  up alone on a line. The text itself is unchanged. */
export function Words({ text, start = 0 }: { text: string; start?: number }) {
  const raw = text.split(" ");
  const words: string[] = [];
  for (const t of raw) {
    if (/^[?!:;]$/.test(t) && words.length) words[words.length - 1] += "\u00A0" + t;
    else words.push(t);
  }
  return (
    <>
      {words.map((w, i) => (
        <Fragment key={i}>
          <span className="w" style={{ "--i": start + i } as React.CSSProperties}>
            <span>{w}</span>
          </span>
          {i < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </>
  );
}
