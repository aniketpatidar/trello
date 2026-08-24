export function Button(props) {
  return (
    <div className="button" onClick={props.onClick} style={{ display: "flex" }}>
      <div style={{ display: "flex", alignItems: "center", paddingRight: 10 }}>
        {props.leftIcon}
      </div>
      {props.children}
      <div style={{ display: "flex", alignItems: "center", paddingLeft: 10 }}>
        {props.rightIcon}
      </div>
    </div>
  );
}
