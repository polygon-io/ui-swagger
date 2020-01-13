import React from "react";

const pathToId = path => path.replace(/\//g, "_");

const Endpoint = ({ operation }) => {
  const path = operation.get("path");
  const method = operation.get("method");
  const id = operation.get("id");
  const summary = operation.get("operation").get("summary");

  return (
    <li key={pathToId(id)}>
      <a href={`#${pathToId(id)}`}>
        <span className="method">{method}</span> {summary}
      </a>
    </li>
  );
};

const OperationsSection = ({ operations, tag }) => {
  return (
    <div>
      <p className="menu-label">{tag}</p>
      <ul className="menu-list">
        {operations.map(operation => (
          <Endpoint
            key={`endpoint_${pathToId(operation.get("id"))}`}
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
      <p className="menu-label">API REFERENCE</p>
      <ul className="menu-list">
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
