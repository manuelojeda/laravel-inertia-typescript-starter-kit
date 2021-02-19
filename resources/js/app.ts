// Import modules...
import { createApp, h } from 'vue'
import {
  App as InertiaApp, plugin as InertiaPlugin
} from '@inertiajs/inertia-vue3'

import './bootstrap'

const el:HTMLElement|null = document.getElementById('app')

createApp({
  render: () =>
    h(InertiaApp, {
      initialPage: JSON.parse(el.dataset.page as string),
      resolveComponent: (name: any) => require(`./Pages/${name}`).default
    })
})
  .mixin({
    methods: {
      route
    }
  })
  .use(InertiaPlugin)
  .mount(el as any)
