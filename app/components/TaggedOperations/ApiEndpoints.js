import React from "react";
import Markdown from "react-markdown";

import { toHTMLId } from "../../helpers/utils";
import { RequestParameters } from "./RequestParameters";
import { SampleResponse } from "../SampleResponse";
import { TryResponseModal } from "./TryResponseModal";
import { Response } from "./Response";

class ApiEndpoint extends React.Component {
  state = {
    showTryResponseModal: false,
    parameters: {},
    tryResponseModal: {},
    loading: false
  };

  setParameter = (parameter, value) => {
    this.setState({
      ...this.state,
      parameters: {
        ...this.state.parameters,
        [parameter]: value
      }
    });
  };

  initDefaultParameters = defaultValues => {
    this.setState({
      ...this.state,
      parameters: defaultValues
    });
  };

  tryOperation = (tag, path, swaggerClient) => {
    this.setState({
      ...this.state,
      loading: true
    });
    swaggerClient.apis[tag][toHTMLId(path)](this.state.parameters, {
      securities: {
        authorized: {
          apiKey: this.props.user.apiKey
        }
      }
    })
      .then(response => {
        const requestUrl = response.url;
        const responseCode = response.statusCode; // status code
        const responseBody = response.body; // JSON object or undefined
        const responseHeaders = response.headers; // header hash

        this.openResponseModal({
          requestUrl,
          responseBody,
          responseCode,
          responseHeaders
        });
      })
      .catch(error => {
        if (error.response) {
          const { response } = error;
          const requestUrl = response.url;
          const responseCode = response.status; // status code
          const responseBody = response.body; // JSON object or undefined
          const responseHeaders = response.headers; // header hash

          this.openResponseModal({
            requestUrl,
            responseBody,
            responseCode,
            responseHeaders
          });
        } else {
          this.openResponseModal({ error });
        }
      });
  };

  openResponseModal = ({
    requestUrl,
    responseBody,
    responseCode,
    responseHeaders,
    error
  }) => {
    this.setState({
      ...this.state,
      loading: false,
      showTryResponseModal: true,
      tryResponseModal: {
        requestUrl,
        responseBody,
        responseCode,
        responseHeaders,
        error
      }
    });
  };

  closeResponseModal = () => {
    console.log("CLOSE RESPONSE MODAL");
    this.setState({
      ...this.state,
      showTryResponseModal: false,
      tryResponseModal: {}
    });
  };

  render() {
    const { operation, ...props } = this.props;
    const path = operation.path;
    const method = "get";
    const id = `${method}${path}`;

    const { get } = operation;
    const { summary, description, produces, responses, parameters } = get;

    return (
      <section className="columns is-desktop operation">
        <div className="column operation__description is-half-desktop">
          <span className="anchor" id={toHTMLId(id)}></span>
          <h3 className="title is-3">{summary}</h3>
          <h4 className="title is-4">
            <span className="tag is-success apiEndpoint__method">GET</span>
            {path}
          </h4>
          <Markdown className="apiEndpoint__description" source={description} />
          <section className="apiEndpoint__parameters">
            <RequestParameters
              parameters={parameters}
              setParameter={this.setParameter}
              initDefaultParameters={this.initDefaultParameters}
              values={this.state.parameters}
            />
          </section>
          <section>
            <h5 className="title is-5">Test this endpoint</h5>
            <button
              className="button is-primary"
              onClick={() =>
                this.tryOperation(props.tag, id, this.props.swaggerClient)
              }
            >
              {this.state.loading ? "LOADING..." : "TRY"}
            </button>
            <div className="columns">
              <div className="column">Response Types</div>
              <div className="column">
                <div className="select">
                  <select>
                    {produces.map(contentType => (
                      <option
                        key={toHTMLId(`${id}_produce_option_${contentType}`)}
                        value={contentType}
                      >
                        {contentType}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </section>
          <section>
            <h5 className="title is-5">Response Messages</h5>
            <table className="table full-width">
              <tbody>
                {Object.entries(responses).map(([code, response]) => (
                  <Response
                    key={`response_${code}`}
                    response={response}
                    code={code}
                  />
                ))}
              </tbody>
            </table>
          </section>
        </div>
        <section className="column operation__samples is-half-desktop">
          <SampleResponse responses={responses} {...props} />
        </section>
        <TryResponseModal
          isActive={this.state.showTryResponseModal}
          close={this.closeResponseModal}
          summary={summary}
          {...this.state.tryResponseModal}
        />
      </section>
    );
  }
}

export const ApiEndpoints = ({ tag, taggedOperations, ...props }) => {
  const operations = Object.values(taggedOperations.operations);
  return (
    <section>
      <span className="anchor" id={toHTMLId(tag)}></span>
      <div>
        {operations.map(operation => (
          <ApiEndpoint
            key={`operation_${toHTMLId(operation.path)}`}
            operation={operation}
            tag={tag}
            {...props}
          />
        ))}
      </div>
    </section>
  );
};
