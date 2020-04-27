import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneLight as highlightTheme } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const TryResponseModal = ({
  isActive = false,
  close,
  requestUrl,
  responseBody,
  responseCode,
  responseHeaders,
  summary,
  error
}) => {
  highlightTheme.hljs.background = "";
  document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode === 27 || evt.key === "Escape" || evt.key === "Esc") {
      close();
    }
  };

  const showResponseCodeErrorBtn = () => {
    switch (responseCode) {
      case 401:
        return (
          <div className="modal__error-link-button-wpr">
            <a href="/Login" className="button">
              Login
            </a>
            <a
              href="/signup?next=/dashboard/billing/plan"
              className="button is-primary"
            >
              Get your API Key
            </a>
          </div>
        );
      case 403:
        return (
          <div className="modal__error-link-button-wpr">
            <a
              href="/signup?next=/dashboard/billing/plan"
              className="button is-primary modal__error-link-button"
            >
              View Products
            </a>
          </div>
        );
      default:
        return "";
    }
  };

  if (error) {
    return (
      <div className={`modal ${isActive ? "is-active" : ""}`}>
        <div className="modal-background" onClick={close}></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">oops, something went wrong...</p>
            <button
              className="delete"
              aria-label="close"
              onClick={close}
            ></button>
          </header>
          <div className="modal-card-body">
            <div>
              <pre>{error.message}</pre>
            </div>
          </div>
        </div>
        <button
          className="modal-close is-large"
          aria-label="close"
          onClick={close}
        ></button>
      </div>
    );
  }

  return (
    <div className={`modal ${isActive ? "is-active" : ""}`}>
      <div className="modal-background" onClick={close}></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">
            <span className="tag is-success apiEndpoint__method">GET</span>
            {summary}
          </p>
          <button
            className="delete"
            aria-label="close"
            onClick={close}
          ></button>
        </header>
        <section className="modal-card-body modal-card-body--try-modal">
          <h5 className="title is-5 modal__title">REQUEST URL</h5>
          <div>
            <pre>{requestUrl}</pre>
          </div>
          <h5 className="title is-5 modal__title">RESPONSE BODY</h5>
          <div className="modal__response-body-wpr">
            <SyntaxHighlighter language="json" style={highlightTheme}>
              {JSON.stringify(responseBody, null, 2) || ""}
            </SyntaxHighlighter>
            {showResponseCodeErrorBtn()}
          </div>
          <h5 className="title is-5 modal__title">RESPONSE CODE</h5>
          <div>
            <pre>{responseCode}</pre>
          </div>
          <h5 className="title is-5 modal__title">RESPONSE HEADERS</h5>
          <div>
            <pre>{JSON.stringify(responseHeaders, null, 2)}</pre>
          </div>
        </section>
      </div>
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={close}
      ></button>
    </div>
  );
};
