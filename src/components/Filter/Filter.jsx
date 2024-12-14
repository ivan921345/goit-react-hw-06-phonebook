import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
const Filter = ({ onFilterChange }) => {
  const dispatch = useDispatch();
  const onToggleChange = e => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <input
      type="text"
      name="filter"
      id="filter"
      onChange={onToggleChange}
      placeholder="Filter"
    />
  );
};

export default Filter;
