import Button from '../packages/button';
import Spinner from '../packages/spinner';
import Indicator from '../packages/indicator';
import Scroll from '../packages/scroll';

const version = '1.0.0';
const install = function(Vue, config = {}) {
  if (install.installed) return;

  Vue.component(Button.name, Button);
  Vue.component(Spinner.name, Spinner);
  Vue.component(Scroll.name, Scroll);
  Vue.$indicator = Vue.prototype.$indicator = Indicator;
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
};

export {
  install,
  version,
  Button,
  Spinner,
  Indicator,
  Scroll
};
