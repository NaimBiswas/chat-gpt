function verticalIconWithHeader({IsParagraph,IconName, Title}) {
  return (
    <div className={!IsParagraph? "iconGroup mt-0 text-center" : 'iconGroup mt-2 text-center paragraph'}>
      <span className="text-warning h5 ">
        <i className={IconName}></i>
      </span>
      <h4 className={!IsParagraph? "headerTitle mt-2" : "pgText"}>{Title}</h4>
    </div>
  );
}

export default verticalIconWithHeader;
