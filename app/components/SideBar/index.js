import React from "react";
import { debounce } from "lodash";

import { update as updateUser } from "../../actions/user";
import { toHTMLId } from "../../helpers/utils";

const Endpoint = ({ operation, path }) => {
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

const OperationsSection = ({ taggedOperations, ...props }) => {
  const { tag, operations } = taggedOperations;
  return (
    <div className="">
      <p className="menu-label title is-5 padding-top-2">
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
    <aside className="menu">
      <div className="sidebar is-hidden-mobile">
        {/* I find it cleaner without the logo in the side menu */}
        {/*<a className="sidebar__logo" href="/">*/}
        {/*  <img src="images/icon.svg" />*/}
        {/*</a>*/}
        <p className="menu-label title is-5">API KEY</p>
        <div>
          <input
            id="apikey"
            className="input is-small"
            type="text"
            onChange={debouncedSetApiKey}
          />
        </div>
        <p className="menu-label title is-5">API REFERENCE</p>
        <ul className="menu-list">
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
      </div>
    </aside>
  );
};
