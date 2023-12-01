import { useParams } from "react-router-dom";

export default function ContactDetails({ contacts }) {
  const { id } = useParams();
  const contact = contacts.find((c) => c.id === parseInt(id, 10));

  if (!contact) {
    return <div>contact not found</div>;
  }
  return (
    // TODO{jeremy.eastman}: Review this HTML. B/c of what's in `Layout`, you probably have crazy 🤡 nesting 🪹.
    <main>
      <img src={contact.img} alt={contact.name}></img>
      <h1>Contact Details</h1>
      <p>Name:{contact.name}</p>
      <p>Phone: {contact.tel}</p>
      <p>E-mail: {contact.email}</p>
      <p>Username: {contact.username}</p>
    </main>
  );
}
