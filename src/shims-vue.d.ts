/// <reference types="vite/client" />

import { VNode } from "vue";

declare global {
  namespace JSX {
    interface Element extends VNode {}
    interface ElementClass {
      $props: any;
    }
    interface IntrinsicElements {
      [elem: string]: any;
    }
  }
}

declare module "*.vue" {
  import { DefineComponent } from "vue";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module "*.svg" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent;
  export default component;
}

declare module "*.png" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent;
  export default component;
}
