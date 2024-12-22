import s from "./SearchBox.module.css";

const SearchBox = ({ inputValue, handleChange }) => {
  return (
    <div className={s.searchBox}>
      <p className={s.text}>Find contacts by name</p>
      <input className={s.searchInput} type="text" value={inputValue} onChange={handleChange} />
    </div>
  );
};

export default SearchBox;
