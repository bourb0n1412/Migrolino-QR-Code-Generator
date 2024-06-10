# Migrolino-QR-Code-Generator

Welcome to the Migrolino QR Code Generator! This project allows you to generate multiple QR codes based on different combinations of input words in the style of the Migrolino app for collective passes. The inspiration for this project comes from the use of QR codes consisting of words. In the Migrolino app, these codes often consist of a combination of product (e.g. sandwich), version (e.g. v2) and year (e.g. 2023). These elements are used in the snake_case and are randomly strung together, but sometimes not separated by underscores (e.g. 2023sandwiches_v2, 2023_sandwichesv2).

## Table of Contents
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the App](#running-the-app)
- [Usage](#usage)
- [License](#license)

## Features
- Generate QR codes based on different combinations of up to four input words.
- Display generated QR codes with their corresponding text.


## Prerequisites
Before you begin, ensure you have met the following requirements:
- Node.js and npm installed on your machine.

## Installation
1. Clone the repository:
    ```sh
    git clone https://github.com/bourb0n1412/Migrolino-QR-Code-Generator.git
    ```
2. Navigate to the project directory:
    ```sh
    cd Migrolino-QR-Code-Generator
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

## Running the App
To start the development server, run:
```sh
npm start
  ```

This will launch the app in your default web browser. If it doesn't open automatically, navigate to [http://localhost:3000](http://localhost:3000).

## Usage
1. Enter up to four words in the input fields.
2. Click the "QR-Codes generieren" button to generate QR codes.
3. The generated QR codes will be displayed below the form, along with the corresponding text combinations.

### Example
1. Input words: `React`, `App`, `QR`, `Code`
2. Generated combinations and QR codes will include:
    - `React_App`
    - `App_React`
    - `ReactApp`
    - `AppReact`
    - ...
3. Each combination will be displayed with its QR code.

## License
This project is licensed under the MIT License.

### Disclaimer
This React application has been developed for project purposes only and should not be abused. Any attempt to obtain free items from Migrolino or other stores without making the required payments is strictly prohibited. Misuse of this application for fraudulent activities is illegal and ethically unacceptable.

Enjoy generating your QR codes responsibly!
