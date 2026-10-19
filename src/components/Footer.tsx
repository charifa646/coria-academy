import { footer } from "@/content";
import { Brand } from "@/components/Brand";

/** 05 · The black footer: the brand, the line, the motto. */
export function Footer() {
  return (
    <footer className="wrap">
      <Brand />
      <p>{footer.text}</p>
      <span>{footer.motto}</span>
    </footer>
  );
}
