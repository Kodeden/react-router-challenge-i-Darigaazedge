import PropTypes from "prop-types";

export default function Contact({ contact }) {
  return (
    <li className="font-medium">
      {contact.contact}
      <small className="block space-x-2 italic">
        <span>{contact.name}</span>
      </small>
    </li>
  );
}

Contact.propTypes = {
  contact: PropTypes.string.isRequired,
};
