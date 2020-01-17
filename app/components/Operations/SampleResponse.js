import React  from "react";

import { responseToJsonSample } from "../../helpers/responseToJsonSample";

export class SampleResponse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            properties: true,
            sampleResponse: true
        }
    }

    toggleCollapse(target) {
        this.setState({
            ...this.state,
            [target]: !this.state[target]
        })
    }

    render() {
        const { responses } = this.props;
        if (!responses.get('200')) {
            return (<div></div>);
        }
        const sampleResponse = responseToJsonSample(this.props.responses.get('200'));
        return (
           <section>
               <div className="collapsable">
                   <div className="collapsable__header" onClick={() => this.toggleCollapse('sampleResponse')}>
                       SAMPLE RESPONSE
                       <span className={`collapsable__toggle is-pulled-right ${ this.state.sampleResponse ? '' : 'is-hidden' }`}>
                            <i className="fa fa-angle-up"/>
                        </span>
                       <span className={`collapsable__toggle is-pulled-right ${ this.state.sampleResponse ? 'is-hidden' : '' }`}>
                       <i className="fa fa-angle-down"/>
                        </span>
                   </div>
                   <div className={`collapsable__body ${ this.state.sampleResponse ? '' : 'is-hidden' }`}>
                      <pre>
                          {JSON.stringify(sampleResponse, null, 2)}
                      </pre>
                   </div>
               </div>
               <div className="collapsable">
                   <div className="collapsable__header" onClick={() => this.toggleCollapse('properties')}>
                       PROPERTIES
                       <span className={`collapsable__toggle is-pulled-right ${ this.state.properties ? '' : 'is-hidden' }`}>
                            <i className="fa fa-angle-up"/>
                        </span>
                       <span className={`collapsable__toggle is-pulled-right ${ this.state.properties ? 'is-hidden' : '' }`}>
                       <i className="fa fa-angle-down"/>
                        </span>
                   </div>
                   <div className={`collapsable__body ${ this.state.properties ? '' : 'is-hidden' }`}>
                       <p>
                        TODO
                       </p>
                   </div>
               </div>
           </section>
        );
    }
};
