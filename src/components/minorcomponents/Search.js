import React from 'react';

const Search = (props) => {
  return (
   <form onSubmit={props.onsubmit}>
     <input type="search" name={props.name} id={props.id} value={props.value} placeholder={props.placeholder} onChange={props.onChange}/>
     <button type="submit" className="btn btn-primary col-3" onClick={props.onClick}>{props.btnText}</button>
     <form>
  );
};

export default Search;
