---

# Medicine Expiry Date Detection System

This project aims to help users easily track and identify the expiration dates of their medicines using a web application with a QR code scanner. The application ensures that users are notified about the expiry status of their medicines, preventing the consumption of expired medication and potential health risks.

## Features

1. **Medicine List**: Users can view the list of all stored medicines in the system.
2. **Add Medicine**: Users can add new medicines by scanning the QR code on the packaging. The QR code will store details like medicine name, function, expiry date, manufacturer, and pricing.
3. **View Medicine Details**: View the detailed information of any selected medicine.
4. **Notes Feature**: Users can add notes related to their medication, such as instructions from medical officers.
5. **Reminder Calendar**: The app includes a calendar feature to set reminders for medicine expiry and doctor appointments.

## Problem Statement

Many households keep various medications on hand, and often overlook checking expiry dates over time. This project leverages modern technology to help users easily detect and manage the expiration of their medicines through a simple web application.

## Proposed Solution

The web app uses a QR code scanner to fetch and display detailed information about medicines, including expiry dates. This ensures that the user can track the validity of the medicines stored at home.

### Workflow

1. **Login**: Users log in with their credentials.
2. **Add Medicine**: Scan the QR code on the medicine to input its name, expiry date, and other details.
3. **Store Data**: The scanned data is stored in the database (MongoDB).
4. **Search & View Medicines**: Users can search for medicines by scanning the QR code again or viewing all stored medicines in the list.
5. **Reminder Calendar**: Users can create reminders for appointments or when medicines are about to expire.

## Technology Stack

- **Frontend**: HTML, CSS, JavaScript, EJS
- **Backend**: Node.js
- **Database**: MongoDB

## How to Run the Project

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/medicine-expiry-date-detection.git
   cd medicine-expiry-date-detection
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up your MongoDB connection in `.env` file.
4. Start the server:
   ```bash
   npm start
   ```
5. Open the application in your browser at `http://localhost:3000`.


## Future Improvements

- Mobile application version.
- Enhanced UI/UX.
- More sophisticated notification system for expired medicines.
  
---
