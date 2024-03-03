import React from "react";

function WithLoading(Component) {
  return function ButtonWithLoading({ isLoading, handleFunction, value }) {
    if (isLoading) return <Component handleFunction={handleFunction} value={"Loading..."} />;
    return <Component handleFunction={handleFunction} value={value} />;
  };
}

export default WithLoading;
