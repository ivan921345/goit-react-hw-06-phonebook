import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import Notiflix from 'notiflix';
Notiflix.Notify.init({
  clickToClose: true,
  cssAnimationStyle: 'zoom',
});
const AddNumberForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(state => state.contacts);

  const dispatch = useDispatch();
  const onChange = e => {
    if (e.target.name === 'name') {
      setName(e.target.value);
    } else {
      setNumber(e.target.value);
    }
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    if (contacts.some(contact => contact.name === name)) {
      Notiflix.Notify.failure('Contact with this name already exists');
      return;
    }
    if (name.trim() === '' || number.trim() === '') {
      Notiflix.Notify.failure('There is no values');
      return;
    }
    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="name">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={onChange}
          value={name}
        />
      </div>
      <div className="number">
        <label htmlFor="number">Number</label>
        <input
          type="text"
          name="number"
          id="number"
          onChange={onChange}
          value={number}
        />
      </div>
      <button type="submit">Add contact</button>
    </form>
  );
};

export default AddNumberForm;
