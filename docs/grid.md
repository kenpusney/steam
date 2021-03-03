# Steam CSS grid system

Steam grid system is a 24-column grid system.

```html
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
```

- `steam-row` is primary container of grids
- `steam-col` is column system
- `span-n` specifies the width
- `offset-n` specifies position
- `steam-row-flex` adds flexbox features to `steam-row`, you can use
  - `steam-row__justify-center`
  - `steam-row__justify-end`
  - `steam-row__justify-space-between`
  - `steam-row__justify-space-around`
  - `steam-row__align-center`
  - `steam-row__align-bottom`
