/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React, { ReactNode } from "react";
import ReactDOM from "react-dom";
import { onUpdate } from "./hooks";

export interface PortalProps {
  children?: ReactNode;
  targetSelector?: string;
}

/**
 * Make a portal in the DOM.
 *
 * @example <Portal><p>Hello!</p></Portal>
 * TODO: add a11y support
 */
const Portal: React.FC<PortalProps> = (props) => {
  onUpdate(async () => {
    if (props.targetSelector) {
      
    }
  });

  ReactDOM.createPortal(props.children, document.body);
  return <React.Fragment></React.Fragment>;
};

export default Portal;
