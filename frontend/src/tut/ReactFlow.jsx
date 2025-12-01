import React from "react";

const Parent = ({ name }) => {
  return (
    <>
      <div>Parent called by {name}</div>
      {/* name=rishabh */}
      <Child name={name} />
    </>
  );
};
const Child = ({ name }) => {
  return (
    <>
      <div>Child called by {name}</div>
      <GrandChild name="rishabh 2" />
    </>
  );
};
const GrandChild = ({ name = "default" }) => {
  return (
    <>
      <div>GrandChild called by {name}</div>
    </>
  );
};
const App = () => {
  return (
    <>
      <Parent name={"rishabh"} />
    </>
  );
};

export default App;
