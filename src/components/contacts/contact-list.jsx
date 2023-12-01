import { useAsyncValue } from "react-router-dom";
import Contact from "./contact";

// TODO{jeremy.eastman}: Consider what is already in '/src/utils.js' and if it can be used here.
// Alternatively, consider moving this type of stuff into some 'utils' file instead of having it here.
// Also, `extractFirstName` and `extractLastName` are very similar.
// Consider refactoring them into one function, such as `spitName` or something.

// Keep 'utility functions' out of the component file to avoid re-creating them on every render ⚡.
const extractLastName = (fullName) => {
  const cleanedName = fullName
    .replace(/^(Mr|Mrs|Ms|Miss|Dr)\.?\s+/i, "")
    .trim();
  const words = cleanedName.split(" ");
  return words[words.length - 1];
};

const extractFirstName = (fullName) => {
  const cleanedName = fullName
    .replace(/^(Mr|Mrs|Ms|Miss|Dr)\.?\s+/i, "")
    .trim();
  const words = cleanedName.split(" ");
  return words.length > 1 ? words[0] : null;
};

export default function Contacts() {
  const items = useAsyncValue();

  const sortedItems = items.slice().sort((a, b) => {
    const lastNameA = extractLastName(a.name).toLowerCase();
    const lastNameB = extractLastName(b.name).toLowerCase();
    const firstNameA = extractFirstName(a.name)?.toLowerCase();
    const firstNameB = extractFirstName(b.name)?.toLowerCase();

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
    <div className="flex flex-col items-center">
      {Object.entries(groupedContacts).map(([letter, contacts]) => (
        <div key={letter}>
          <h2>{letter}</h2>
          <ul>
            {contacts.map((contact) => (
              <Contact key={contact.id} contact={contact} />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
