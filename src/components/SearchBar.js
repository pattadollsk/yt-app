import React, { useState } from "react";

// functional component version
const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    onFormSubmit(term);
  };
  return (
    <div className="search-bar ui segment">
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label>
            Video Search
            <input
              type="text"
              value={term}
              onChange={(event) => setTerm(event.target.value)}
            />
          </label>
        </div>
      </form>
    </div>
  );
};

// class component version
// class SearchBar extends React.Component {
// state = { term: "" };

// onInputChange = (event) => {
//   this.setState({ term: event.target.value });
// };

// onFormSubmit = (event) => {
//   event.preventDefault();

//   this.props.onFormSubmit(this.state.term);
// };
//   render() {
//   }
// }

export default SearchBar;
