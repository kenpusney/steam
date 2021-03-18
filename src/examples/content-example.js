import {append, html} from "../util/element";

append(html`
  <div class="content-example">
    <div class="demo-col">
      <p>You can use the mark tag to
        <mark>highlight</mark>
        text.
      </p>
      <p>
        <del>This line of text is meant to be treated as deleted text.</del>
      </p>
      <p><s>This line of text is meant to be treated as no longer accurate.</s></p>
      <p>
        <ins>This line of text is meant to be treated as an addition to the document.</ins>
      </p>
      <p><u>This line of text will render as underlined.</u></p>
      <p><small>This line of text is meant to be treated as fine print.</small></p>
      <p><strong>This line rendered as bold text.</strong></p>
      <p><em>This line rendered as italicized text.</em></p>
    </div>
    <abbr title="attributes">attr</abbr>
    <abbr title="Hyper Text Markup Language" class="initialism">html</abbr>

    <div>
      <div class="box br3"></div>
      <div class="box br3 br-pill"></div>
      <div class="box br3 br-top"></div>
      <div class="box br3 br-right"></div>
      <div class="box br3 br-bottom"></div>
      <div class="box br3 br-left"></div>
    </div>
    <style type="text/css">
      .content-example .box {
        width: 64px;
        height: 40px;
        margin: 5px;
        border-color: black;
        border-width: 1px;
        border-style: solid;
      }
    </style>
  </div>
`)
