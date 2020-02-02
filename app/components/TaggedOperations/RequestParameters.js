import React from "react";
import Markdown from "react-markdown";

const Parameter = ({ parameter, setParameter, values, ...props }) => {
  const { name, type, description } = parameter;
  let input = (
    <input
      className="input"
      type={type}
      value={values[name] || ""}
      onChange={event => setParameter(name, event.target.value)}
    />
  );
  if (type === "boolean") {
    input = (
      <div className="select parameter__select">
        <select
          className="select parameter__select"
          value={values[name] || ""}
          onChange={event => setParameter(name, event.target.value)}
        >
          <option value=""></option>
          <option value="true">true</option>
          <option value="false">false</option>
        </select>
      </div>
    );
  }
  if (parameter.enum && parameter.enum.length > 0) {
    input = (
      <div className="select parameter__select">
        <select
          className="select parameter__select"
          value={values[name] || ""}
          onChange={event => setParameter(name, event.target.value)}
        >
          <option value=""></option>
          {parameter.enum.map(e => (
            <option key={e} value={e}>
              {e}
            </option>
          ))}
        </select>
      </div>
    );
  }
  return (
    <div className="parameter__box">
      <div className="columns">
        <div className="column is-one-quarter">{name}</div>
        <div className="column">
          {input}
          <p className="parameter__type">{type}</p>
          <Markdown source={description} />
        </div>
      </div>
    </div>
  );
};

export class RequestParameters extends React.Component {
  componentDidMount() {
    if (!this.props.parameters) return;
    const defaultParams = {};
    for (const p of this.props.parameters) {
      if (p.default) {
        defaultParams[p.name] = p.default;
      }
    }
    this.props.initDefaultParameters(defaultParams);
  }

  render() {
    const { parameters } = this.props;
    if (!parameters || parameters.length == 0) {
      return "";
    }

    return (
      <div>
        <h5 className="title is-5">Parameters</h5>
        {parameters.map(parameter => (
          <Parameter
            key={parameter.name}
            parameter={parameter}
            {...this.props}
          />
        ))}
      </div>
    );
  }
}
