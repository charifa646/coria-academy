"use client";

import { useEffect } from "react";

/** The page's motion, all in CSS (coria.css, « Motion »); this only says when. Blocks marked data-reveal get
 *  .is-in when they come on screen, once. On a computer the booking button leans a little toward the pointer.
 *  Nothing runs for visitors who asked their device for less motion: the page is then still and complete. */
export function Motion() {
  useEffect(() => {
    // the glass bar turns light over the cream booking section (this runs whatever the motion setting)
    const bar = document.querySelector<HTMLElement>(".bar");
    const booking = document.querySelector<HTMLElement>(".reservation");
    let frame = 0;
    const tone = () => {
      frame = 0;
      if (!bar || !booking) return;
      const r = booking.getBoundingClientRect();
      const point = parseFloat(getComputedStyle(booking, "::before").height) || 0;
      const y = bar.getBoundingClientRect().top + 32;
      const light = r.top + point * 0.6 < y && r.bottom > y;
      bar.dataset.tone = light ? "light" : "dark";
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(tone);
    };
    tone();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    const root = document.documentElement;
    if (!root.classList.contains("anim"))
      return () => {
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onScroll);
      };

    const blocks = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const show = (el: Element) => el.classList.add("is-in");
    let io: IntersectionObserver | undefined;
    if ("IntersectionObserver" in window) {
      io = new IntersectionObserver(
        (entries) =>
          entries.forEach((e) => {
            if (e.isIntersecting) {
              show(e.target);
              io?.unobserve(e.target);
            }
          }),
        { rootMargin: "0px 0px -12% 0px" },
      );
      blocks.forEach((el) => io!.observe(el));
    } else blocks.forEach(show);

    // the booking button, on a computer with a mouse: it follows the pointer by a few pixels
    const button = document.querySelector<HTMLElement>(".reservation .book");
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const move = (e: PointerEvent) => {
      const r = button!.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width - 0.5) * 10;
      const y = ((e.clientY - r.top) / r.height - 0.5) * 8;
      button!.style.translate = `${x.toFixed(1)}px ${y.toFixed(1)}px`;
    };
    const leave = () => (button!.style.translate = "");
    if (button && fine) {
      button.addEventListener("pointermove", move);
      button.addEventListener("pointerleave", leave);
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      io?.disconnect();
      if (button && fine) {
        button.removeEventListener("pointermove", move);
        button.removeEventListener("pointerleave", leave);
      }
    };
  }, []);

  return null;
}
