import { reservation } from "@/content";
import { Reserve } from "@/components/Reserve";

/** 04 · The booking: the big line on the orange on the left, the cream panel with the date, the pass and the
 *  button on the right, the word « créer. » in the background. */
export function Reservation() {
  return (
    <section className="reservation" id="reservation">
      <div className="reservation-backdrop" aria-hidden>
        {reservation.word}
      </div>
      <div className="wrap reservation-grid">
        <div className="reservation-copy">
          <p className="eyebrow">{reservation.eyebrow}</p>
          <h2>
            {reservation.title}
            <br />
            <em>
              {reservation.titleEnd[0]}
              <br /> {reservation.titleEnd[1]}
            </em>
          </h2>
          <p>
            {reservation.text[0]}
            <br />
            {reservation.text[1]}
          </p>
        </div>
        <div className="reservation-details">
          <div className="session-date">
            <span>{reservation.date.label}</span>
            <strong>
              {reservation.date.day[0]}
              <br /> {reservation.date.day[1]}
            </strong>
            <p>{reservation.date.line}</p>
          </div>
          <div className="reservation-price">
            <span>{reservation.pass.label}</span>
            <p>
              {reservation.pass.price} <small>{reservation.pass.currency}</small>
            </p>
          </div>
          <Reserve />
          <p className="reservation-note">{reservation.note}</p>
        </div>
      </div>
    </section>
  );
}
