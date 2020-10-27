import React from "react";

/**
 * Function to run on component mount.
 */
function onMount<T extends unknown>(func: Function) {
  return new Promise<T>((resolve) => {
    React.useEffect(() => {
      func().then(() => resolve());
    }, []);
  });
}

/**
 * Function to run on component unmount
 */
async function onUnmount<T extends unknown>(func: Function) {
  return new Promise<T>((resolve) => {
    React.useEffect(() => {
      return () => func();
    });
  });
}

/**
 * Function to run on component update.
 */
async function onUpdate<T extends unknown>(func: Function) {
  return new Promise<T>((resolve) => {
    React.useEffect(() => {
      func().then(() => resolve());
    });
  });
}


export { onMount, onUpdate, onUnmount };
