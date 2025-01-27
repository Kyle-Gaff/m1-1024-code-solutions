# dom-events-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?
  So we know what certain parts of the code do.
- What is the purpose of events and event handling?
  to respond to notable changes made be the user.
- Are all possible parameters required to use a JavaScript method or function?
  nope
- What method of element objects lets you set up a function to be called when a specific type of event occurs?
  addEventListener()
- What is a callback function?
  a function passed onto another function as an argument.
- What object is passed into an event listener callback when the event fires?
  the event object?
- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?

- What is the difference between these two snippets of code?
  ```js
  element.addEventListener('click', handleClick);
  ```
  ```js
  element.addEventListener('click', handleClick());
  ```
  the second one is calling a function and the first is calling an object.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
