import React from "react";
import { Link, Route } from "react-router-dom";

function Search (props) {
  return (
    <div>
      <h1>References and links</h1>
      <p>
        Application dependencies
      </p>
        <a href="https://randomuser.me/" class="btn btn-info" role="button" target="_blank" rel="noopener noreferrer">RandomUser API</a>
        <a href="https://github.com/maxlechner/employeeDb" class="btn btn-info" role="button" target="_blank" rel="noopener noreferrer">GitHub Repo</a>

    </div>
  );
}

export default Search;
