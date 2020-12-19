import { c } from "atomico";
import { html } from "atomico/html";
import "./component-2.js";

function component() {
  return html`<host>component-1</host>`;
}

customElements.define("component-1", c(component));
