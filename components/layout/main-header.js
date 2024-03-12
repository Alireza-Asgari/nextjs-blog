import Link from "next/link";
import Logo from "./logo";
import classes from "./main-header.module.css";
function MainHeader() {
  return (
    <header className={classes.header}>
      <Link href="/">
        <Logo />
      </Link>

      <ul>
        <li>
          <Link href="/posts">Posts</Link>
        </li>
        <li>
          <Link href="/contact">Contacts</Link>
        </li>
      </ul>
    </header>
  );
}
export default MainHeader;
