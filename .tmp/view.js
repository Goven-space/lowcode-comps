

export { default } from '/test/lowcode-comps/your-material-name/src/index.tsx';

import * as componentInstances from '/test/lowcode-comps/your-material-name/src/index.tsx';

import '/test/lowcode-comps/your-material-name/src/index.scss'

export * from '/test/lowcode-comps/your-material-name/src/index.tsx';

const coveredComponents = {};

const library = 'BizComps';
const execCompile = !!false;

if (!execCompile) {
  window[library] = Object.assign({__esModule: true}, componentInstances || {}, coveredComponents || {});
}

function getRealComponent(component, componentName) {
  if (component.default) return component.default;
  if (component[componentName]) return component[componentName];
  return component;
}