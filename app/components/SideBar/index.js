import React from "react";

import { toHTMLId } from "../../helpers/utils";

const Endpoint = ({ operation }) => {
  const method = operation.get("method");
  const id = operation.get("id");
  const summary = operation.get("operation").get("summary");

  return (
    <li key={toHTMLId(id)}>
      <a href={`#${toHTMLId(id)}`}>
        <span className="sidebar__operation__method">{method}</span> {summary}
      </a>
    </li>
  );
};

const OperationsSection = ({ operations, tag }) => {
  return (
    <div className="is-hidden-mobile">
      <p className="menu-label">
        <a href={`#${toHTMLId(tag)}`}>{tag}</a>
      </p>
      <ul className="menu-list">
        {operations.map(operation => (
          <Endpoint
            key={`endpoint_${toHTMLId(operation.get("id"))}`}
            operation={operation}
          />
        ))}
      </ul>
    </div>
  );
};

export const SideBar = ({ taggedOperations }) => {
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
      {Array.from(taggedOperations).map(([tag, tagObj]) => {
        const operations = tagObj.get("operations");
        return (
          <OperationsSection
            key={`section_${tag}`}
            operations={operations}
            tag={tag}
          />
        );
      })}
    </aside>
  );
};
