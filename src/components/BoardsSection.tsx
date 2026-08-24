import { useDrop } from "react-dnd";

export function BoardsSection(props) {
  const [{}, drop] = useDrop({
    accept: ["card"],
    drop: props.onDrop,
  });

  return (
    <div
      ref={drop}
      style={{ flex: 1, borderRight: "1px dotted black", minHeight: "80vh" }}
    >
      {props.children}
    </div>
  );
}
