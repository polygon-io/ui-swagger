import React from "react";
import { debounce } from "lodash";

import { update as updateUser } from "../../actions/user";

import { toHTMLId } from "../../helpers/utils";
import { connect } from "react-redux";

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
    <div className="is-hidden-mobile is-hidden-tablet">
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

export const SideBar = ({ orderedOperations, dispatch, user }) => {
  const setApiKey = event => {
    dispatch(updateUser({ apiKey: document.getElementById("apikey").value }));
  };
  const debouncedSetApiKey = debounce(setApiKey, 300);

  return (
    <aside className="menu sidebar is-hidden-tablet-only">
      <a className="sidebar__logo" href="/">
        <img src="images/icon.svg" />
      </a>
      <p className="menu-label is-hidden-mobile is-hidden-tablet">API KEY</p>
      <div className="columns is-hidden-mobile is-hidden-tablet">
        <input
          id="apikey"
          className="input is-small"
          type="text"
          onChange={debouncedSetApiKey}
        />
      </div>
      <p className="menu-label is-hidden-mobile is-hidden-tablet">
        API REFERENCE
      </p>
      <ul className="menu-list is-hidden-mobile is-hidden-tablet">
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
