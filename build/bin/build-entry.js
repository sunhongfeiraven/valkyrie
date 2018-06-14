const Components = require('../../components.json')
const fs = require('fs')
const render = require('json-templater/string')
const uppercamelcase = require('uppercamelcase')
const path = require('path')

const OUTPUT_PATH = path.join(__dirname, '../../src/index.js')
const IMPORT_TEMPLATE = "import {{name}} from '../packages/{{package}}';"
const ISNTALL_COMPONENT_TEMPLATE = '  Vue.component({{name}}.name, {{name}});'
const MAIN_TEMPLATE = `{{include}}

const version = '{{version}}';
const install = function(Vue, config = {}) {
  if (install.installed) return;

{{install}}
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
};

export {
  install,
  version,
{{list}}
};
`

delete Components.font

const ComponentNames = Object.keys(Components)

const includeComponentTemplate = []
const installTemplate = []
const listTemplate = []

ComponentNames.forEach((name) => {
  const componentName = uppercamelcase(name)

  includeComponentTemplate.push(render(IMPORT_TEMPLATE, {
    name: componentName,
    package: name,
  }))

  if (
    [
      // directives
      'InfiniteScroll',
      'Lazyload',

      // services
      'MessageBox',
      'Toast',
      'Indicator',
    ].indexOf(componentName) === -1
  ) {
    installTemplate.push(render(ISNTALL_COMPONENT_TEMPLATE, {
      name: componentName,
      component: name,
    }))
  }

  listTemplate.push(`  ${componentName}`)
})

const template = render(MAIN_TEMPLATE, {
  include: includeComponentTemplate.join('\n'),
  install: installTemplate.join('\n'),
  version: process.env.VERSION || require('../../package.json').version,
  list: listTemplate.join(',\n'),
})

fs.writeFileSync(OUTPUT_PATH, template)
console.log('[build entry] DONE:', OUTPUT_PATH)
