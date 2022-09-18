# React Sql Query App - Frontend Module
This respository hosts the codebase for the React Sql Query App - Frontend.

##  Tech Stack

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/-Typescript-blue)


## Demo

<a href="https://harsh-react-sql-query-fe.netlify.app/" target="blank">
<img src="https://img.shields.io/badge/-Demo-brightgreen" />
</a>

**Introduction**
- This application is used for quering database.this support sql query and display data in table with option to download data in csv and json format.
## Features
- User can get data using predefine queries or sql query Editor.
- Sorting Feature can be used in table.
- User can go different pages using pagination
- User can download sql queries resule in csv and json format.


**Performance Matrix**

![image](https://user-images.githubusercontent.com/35390781/190888030-4bfe5f82-526a-4a99-b80c-6975a3bbaa1c.png)

**Steps taken to Improve Perfomance**
- Use caching mechanism of react (React.memo, useMemo)

**Folder Structure**
- ```src``` - Contains the codebase for the development code.
- ```build``` - Contains the codebase for the deployment code.
- ```src/components``` - Handles components of the Project.
- ```src/hooks``` - Handles custom hooks of the Project.
- ```src/constants``` - Handles constant files of the Project.
- ```src/assets``` - Handles static image assets

**Prerequisites**
- ```Node``` - Cross-platform runtime environment for developing server-side and networking applications.


**Dependencies**
- ```ace-builds and React ace``` - Used for sql code editor.
- ```alasql``` - JavaScript SQL database for browser
- ```react-hot-toast``` - used to show the notification.
- ```react-json-to-csv``` - Used to convert json to csv format.
- ```react-table``` - Used to display data in table format.

**Starting Local Dev Server**
- Run ``$npm install`` inside the root directory (First time only)
- Run ``$npm start``


