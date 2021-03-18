import {append, html} from "../util/element";

append(html`
  <div class="colors-examole">
    <div class="demo-buttons">
      <button class="element-primary">Primary Button</button>
      <button class="element-success">Success Button</button>
      <button class="element-warning">Warning Button</button>
      <button class="element-danger">Danger Button</button>
      <button class="element-secondary">Secondary Button</button>
    </div>

    <div class="demo-buttons">
      <h3>disabled:</h3>
      <button class="element-primary" disabled>Primary Button</button>
      <button class="element-success" disabled>Success Button</button>
      <button class="element-warning" disabled>Warning Button</button>
      <button class="element-danger" disabled>Danger Button</button>
      <button class="element-secondary" disabled>Secondary Button</button>
    </div>

    <style type="text/css">
      button {
        padding: 1em;
        border: none;
        outline: none;
      }

      .demo-buttons {
        margin: 1em;
      }
    </style>
  </div>
`)

