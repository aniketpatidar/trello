import { useState } from "react";
import { Appbar } from "../components/Appbar";
import { BoardsSection } from "../components/BoardsSection";
import { Card } from "../components/Card";

export function Board() {
  const [pendingTasks, setPendingTasks] = useState([]);
  const [onGoingTasks, setOngoingTasks] = useState([
    {
      id: "1",
      title: "Implement drag and drop",
      description:
        "Use react-dnd to allow moving cards between different columns seamlessly.",
    },
  ]);
  const [doneTasks, setDoneTasks] = useState([
    {
      id: "2",
      title: "Setup Vite project",
      description:
        "Initialize the React project using Vite and configure TypeScript.",
    },
    {
      id: "3",
      title: "Create UI Components",
      description:
        "Build reusable components like Card, Button, and Input for consistent styling.",
    },
  ]);

  return (
    <div>
      <Appbar />
      <div style={{ display: "flex", padding: 30 }}>
        <BoardsSection
          onDrop={(item) => {
            console.log(item);
            setPendingTasks((p) => p.filter((x) => x.id != item.id));
            setOngoingTasks((p) => p.filter((x) => x.id != item.id));
            setDoneTasks((p) => p.filter((x) => x.id != item.id));
            setPendingTasks((p) => [...p, item]);
          }}
        >
          {pendingTasks.map((task) => (
            <Card
              id={task.id}
              title={task.title}
              description={task.description}
            />
          ))}
        </BoardsSection>
        <BoardsSection
          onDrop={(item) => {
            console.log(item);
            setPendingTasks((p) => p.filter((x) => x.id != item.id));
            setOngoingTasks((p) => p.filter((x) => x.id != item.id));
            setDoneTasks((p) => p.filter((x) => x.id != item.id));
            setOngoingTasks((p) => [...p, item]);
          }}
        >
          {onGoingTasks.map((task) => (
            <Card
              title={task.title}
              id={task.id}
              description={task.description}
            />
          ))}
        </BoardsSection>
        <BoardsSection
          onDrop={(item) => {
            console.log(item);
            setPendingTasks((p) => p.filter((x) => x.id != item.id));
            setOngoingTasks((p) => p.filter((x) => x.id != item.id));
            setDoneTasks((p) => p.filter((x) => x.id != item.id));
            setDoneTasks((p) => [...p, item]);
          }}
        >
          {doneTasks.map((task) => (
            <Card
              title={task.title}
              id={task.id}
              description={task.description}
            />
          ))}
        </BoardsSection>
      </div>
    </div>
  );
}
