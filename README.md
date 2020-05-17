# inputyper

Micro Library For Input Placeholder Typing Effect

[Live Demo](https://raw.githack.com/s0kil/inputyper/master/test.html)

## Prerequisite

### Install

```html
<script src="https://cdn.jsdelivr.net/gh/s0kil/inputyper@6e03fc2fe660bf1c75fc70eb320c0f6dd77ed61e/index.js"></script>
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
