import React from "react";
import { debounce } from "lodash";
import Scrollspy from "react-scrollspy";

import { update as updateUser } from "../../actions/user";
import { SidebarOperationsSection } from "./OperationSection";

export const SideBar = ({ orderedOperations, dispatch, user }) => {
  const setApiKey = event => {
    dispatch(updateUser({ apiKey: document.getElementById("apikey").value }));
  };
  const debouncedSetApiKey = debounce(setApiKey, 300);
  const apiKeyComponent = user.isLoggedIn ? (
    <span>Using your API key</span>
  ) : (
    <div className="sidebar__log-in-btn-group">
      <a href="/Login" className="button">
        Login
      </a>
      <a
        href="/signup?next=/dashboard/billing/plan"
        className="button is-primary"
      >
        Get your API Key
      </a>
      <p>This is some text that needs to be updated</p>
    </div>
  );
  return (
    <aside className="menu">
      <div className="sidebar is-hidden-mobile">
        <p className="menu-label title is-5">API Key</p>
        <div>{apiKeyComponent}</div>
        <p className="menu-label title is-5">API Reference</p>
        <Scrollspy
          items={["getting-started"]}
          currentClassName="sidebar__method--current"
        >
          <ul className="menu-list">
            <li key="getting-started">
              <a href="#getting-started">Getting Started</a>
            </li>
          </ul>
        </Scrollspy>
        {orderedOperations.map(taggedOperations => {
          return (
            <SidebarOperationsSection
              key={`section_${taggedOperations.tag}`}
              taggedOperations={taggedOperations}
            />
          );
        })}
      </div>
    </aside>
  );
};
