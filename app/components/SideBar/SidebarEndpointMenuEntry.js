import React from "react";
import { toHTMLId } from "../../helpers/utils";

export const SidebarEndpointMenuEntry = ({ operation, path }) => {
  const { get } = operation;
  const id = `get${path}`;
  return (
    <li key={toHTMLId(id)}>
      <a href={`#${toHTMLId(id)}`}>
        <span className="tag is-success">GET</span> {get.summary}
      </a>
    </li>
  );
};
