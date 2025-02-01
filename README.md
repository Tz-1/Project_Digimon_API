# Project Digimon API

## Overview
This project is a web application that consumes the Digimon API to display a list of Digimon and their attributes, such as images, names, and levels. The application allows users to filter Digimon by different levels and view and get random Digimon to be their partner. The site has some small easter eggs with the purpose of practicing JS.

## Features
- **Homepage**: Displays an introduction to Digimon, including images and descriptions.
- **Digimon List**: Fetches and displays all Digimon from the API.
- **Filter by Level**: Users can view Digimon of a specific level (Fresh, Training, Rookie, Champion, Ultimate, Armor, Mega).
- **Partner Digimon**: Fetches and displays a random Digimon.
- **Search Digimon**: Own method to search a Digimon.


## Technologies Used
- **HTML (Bootstrap)**: For structuring the webpage.
- **CSS**: For styling the UI.
- **JavaScript (jQuery)**: This is used to handle API requests and dynamic content updates.

## API Used
- **Endpoint**: `https://digimon-api.vercel.app/api/digimon`
- **Filters**:
  - `https://digimon-api.vercel.app/api/digimon/level/{level}` (to filter by level)
  - `https://digimon-api.vercel.app/api/digimon/name/{name}` (to search by name)

## Installation & Usage
- **Locally**
  1. Clone the repository:
  2. Open `index.html` in a browser.

- **Online**
  - Click the link: 
    https://tz-1.github.io/Project_Digimon_API/

## Dependencies
- jQuery (included via CDN in the HTML file)
