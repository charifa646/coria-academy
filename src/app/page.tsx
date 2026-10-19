import { Campaign } from "@/components/Campaign";
import { Strip } from "@/components/Strip";
import { Programme } from "@/components/Programme";
import { Reservation } from "@/components/Reservation";
import { Footer } from "@/components/Footer";
import { Motion } from "@/components/Motion";
import { skip } from "@/content";

export default function Home() {
  return (
    <>
      <a className="skip" href="#contenu">
        {skip}
      </a>
      <Campaign />
      <Strip />
      <main>
        <Programme />
        <Reservation />
      </main>
      <Footer />
      <Motion />
    </>
  );
}
