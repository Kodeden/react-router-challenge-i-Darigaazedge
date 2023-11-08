import { useAsyncValue } from "react-router-dom";
import Contact from "./contact";

export default function Contacts() {
  const items = useAsyncValue();

  const extractLastName = (fullName) => {
    const cleanedName = fullName
      .replace(/^(Mr|Mrs|Ms|Miss|Dr)\.?\s+/i, "")
      .trim();
    const words = cleanedName.split(" ");
    return words[words.length - 1];
  };

  const sortedItems = items.slice().sort((a, b) => {
    const lastNameA = extractLastName(a.name).toLowerCase();
    const lastNameB = extractLastName(b.name).toLowerCase();

    const firstNameA = a.name.split(" ")[0].toLowerCase();
    const firstNameB = b.name.split(" ")[0].toLowerCase();

    if (lastNameA !== lastNameB) {
      return lastNameA.localeCompare(lastNameB);
    } else {
      return firstNameA.localeCompare(firstNameB);
    }
  });

  return (
    <ol className="list-decimal space-y-4">
      {sortedItems.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ol>
  );
}
