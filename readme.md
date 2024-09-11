
# To-Do App

A simple To-Do application built with HTML, CSS, and JavaScript. This app allows users to add, edit, and delete tasks. It also saves tasks to local storage so that they persist even after a page refresh.

## Features

- Add new tasks
- Edit existing tasks
- Delete tasks with a confirmation dialog
- Local storage support for persistent task storage
- Icons for task actions using Font Awesome

## Getting Started

### Prerequisites

- A modern web browser (e.g., Google Chrome, Mozilla Firefox, Microsoft Edge)

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/todo-app.git
   cd todo-app
   ```

2. **Open the Project:**
   
   Open `index.html` in your preferred web browser.

### Project Structure

- `index.html` - The main HTML file.
- `styles.css` - Contains the CSS styles for the application.
- `script.js` - Contains the JavaScript code that powers the To-Do application.
- `delete-sound.mp3` - The audio file played when a task is deleted (ensure this file exists or replace with your own sound file).

### How It Works

1. **Adding a Task:**

   - Enter a task in the input field and click "Add" or press Enter.
   - The task will appear in the list with options to edit or delete.

2. **Editing a Task:**

   - Click the "Edit" icon next to the task you want to change.
   - Enter the new task description in the prompt dialog and click "OK" to save.

3. **Deleting a Task:**

   - Click the "Delete" icon next to the task you want to remove.
   - A confirmation dialog will appear; click "OK" to delete the task or "Cancel" to keep it.

### Dependencies

- [Font Awesome](https://cdnjs.com/libraries/font-awesome) - For icons used in the application.

### Local Storage

The application uses the browser's local storage to save tasks. Tasks are loaded from local storage when the page is loaded and saved whenever a task is added, edited, or deleted.

### Customizing

- **Changing the Sound File:** Replace `delete-sound.mp3` with your own audio file if desired.
- **Modifying Icons:** Update the Font Awesome icon classes in `script.js` to use different icons if preferred.

### Contributing

Feel free to fork the repository and make a pull request with your changes. Ensure your code adheres to the project's coding standards.

### Contact

For any questions or issues, you can reach out to [Irshad K T](irshad2934@gmail.com).

---

Feel free to adjust the sections according to your project's specifics and personal preferences.