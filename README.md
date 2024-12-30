# Appointment Booking UI 

This is a React-based project that recreates the UI as shown in the shared screenshots and implements an Appointment Booking feature. The design focuses on a responsive, modern layout, leveraging React.js for functionality and optional styling frameworks like Bootstrap or Tailwind CSS for enhanced styling.

---

## Features

### 1. UI Replication
- Accurately replicates the given screenshots for the homepage.
- Ensures responsiveness and usability across devices (mobile-first design).
- Modern design practices implemented.

### 2. Appointment Booking System
- Users can book appointments by selecting a date.
- Prevents booking of past dates.
- Disables previously booked dates using a mock backend.
- Displays a message when a date is unavailable: _"This date is unavailable. Please select another date."_

---

## Technologies Used

- **Frontend Framework:** React.js
- **Styling:**  HTML, CSS, Tailwind CSS
- **Date Picker Library:** [react-datepicker](https://reactdatepicker.com/)
- **Mock Backend:** booked dates.

---

## Project Structure

```
├── public
├── src
│   ├── components
│   │   ├── HeroSection.jsx
│   │   ├── Doctors.jsx
│   │   ├── Header.jsx
│   │   └── BodySection.jsx
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
├── README.md
└── .gitignore
```

### Key Components
- **`Header.jsx`:** Contains the navigation bar.
- **`HeroSection.jsx`:** Handles the appointment booking form and date picker integration.
- **`Doctors.jsx`:** showing the doctors list in the ui.
- **`BodySection.jsx`:** Bottom section of the UI.

---

## Installation and Setup Instructions

### Prerequisites
- Node.js and npm installed on your system.

### Steps

1. Clone the repository:
   ```bash
   git clone <repository-link>
   cd appointment-booking-ui
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open the app in your browser at:
   ```
   http://localhost:5173
   ```

---

## Usage

1. Navigate through the UI to explore the homepage.
2. Use the Appointment Booking feature to:
   - Pick a date for booking.
   - Attempt booking unavailable dates to see appropriate messages.
   - Successfully book an available date.

---

## Mock Backend

Hardcoded unavailable dates for testing the Appointment Booking feature:
- `2024-12-25`
- `2024-12-31`

These dates will be disabled in the date picker.

---

## Deployment

The project can be deployed using any platform supporting React apps, on vercel.

Steps to deploy:
1. Build the project:
   ```bash
   npm run build
   ```
2. Follow the platform-specific instructions to deploy the `build` folder.

---

## Evaluation Criteria

### UI Accuracy
- Matches the provided homepage design.
- Fully responsive on desktop and mobile.

### Code Quality
- Proper React component structure and adherence to best practices.
- Clean, readable, and maintainable code.

### Functionality
- Correct implementation of appointment booking.
- Effective handling of unavailable dates.

---

---

## Author

**Ritik Data**  
B.Tech Final Year Student, BML Munjal University  
[GitHub Profile](https://github.com/Ritikdata12)

---

## Acknowledgements

- **Date Picker Library:** [react-datepicker](https://reactdatepicker.com/)
- **Reference Portal:** [Pristyn Care](https://www.pristyncare.com/delhi/)
- **Assignment Provided By:** Jisan Khan, Sr. Full Stack Developer, Fuerte Developers.

---
