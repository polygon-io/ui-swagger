import React from "react";

export const TryResponseModal = ({
  isActive = false,
  close,
  requestUrl,
  responseBody,
  responseCode,
  responseHeaders,
  error
}) => {
  if (error) {
    return (
      <div className={`modal ${isActive ? "is-active" : ""}`}>
        <div className="modal-background" onClick={close}></div>
        <div className="modal-card">
          <div className="modal-card-body">
            <h5 className="title is-5">oops, something went wrong...</h5>
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
        <section className="modal-card-body">
          <h5 className="title is-5">REQUEST URL</h5>
          <div>
            <pre>{requestUrl}</pre>
          </div>
          <h5 className="title is-5">RESPONSE BODY</h5>
          <div>
            <pre>{JSON.stringify(responseBody, null, 2)}</pre>
          </div>
          <h5 className="title is-5">RESPONSE CODE</h5>
          <div>
            <pre>{responseCode}</pre>
          </div>
          <h5 className="title is-5">RESPONSE HEADERS</h5>
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
