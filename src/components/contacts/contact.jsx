import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Contact({ contact }) {
  return (
    <li className="space-x-2 font-medium italic">
      {contact.contact}
      <Link to={`/contacts/${contact.id}`}>{contact.name}</Link>
    </li>
  );
}

Contact.propTypes = {
  contact: PropTypes.string.isRequired,
};
