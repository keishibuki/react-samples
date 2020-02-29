import React from "react";

export default text => {
  const regex = /(\n)/g;
  return text
    .split(regex)
    .map((line: string) =>
      line.match(regex) ? React.createElement("br") : line
    );
};
