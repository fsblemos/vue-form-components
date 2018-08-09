const isComponent = (vnode, componentName) =>
  vnode.componentOptions &&
  vnode.componentOptions.Ctor.extendOptions.name === componentName;

export { isComponent };
