import { LitElement } from "lit";
import { html, literal } from "lit/static-html.js";

class MyElement extends LitElement {
  render() {
    const tag = literal`button`;
    return html`
      <${tag}><slot></slot></${tag}>
    `;
  }
}
