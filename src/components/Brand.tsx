import { brand } from "@/content";

export function Brand() {
  return (
    <a className="brand" href="#">
      {brand.name}
      <span>{brand.sub}</span>
    </a>
  );
}
