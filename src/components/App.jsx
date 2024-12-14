import Notiflix from 'notiflix';
import AddNumberForm from './AddNumberForm';
import Contacts from './Contacts';
import Filter from './Filter';
Notiflix.Notify.init({
  clickToClose: true,
  cssAnimationStyle: 'zoom',
});
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        flexDirection: 'column',
      }}
    >
      <AddNumberForm />
      <Filter />
      <Contacts />
    </div>
  );
};
