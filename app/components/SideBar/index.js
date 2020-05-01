import React from "react";
import Scrollspy from "react-scrollspy";

import { SidebarOperationsSection } from "./OperationSection";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

export const SideBar = ({ orderedOperations, user }) => {
  const apiKeyComponent = user.isLoggedIn ? (
    <span>Using your API key</span>
  ) : (
    <div className="sidebar__log-in-btn-group">
      <a
        href="/signup?next=/dashboard/billing/plan"
        className="button is-primary"
      >
        Get your API Key
      </a>
      <p className="mt-8">
        <a href="/signup?next=/dashboard/billing/plan">Sign up</a> or{" "}
        <a href="/login">Login</a> to get started.
      </p>
    </div>
  );

  return (
    <aside className="menu">
      <div className="sidebar is-hidden-mobile">
        <p className="menu-label title is-5">API Key</p>
        {user.fetched ? (
          <div>{apiKeyComponent}</div>
        ) : (
          <div className="sidebar_fetch-spinner">
            <FontAwesomeIcon icon={faCircleNotch} className="fa-spin" />
            Loading...
          </div>
        )}
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
