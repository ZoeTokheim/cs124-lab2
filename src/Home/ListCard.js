import React, { Fragment, useState } from "react";
import "./ListCard.css";
import EnterListArrow from "./EnterListArrow";
import EditListButton from "./EditListButton";
import DeleteListButton from "./DeleteListButton";

function ListCard(props) {
  const [touchStart, setTouchStart] = React.useState(0);
  const [touchEnd, setTouchEnd] = React.useState(0);
  const [inEditMode, setEditMode] = useState(false);

  function handleTouchStart(touch) {
    setTouchStart(touch.targetTouches[0].clientX);
  }

  function handleTouchMove(touch) {
    setTouchEnd(touch.targetTouches[0].clientX);
  }

  function handleTouchEnd() {
    if ((touchStart - touchEnd) > 75 && (touchEnd !== 0) && !inEditMode) {
      toggleEditMode()
      console.log(touchStart)
      console.log(touchEnd)
    }
    if ((touchStart - touchEnd) < -75 && (touchEnd !== 0) && inEditMode) {
      toggleEditMode()
    }
  }

  function toggleEditMode() {
    setEditMode(!inEditMode);
  }

  function handleListCardClick() {
    if (!inEditMode) {
      props.onChangePage("SingleListPage");
      props.onChangeList(props.id);
    }
  }

  let gridClassName = inEditMode ? "edit-list-grid" : "list-grid";

  return (
    <div
      className={["list", gridClassName].join(" ")}
      onClick={handleListCardClick}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <i className={`fas fa-${props.listIcon} fa-4x list-icon`}></i>
      <h2>{props.listName}</h2>
      {inEditMode ? (
        <Fragment>
          <EditListButton onListIconClick={toggleEditMode} onChangePage={props.onChangePage} />
          <DeleteListButton onListIconClick={toggleEditMode} />
        </Fragment>
      ) : (
        <EnterListArrow onListIconClick={toggleEditMode} />
      )}
    </div>
  );
}

export default ListCard;
