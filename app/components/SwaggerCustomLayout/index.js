import React from "react";

export class SwaggerCustomLayout extends React.Component {
  constructor(props) {
    super(props);
    this.props = { ...props };
  }
  render() {
    const Operations = this.props.getComponent("operations", true);

    return (
      <div>
        <Operations />
      </div>
    );
  }
}

export const SwaggerCustomLayoutPlugin = () => ({
  components: {
    SwaggerCustomLayout
  }
});
