import React from "react";

function withEnhancement({ PassComp }) {
  return (props) => (
    <>
      <h1 className="text-2xl mb-2">Component rendered through HoC</h1>
      <PassComp {...props} />
    </>
  );
}

export default withEnhancement;
