# Shortly - URL Shortening API Landing Page

A responsive landing page for a URL shortening service that integrates with the Clean URI API. Users can shorten URLs, view their history across sessions, and copy results to clipboard.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- Shorten any valid URL
- See a list of their shortened links, even after refreshing the browser
- Copy the shortened link to their clipboard in a single click
- Receive an error message when the form is submitted if the input field is empty

### Screenshot

![](./preview.jpg)

### Links

- Solution URL: [GitHub](https://github.com/AskTiba/Shortly-URL)
- Live Site URL: [Vercel](https://shortly-url-snowy.vercel.app)

## My process

### Built with

- Semantic HTML5 markup with BEM class naming
- CSS custom properties for consistent theming
- CSS Flexbox and Grid for layout
- Mobile-first responsive workflow
- Vanilla JavaScript (ES modules)
- Clean URI API
- Vitest for unit testing

### What I learned

This project reinforced the importance of structuring a static site with a component-based CSS methodology (BEM) from the start. The mobile-first approach made responsive breakpoints straightforward — extending a working mobile layout to desktop was much cleaner than the reverse.

The JavaScript side highlighted practical async patterns: handling API calls with proper error states, managing UI during loading (disabled button, inline feedback), and working with the Clipboard API. The test-first approach for the API client caught edge cases (empty input, network errors, encoded URL params) before they reached the browser.

```css
.stats__grid::before {
  content: '';
  position: absolute;
  height: 0.5rem;
  background-color: var(--clr-cyan-400);
  transform: translateY(-50%);
}
```

Using a pseudo-element for the connecting line between stat cards was a clean way to handle the decorative element without adding extra markup. On mobile it rotates 90 degrees to become a vertical connector.

```js
try {
  const shortened = await shortenUrl(url);
  links.push({ original: url, shortened });
  saveLinks();
  renderLinks();
} catch (err) {
  showError(err.message);
}
```

Keeping the API client as a separate module with its own test suite meant the UI code only worried about rendering and state — the async error handling was already verified.

### Continued development

Future iterations could include:

- Rate-limit handling for the free tier of the API
- URL validation on the client side before sending the request
- Animated transitions on the shortened link list

### Useful resources

- [Clean URI API docs](https://cleanuri.com/docs) - Documentation for the shortening service used in this project
- [BEM methodology](https://en.bem.info/methodology/) - CSS naming convention used throughout
- [Frontend Mentor](https://www.frontendmentor.io) - The challenge source with design files

### AI Collaboration

This project was developed using DeepSeek V4 Flash (via opencode) as an AI pair-programming assistant, following the guidance model defined in the project's AGENTS.md file. The AI operated strictly within the Intermediate-level protocol: presenting options with tradeoffs, discussing architecture before implementation, and letting the developer make final decisions rather than writing complete solutions upfront.

The AI was used to:

- Discuss architecture tradeoffs (BEM vs other CSS methodologies, test framework selection, module patterns)
- Generate and iterate on component markup and responsive styles
- Write the initial test suite for the API client, following a test-first workflow
- Debug layout alignment and responsive breakpoint issues

Throughout the process, the AGENTS.md guidelines were followed: the AI did not write complete solutions unprompted, instead guiding through discussion of approaches and letting the developer drive implementation decisions.

## Author

- LinkedIn - [Anthony Tibamwenda](https://www.linkedin.com/in/anthony-tibamwenda-64144820b/)
- GitHub - [@AskTiba](https://github.com/AskTiba)
- Frontend Mentor - [@AskTiba](https://www.frontendmentor.io/profile/AskTiba)
