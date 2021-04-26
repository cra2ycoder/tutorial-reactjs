import React from "react";

export function withHOC(UserComponent, userPropsIfAny) {
  /**
   * @description
   * creating a new component
   */
  return class extends React.Component {
    render() {
      /**
       * @description
       * returning a component with updated state
       */
      return <UserComponent state={this.state} {...userPropsIfAny} />;
    }
  };
}
