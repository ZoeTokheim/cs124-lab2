import React, { Fragment } from "react";
import "./CancelListSearch.css";

function CancelListSearch(props) {


  return (
    <Fragment>
      <h3
        className="right-aligned"
        id="cancel-search"
        onClick={() => props.onChangePage("SingleListPage")}
      >
        Cancel
      </h3>
    </Fragment>
  );
}

export default CancelListSearch;
