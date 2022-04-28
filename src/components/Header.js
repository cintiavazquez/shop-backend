import Link from "next/link";
import { NavWrap } from "./Header.styled";

export default function Header() {
  return (
    <NavWrap>
      <Link href="/products">Produkte</Link>
      <Link href="/categories">Kategorien</Link>
      <Link href="/create-product">Produkt hinzufügen</Link>
      <Link href="/create-category">Kategorie hinzufügen</Link>
    </NavWrap>
  );
}
