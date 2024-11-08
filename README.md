# Ignite Team Mobile App

## Short Description

Ignite Team is a React Native mobile app developed to help users create, manage, and organize teams for games. The app allows users to create groups, assign players to teams within each group, and manage teams effectively. Built with Expo and TypeScript, the app provides an easy-to-navigate UI, using persistent storage to save data locally.

## Used Technologies

-	**React Native:** Core framework for mobile development
-	**Expo:** Platform for building and deploying the app
-	**TypeScript:** Type safety for improved developer experience
-	**AsyncStorage:** Provides persistent local storage for groups, teams, and players
-	**Styled Components:** Manages styles across components, enabling a theme-based approach

## Detailed Description

### 1. Overview

Ignite Team is designed for mobile users to organize game events by grouping players into teams within defined groups. Each group can represent a particular game or event, with two teams of players within each group. Users can add or remove players from these teams, as well as create or delete entire groups.

### 2. Project Structure

-	Screens: Contains various screens, such as:
-	Group List Screen: Lists all available groups.
-	Team Screen: Displays details for each group, including two teams and their players.
-	Components: Reusable UI components such as player lists, group cards, and buttons.
-	Services: Contains helper functions for managing AsyncStorage interactions.
-	Navigation: Manages screen navigation using Expo Router.

### 3. Core Features

1.	Create/Delete Groups: Users can add new groups and delete existing ones.
2.	Create/Delete Teams: Each group has two default teams. Users can add or remove players within these teams.
3.	Persistent Storage with AsyncStorage: All data is stored locally using AsyncStorage, allowing users to continue where they left off, even after closing the app.
4.	Styled UI with Styled Components: Consistent styling is achieved through Styled Components, enabling a visually cohesive experience.

### 4. Key Functions and Services

-	Storage Management: AsyncStorage functions handle all CRUD operations for groups, teams, and players.
-	User Interface Components: Styled with Styled Components, offering reusable and consistent styles across the app.
-	Error Handling and Validation: Validations for player and group names ensure users enter meaningful data, enhancing UX.

### 5. Getting Started

1.	Installation: Clone the repo and install dependencies with `npm install`.
2.	Running the App: Start the Expo development server using `npx expo start` and scan the QR code with a compatible mobile device or emulator.
3.	Dependencies: Core dependencies include @react-navigation/native, styled-components, and @react-native-async-storage/async-storage.
