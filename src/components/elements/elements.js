export function Button(props) {
  function button() {
    return <button>{props.text}</button>;
  }

  if (props.link) {
    return (
      <a href={props.link} target={"_blank"}>
        {button()}
      </a>
    );
  } else {
    return button();
  }
}
