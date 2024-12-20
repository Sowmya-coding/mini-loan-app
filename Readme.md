Mini Loan App
The Mini Loan App is a simple web-based application that allows users to create loan requests, view their loans, and approve pending loans. This app is built using HTML, CSS, and JavaScript and does not require a backend.

Features
Create Loans: Users can enter the loan amount and term (in weeks) to create a loan.
View Loans: Displays all loans with details such as ID, amount, term, and status (Pending/Approved).
Approve Loans: Pending loans can be approved using the "Approve" button.
Dynamic Updates: All loans are rendered dynamically on the page using JavaScript.
Project Structure

mini-loan-app/
├── index.html       # Main HTML file for the app
├── styles.css       # CSS file for styling the app
├── script.js        # JavaScript file for functionality
└── README.md        # Instructions and documentation
How to Use
1. Open the App
Download or clone the repository to your local system.
Open the index.html file in any web browser.
2. Create a Loan
Fill in the Loan Amount and Loan Term (weeks) fields.
Click the "Create Loan" button.
The loan will be displayed in the "Your Loans" section with the status PENDING.
3. Approve a Loan
Locate a loan with the status PENDING.
Click the "Approve" button next to the loan.
The loan's status will change to APPROVED.
Code Overview
1. HTML (index.html)
Defines the structure of the app, including the loan form and loan list section.
2. CSS (styles.css)
Provides styling for the app, including:
Responsive form layout.
Color-coded loan status (red for PENDING, green for APPROVED).
Button hover effects.
3. JavaScript (script.js)

Implements the app's logic:
Loan Creation: Adds a new loan object to an in-memory array (loans).
Loan Rendering: Dynamically updates the DOM to display the loans.
Loan Approval: Changes the status of a loan to APPROVED.
Example Workflow

Create a Loan:
Amount: $10,000
Term: 3 weeks
View Loans:
Loan appears with PENDING status.
Approve Loan:
Click "Approve" to change the status to APPROVED.
Prerequisites
A modern web browser (e.g., Chrome, Firefox, Edge).
Limitations
The app uses an in-memory data structure (loans array) to store loan data. Refreshing the page will clear all data.
No backend or persistent storage is included.
Future Enhancements
Add backend integration for data persistence.
Include user authentication.
Enable repayment scheduling and tracking.

License
This project is open-source and available under the MIT License

## Live Demo
You can access the deployed version of the app (https://miniloanapp.tiiny.site/.)

## Code Repository
Find the source code on (https://github.com/Sowmya-coding/mini-loan-app).

