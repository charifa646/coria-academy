"use client";

import { useRef } from "react";
import { booking, reservation } from "@/content";

// Charifa's booking form (Chariow). Empty until she sends the link: the button then opens the window that says the
// booking is not open yet. Never put a made-up link here.
const RESERVATION_URL = "";

/** The booking button and, while there is no link, the window it opens. */
export function Reserve() {
  const dialog = useRef<HTMLDialogElement>(null);
  const close = () => dialog.current?.close();

  return (
    <>
      <button
        className="button cream"
        type="button"
        onClick={() => (RESERVATION_URL ? window.location.assign(RESERVATION_URL) : dialog.current?.showModal())}
      >
        {reservation.cta} <span aria-hidden>↗</span>
      </button>
      <dialog
        ref={dialog}
        aria-labelledby="booking-title"
        onClick={(e) => {
          // a click on the dimmed page around the window closes it
          const r = e.currentTarget.getBoundingClientRect();
          if (e.target === e.currentTarget && (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom)) close();
        }}
      >
        <button className="close" type="button" aria-label={booking.close} onClick={close}>
          ×
        </button>
        <p className="eyebrow">{booking.eyebrow}</p>
        <h2 id="booking-title">
          {booking.title}
          <br />
          <em>{booking.titleEnd}</em>
        </h2>
        <p>{booking.text}</p>
        <p className="modal-price">{booking.price}</p>
        <p className="booking-status">{booking.status}</p>
        <button className="modal-back" type="button" onClick={close}>
          {booking.back}
        </button>
      </dialog>
    </>
  );
}
