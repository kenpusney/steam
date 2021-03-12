import {append, html} from "../util/element";

append(html`
<div class="grid-example">
  <h1>Steam Grid Example</h1>
  <div class="steam-row">
    <div class="steam-col span-4 offset-4">
      span 4 offset 4
    </div>
    <div class="steam-col span-10">
      <div class="steamrow">
        <div class="steam-col span-8">
          span 8 in span 10
        </div>
        <div class="steam-col span-8">
          span 8 in span 10
        </div>
      </div>
    </div>

    <div class="steam-col span-6">
      span 6
    </div>
  </div>
  <div class="steam-row">
    <div class="steam-col span-4 offset-4">
      span 4 offset 4
    </div>
    <div class="steam-col span-10">
      <div class="steam-row steam-row-flex steam-row__justify-center">
        <div class="steam-col span-8">
          span 8 in span 10
        </div>
        <div class="steam-col span-8">
          span 8 in span 10
        </div>
      </div>
    </div>

    <div class="steam-col span-6">
      span 6
    </div>
  </div>

  <style type="text/css">
    .grid-example {
      width: 50%;
      min-width: 400px;
    }
  </style>
</div>
`);
