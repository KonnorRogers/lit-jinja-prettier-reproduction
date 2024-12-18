import { LitElement, html } from "lit";

class MyElement extends LitElement {
  render () {
    return html`
      <button><slot></slot></my-button>
    `
  }
}
