


function LeftSideBarBottom({IconName, Text}) {
  return (
    <div className="d-flex">
      <span className="textLeft icon p-2">  <i className={IconName}></i></span>
      <text className="p-2 textLeft">{Text}</text>
    </div>
  );
}

export default LeftSideBarBottom;
