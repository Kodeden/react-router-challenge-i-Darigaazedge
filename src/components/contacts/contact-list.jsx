import { useAsyncValue } from "react-router-dom";
import Contact from "./contact";

export default function Contacts() {
  const items = useAsyncValue();
  return (
    <ol className="list-decimal space-y-4">
      {items.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ol>
  );
}
