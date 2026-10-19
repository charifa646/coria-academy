import { Campaign } from "@/components/Campaign";
import { Strip } from "@/components/Strip";
import { skip } from "@/content";

export default function Home() {
  return (
    <>
      <a className="skip" href="#contenu">
        {skip}
      </a>
      <Campaign />
      <Strip />
    </>
  );
}
