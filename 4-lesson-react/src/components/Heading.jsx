const HeadingComponents = (props) => {
  return (
    <h1 className={props.class || "DefaultHeadingStyle"}>
      {props.children ? props.children : "Salom Dunyo"}
    </h1>
  );
};

export default HeadingComponents;
