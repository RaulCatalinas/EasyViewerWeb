# How to contribute

## Types of contributions

Contributions of all types are welcome, including:

- Code
- Testing
- Translations
- Bug reports
- Suggestions

## To-do's

- [ ] Add a contributors section to show the names and photo of people who have contributed to the project.
- [x] Fix a bug where you enter a URL and hit download and the server crashes  
      ``
      node:events:496
      throw er; // Unhandled 'error' event
      ``.  Here's the issue corresponding to this error [#43](https://github.com/RaulCatalinas/EasyViewerWeb/issues/43)
- [ ] Fix a bug where hitting the "Download Audio" button gives an:  
      ``
      Astro detected an unhandled rejection" error. Here is the stack trace: Error: No such format found: highestaudio
      ``.   Here's the issue corresponding to this error [#41](https://github.com/RaulCatalinas/EasyViewerWeb/issues/41).
- [ ] Add testing
- [x] Add download logic
- [x] Make the progression bar run only when the user presses the download button and when the download is complete it resets to zero.
- [x] Add Spanish translation
- [x] Adding logic to allow the user to change the language
- [x] Make it so that if the user has the browser in English, he/she is redirected to the English version (/en) and in any other case the user remains in the Spanish version, but keeping the feature that he/she can change the language.

## How to submit a contribution

To submit a contribution, follow these steps:

1. Create a fork of the project on GitHub.
2. Create a development branch for your contribution.
3. Make your changes to the development branch.
4. Test your changes.
5. Submit a pull request to the main project branch.
