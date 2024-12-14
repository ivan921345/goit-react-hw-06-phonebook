import { useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import { useDispatch } from 'react-redux';
const Contacts = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  console.log(contacts);

  const filteredContacts = contacts.filter(contact =>
    contact.name.includes(filter)
  );

  return (
    <div>
      {filteredContacts.map(contact => (
        <li key={contact.name}>
          <p>Name: {contact.name}</p>
          <p>Number: {contact.number}</p>
          <button
            type="button"
            onClick={() => dispatch(deleteContact(contact.name))}
          >
            Delete
          </button>
        </li>
      ))}
    </div>
  );
};

export default Contacts;
