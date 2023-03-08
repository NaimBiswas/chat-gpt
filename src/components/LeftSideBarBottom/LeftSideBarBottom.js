import { useState } from "react";



function LeftSideBarBottom({IconName, Text, returnFunc}) {
  return (
    <div className="d-flex" onClick={() => {returnFunc((preVal) => !preVal)} }>
      <span className="textLeft icon p-2">  <i className={IconName}></i></span>
      <span className="p-2 textLeft">{Text}</span>
    </div>
  );
}

export default LeftSideBarBottom;
