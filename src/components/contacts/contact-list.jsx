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

  const groupedContacts = {};
  sortedItems.forEach((contact) => {
    const lastName = extractLastName(contact.name)[0].toUpperCase();
    if (!groupedContacts[lastName]) {
      groupedContacts[lastName] = [];
    }
    groupedContacts[lastName].push(contact);
  });

  return (
    <div>
      {Object.entries(groupedContacts).map(([letter, contacts]) => (
        <div key={letter}>
          <h2>{letter}</h2>
          <ul>
            {contacts.map((contact) => (
              <li key={contact.id}>
                <Contact contact={contact} />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
