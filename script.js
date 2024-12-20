const loanForm = document.getElementById('loan-form');
const loansDiv = document.getElementById('loans');

let loans = [];

loanForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const amount = parseFloat(document.getElementById('amount').value);
    const term = parseInt(document.getElementById('term').value);

    if (isNaN(amount) || isNaN(term) || amount <= 0 || term <= 0) {
        alert('Please enter valid loan details.');
        return;
    }

    const loan = {
        id: Date.now(),
        amount,
        term,
        status: 'PENDING',
    };

    loans.push(loan);
    renderLoans();
    loanForm.reset();
});

function renderLoans() {
    loansDiv.innerHTML = '<h2>Your Loans</h2>';
    loans.forEach(loan => {
        const loanDiv = document.createElement('div');
        loanDiv.className = 'loan';
        loanDiv.innerHTML = `
            <p><strong>ID:</strong> ${loan.id}</p>
            <p><strong>Amount:</strong> $${loan.amount}</p>
            <p><strong>Term:</strong> ${loan.term} weeks</p>
            <p><strong>Status:</strong> <span class="${loan.status.toLowerCase()}">${loan.status}</span></p>
            ${loan.status === 'PENDING' ? `<button onclick="approveLoan(${loan.id})">Approve</button>` : ''}
        `;
        loansDiv.appendChild(loanDiv);
    });
}

function approveLoan(id) {
    const loan = loans.find(l => l.id === id);
    if (loan) {
        loan.status = 'APPROVED';
        renderLoans();
    }
}
