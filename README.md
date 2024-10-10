# Mini Toast Notification Library

This is a mini toast notification library implemented using vanilla React.js.

## Features

- Display toast notifications at the bottom center of the main application.
- Notifications automatically fade out after 7 seconds, but hovering over them resets the timer.
- User-configurable notification duration.
- Ability to handle multiple messages, queuing up additional messages if necessary.
- Max of 3 messages displayed simultaneously.
- Clicking the "x" icon removes the notification immediately.
- Integration with various components to trigger notifications.

## Getting Started

To use this library in your project, follow these steps:

1. Clone the repository:

   ```bash
   git clone <repository_url>

2. Install dependencies:

	```bash
	npm install

3. Start the development server:

	```bash

	npm start


### Usage:
1. Component1
This component demonstrates triggering a default toast notification on button click.

2. Component2
This component demonstrates triggering a custom toast notification with content from an input field.

4. Component3
This component demonstrates triggering a toast notification with a countdown timer, followed by an API call to fetch a list of countries.

### Dependencies

   - React
   - React Router
   - Axios (for API calls)
