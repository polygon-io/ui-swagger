import React from "react";
import Markdown from "react-markdown";

import { toHTMLId } from "../../helpers/utils";

const Response = ({ response }) => {
  const [status, details] = response;
  let description;
  try {
    description = details.get("description");
  } catch (error) {
    console.log("ERROR FETCHING DESCRIPTION", error);
  }
  return (
    <tr>
      <td>{status}</td>
      <td>{description || "TODO: find a way to get error messages"}</td>
    </tr>
  );
};

const Parameter = ({ parameter }) => {
  const name = parameter.get("name");
  const type = parameter.get("type");
  const description = parameter.get("description");
  return (
    <div className="">
      <div className="columns">
        <div className="column is-one-quarter">{name}</div>
        <div className="column">
          <input className="input" type={type} />
          <p className="parameter__type">{type}</p>
          <Markdown source={description} />
        </div>
      </div>
    </div>
  );
};
const Operation = ({ operation }) => {
  const path = operation.get("path");
  const method = operation.get("method");
  const id = operation.get("id");

  const summary = operation.get("operation").get("summary");
  const description = operation.get("operation").get("description");
  const produces = operation.get("operation").get("produces");
  const responses = operation.get("operation").get("responses");
  const parameters = operation.get("operation").get("parameters");

  return (
    <section className="columns">
      <div className="column description">
        <h2 id={toHTMLId(id)} className="title is-3">
          {summary}
        </h2>
        <h4 className="title is-4">
          <span className="operation__description__method">{method}</span>
          {path}
        </h4>
        <Markdown source={description} />
        <div>
          <h5 className="title is-5">Parameters</h5>
          {Array.from(parameters || []).map(parameter => (
            <Parameter parameter={parameter} />
          ))}
        </div>
        <section>
          <h5 className="title is-5">Test this endpoint</h5>
          <button className="button"> TRY </button>
          <div className="box">
            <div className="field control">
              Response Types
              <select className="select">
                {produces.map(contentType => (
                  <option>{contentType}</option>
                ))}
              </select>
            </div>
          </div>
        </section>
        <section>
          <h5 className="title is-5">Response Messages</h5>
          <table className="table full-width">
            <tbody>
              {Array.from(responses).map(response => (
                <Response response={response} />
              ))}
            </tbody>
          </table>
        </section>
      </div>

      <div className="columns samples"></div>
    </section>
  );
};

const Operations = ({ tag, tagObj }) => {
  const operations = tagObj.get("operations");
  return operations.map(operation => (
    <Operation
      key={`operation_${toHTMLId(operation.get("id"))}`}
      operation={operation}
    />
  ));
};

export const TaggedOperations = ({ taggedOperations }) => {
  return Array.from(taggedOperations).map(([tag, tagObj]) => (
    <Operations tag={tag} tagObj={tagObj} />
  ));
};
