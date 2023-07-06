import React from "react";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import DefinitionSearch from "./DefinitionSearch";

const AnimateHeader = (props) => {
  // const [secondWord, setSecondWord] = useState("");
  // const navigate = useNavigate();
  return (
    <>
      <nav class="nav justify-content-center bg-body-tertiary animate__animated animate__slideInDown">
        <div>
          {/* <form
            className="d-flex my-3 w-96"
            onSubmit={(e) => {
              e.preventDefault();
              navigate(`/${secondWord}`);
            }}
          >
            <input
              className="form-control me-2"
              type="search"
              aria-label="Search"
              placeholder="Search something.."
              onChange={(e) => {
                setSecondWord(e.target.value);
              }}
            />
            <button className="btn btn-outline-success">Search</button>
          </form> */}
          <DefinitionSearch />
        </div>
      </nav>

      {props.children}
    </>
  );
};

export default AnimateHeader;
