import React from "react";

import { toHTMLId } from "../../helpers/utils";

const Endpoint = ({ operation, path }) => {
  const { get } = operation;
  const id = `get_${path}`;
  return (
    <li key={toHTMLId(id)}>
      <a href={`#${toHTMLId(id)}`}>
        <span className="sidebar__operation__method">GET</span> {get.summary}
      </a>
    </li>
  );
};

const OperationsSection = ({ taggedOperations, ...props }) => {
  const { tag, operations } = taggedOperations;
  return (
    <div className="is-hidden-mobile">
      <p className="menu-label">
        <a href={`#${toHTMLId(tag)}`}>{tag}</a>
      </p>
      <ul className="menu-list">
        {Object.entries(operations).map(([path, operation]) => (
          <Endpoint
            key={`endpoint_${toHTMLId(path)}`}
            operation={operation}
            path={path}
          />
        ))}
      </ul>
    </div>
  );
};

export const SideBar = ({ orderedOperations }) => {
  return (
    <aside className="menu sidebar">
      <a className="sidebar__logo" href="/">
        <img src="images/icon.svg" />
      </a>
      <p className="menu-label is-hidden-mobile">API KEY</p>
      <div className="columns is-hidden-mobile">
        <input className="input" type="text" />
        <button className="button is-primary is-small">
          <i class="fas fa-arrow-right"></i>
        </button>
      </div>
      <p className="menu-label is-hidden-mobile">API REFERENCE</p>
      <ul className="menu-list is-hidden-mobile">
        <li key="getting-started">
          <a href="#getting-started">Getting Started</a>
        </li>
      </ul>
      {orderedOperations.map(taggedOperations => {
        return (
          <OperationsSection
            key={`section_${taggedOperations.tag}`}
            taggedOperations={taggedOperations}
          />
        );
      })}
    </aside>
  );
};
