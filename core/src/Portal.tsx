/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React, { ReactNode } from "react";
import ReactDOM from "react-dom";

export interface PortalProps {
  children?: ReactNode;
}

/**
 * Make a portal in the DOM.
 *
 * @example <Portal><p>Hello!</p></Portal>
 * TODO: add a11y support
 */
const Portal: React.FC<PortalProps> = (props) => {
  ReactDOM.createPortal(props.children, document.body);
  return <React.Fragment></React.Fragment>;
};

export default Portal;
