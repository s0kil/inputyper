const PlaceholderTypingEffect = ({
  element,
  strings = [],
  append = "",
  prepend = "",
  nextDelay = 2000,
  nextRandom = true,
  keystrokeDelay = 100,
} = options) => ({
  begin: ({ delay: beginDelay } = options) => {
    const typingEffect = () => {
      let characters = (() => {
        if (nextRandom)
          return strings[Math.floor(Math.random() * strings.length)].split("");
        else return strings[0].split("");
      })();

      element.placeholder = prepend;
      const EventTypingComplete = new Event("typingEffectComplete");
      const typingInterval = setInterval(() => {
        if (!characters.length) {
          element.placeholder = element.placeholder + append;
          clearInterval(typingInterval);
          document.dispatchEvent(EventTypingComplete);
        } else {
          element.placeholder = element.placeholder + characters.shift();
        }
      }, keystrokeDelay);
    };

    setTimeout(() => typingEffect(), beginDelay);

    const handleTypingEffectComplete = () =>
      setTimeout(() => typingEffect(), nextDelay);

    document.addEventListener(
      "typingEffectComplete",
      handleTypingEffectComplete
    );

    return {
      cease: () =>
        document.removeEventListener(
          "typingEffectComplete",
          handleTypingEffectComplete
        ),
    };
  },
});

window.PlaceholderTypingEffect = Object.freeze(PlaceholderTypingEffect);
