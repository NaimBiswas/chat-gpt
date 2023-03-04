


function LeftSideBarBottom({IconName, Text}) {
  return (
    <div className="d-flex">
      <span className="textLeft icon p-2">  <i className={IconName}></i></span>
      <span className="p-2 textLeft">{Text}</span>
    </div>
  );
}

export default LeftSideBarBottom;
