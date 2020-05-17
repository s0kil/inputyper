# inputyper

Micro Library For Input Placeholder Typing Effect

## Prerequisite

### Install

```html
<script src="https://cdn.jsdelivr.net/gh/s0kil/inputyper/index.min.js"></script>
```

## API

```JavaScript
  const inputElement = document.querySelector("input")

  const inputTypingEffect = PlaceholderTypingEffect({
    element: inputElement,
    strings: ["2321312321312", "dwdewdwedwedwe"],
    prepend: "This Will Be Prepended To Each String",
    append: "This Will Be Appended To Each String'",
  }).begin({ delay: 1000 });
```
