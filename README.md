# Calculator App

This is a basic calculator desktop application built with **Electron.js**.
It was created as my first project to learn how Electron works and how to build cross-platform desktop apps using web technologies.

## Features

* Simple calculator with basic operations (add, subtract, multiply, divide)
* Clean and easy to use interface
* Runs as a desktop application on Windows, macOS, and Linux
* Built using HTML, CSS, and JavaScript inside Electron

## Installation

1. Clone this repository

   ```bash
   git clone https://github.com/Codewithajoydas/Calculator-App-In-Electron.git
   ```
2. Go into the project folder

   ```bash
   cd calculator-app
   ```
3. Install dependencies

   ```bash
   npm install
   ```
4. Start the app

   ```bash
   npm start
   ```

## Build

To create an executable build of the app:

```bash
npm run dist
```

The build files will be available inside the `dist/` folder.

## Project Structure

```
calculator-app/
├── main.js        # Main process
├── index.html     # Calculator UI
├── package.json
```

## Learning Goals

* Understand the basics of Electron
* Learn how to connect HTML, CSS, and JavaScript in a desktop app
* Practice packaging and running an app outside the development environment
