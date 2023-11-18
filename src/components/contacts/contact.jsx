import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Contact({ contact }) {
  return (
    <li className="font-medium">
      {contact.contact}
      <small className="block space-x-2 italic">
        <Link to={`/contacts/${contact.name}`}>{contact.name}</Link>
      </small>
    </li>
  );
}

Contact.propTypes = {
  contact: PropTypes.string.isRequired,
};
