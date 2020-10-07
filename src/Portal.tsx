/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React, { ReactNode } from "react";
import ReactDOM from "react-dom";

/**
 * Interface for Portal props
 */
export interface PortalProps {
  children?: ReactNode;
}

/**
 * Make a portal in the DOM.
 * 
 * @example 
 * ```
 * <Portal><p>Hello!</p></Portal>
 * ```
 * TODO: add a11y support
 */
const Portal = (props: PortalProps) => {
  ReactDOM.createPortal(props.children, document.body);
};

export default Portal;
