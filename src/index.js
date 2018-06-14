import Button from '../packages/button';

const version = '1.0.0';
const install = function(Vue, config = {}) {
  if (install.installed) return;

  Vue.component(Button.name, Button);
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
};

export {
  install,
  version,
  Button
};
