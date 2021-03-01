import React from 'react';
import PropTypes from 'prop-types';

function SearchBox({ onChange, value }) {
  const handleChangeInput = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className="input-group input-group-lg">
      <input
        type="search"
        placeholder="Location/City to search"
        className="form-control"
        onChange={handleChangeInput}
        name="input"
        value={value}
      />
    </div>
  );
}

SearchBox.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default SearchBox;
