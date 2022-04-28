import Hello from "./Hello";

const Workshop = () => {
  const callback = (message) => {
    console.log("Callback with", message);
  };

  return (
    <div>
      <h2>Workshop component</h2>
      <Hello initialName="Default name" onCall={callback} />
    </div>
  );
};

export default Workshop;
