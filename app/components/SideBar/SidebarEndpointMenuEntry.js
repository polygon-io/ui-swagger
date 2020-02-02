import React from "react";
import Scrollspy from "react-scrollspy";

import { toHTMLId } from "../../helpers/utils";

export const SidebarEndpointMenuEntry = ({ operation, path }) => {
  const { get } = operation;
  const id = `get${path}`;
  return (
     <Scrollspy
         items={[toHTMLId(id+'_anchor')]}
         currentClassName="sidebar__method--current"
     >
    <li key={toHTMLId(id)}>
      <a href={`#${toHTMLId(id)}_anchor`}>
        <span className="tag is-success sidebar__method">GET</span>{" "}
        {get.summary}
      </a>
    </li>
     </Scrollspy>
  );
};
