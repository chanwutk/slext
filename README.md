# SLext

## **Note**: This is a modified version that removes support for theming.

[![Build Chrome + Firefox](https://github.com/hrjakobsen/slext/actions/workflows/build.yml/badge.svg)](https://github.com/hrjakobsen/slext/actions/workflows/build.yml)
[![Chrome Web Store](https://img.shields.io/chrome-web-store/v/jlajbdlfgkklpjdgnhajdohfjbihming)](https://chrome.google.com/webstore/detail/slext/jlajbdlfgkklpjdgnhajdohfjbihming)
[![Mozilla Add-on](https://img.shields.io/amo/v/slext)](https://addons.mozilla.org/en-US/firefox/addon/slext/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4)](https://github.com/prettier/prettier)

Slext is an unofficial browser extension for extending the online LaTeX editor Overleaf, with features such as tabs, custom themes and easier file navigation with search.

## To install

A listing for the extension is maintained in [Google Chrome webstore](https://chrome.google.com/webstore/detail/slext/jlajbdlfgkklpjdgnhajdohfjbihming?hl=en) and [Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/slext/). The listings are up to date with the `master` branch on this repository. If you want the latest features of the `develop` branch, you must install the extension from source. The process is described for Google Chrome and Firefox below.

### Google Chrome

~Download from [Chrome webstore](https://chrome.google.com/webstore/detail/slext/jlajbdlfgkklpjdgnhajdohfjbihming?hl=en)~ or install from source OR download [chrome.zip](https://github.com/chanwutk/slext/raw/build/chrome.zip).

To install from source, clone the repository:

```bash
git clone git@github.com:hrjakobsen/slext.git
cd slext
npm install
npm run build:chrome
```

Then in Google Chrome, go to [chrome://extensions](chrome://extensions)

Drag the packed chrome extension from the 'packages' directory onto the page to install the extension.

### Firefox

~Download from [Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/slext/)~ or install from source OR download [firefix.zip](https://github.com/chanwutk/slext/raw/build/firefox.zip).

To install from source, clone the repository:

```bash
git clone git@github.com:hrjakobsen/slext.git
cd slext
npm install
npm run build:firefox
```

Then in Firefox, go to [about:addons](about:addons)

Click on the settings and press 'Install Add-on From File' then select the .xpi file in the packages folder.

# Development

The extension is developed for Google Chrome and Firefox, so please ensure that any features you add works in those two browsers. It may also be possible to run the extension in other browsers,

## Clone the repository

```bash
git clone git@github.com:hrjakobsen/slext.git
cd slext
```

## Install dependencies

SLext is built and tested against Node 16. It is possible that a lower version will also build it.
With Node 16 and npm installed, the dependencies for SLext can be installed with:

```bash
npm install
```

## Running

### Google Chrome

Run `$ npm run dev:chrome` and load the `dist/chrome`-directory into Chrome as an unpacked extension on [chrome://extensions → Load unpacked](chrome://extensions). After making changes to the code it will automatically be compiled, but you need to refresh the extension where you loaded it.

### Firefox

Run `$ npm run dev:firefox` and load the `dist/firefox`-directory into Firefox as an temporary add-on on [about:debugging → This Firefox → Load Temporary Add-on](about:debugging). After making changes to the code it will automatically be compiled, but you need to click "Reload" where you loaded the it.

## Building

To build a release of SLext run the following command

```bash
npm run build:chrome
# or
npm run build:firefox
```

The resulting extension will be stored in the `packages` directory.
