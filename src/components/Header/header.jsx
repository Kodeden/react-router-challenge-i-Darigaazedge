import { Link } from "react-router-dom";
import NavBar from "./nav-bar";

export default function Header() {
  return (
    <header className="items-center justify-around sm:flex sm:flex-row sm:pl-8">
      <h1 className="py-4 text-2xl font-bold">
        <Link to="/" className="text-white-500">
          Contacts
        </Link>
      </h1>
      <NavBar />
    </header>
  );
}
