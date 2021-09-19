import React from 'react';

const Search = (props) => {
  return (
    <form onSubmit={props.onsubmit} className={`${props.className}`}>
      <div className="input-group">
        <input
          type="search"
          name={props.name}
          id={props.id}
          value={props.value}
          placeholder={props.placeholder}
          onChange={props.onChange}
          className="form-control "
        />
        <button
          type="submit"
          className="btn btn-primary "
          onClick={props.onClick}
        >
          {props.btnText}
        </button>
      </div>
    </form>
  );
};

export default Search;
