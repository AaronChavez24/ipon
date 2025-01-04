const messages = [
    "SIPAG MO NAMAN MAG HULOG!",
    "IPAGPATULOY MO LANG!",
    "GREAT JOB, KEEP SAVING!",
    "YOU'RE DOING AMAZING!",
    "KEEP UP THE GOOD WORK!",
];

document.addEventListener('DOMContentLoaded', loadSavings);

document.querySelectorAll('.amount-button').forEach(button => {
    button.addEventListener('click', function () {
        const amount = this.getAttribute('data-amount');
        const list = document.getElementById('list');
        const date = new Date().toLocaleDateString('en-US');
        
        const listItem = document.createElement('li');
        listItem.textContent = `Date: ${date} - Amount: ₱${amount}`;
        list.appendChild(listItem);

        // Show a random encouraging message
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        alert(randomMessage);
        
        saveSavings(date, amount);
        updateChart();
    });
});

function saveSavings(date, amount) {
    let savings = JSON.parse(localStorage.getItem('savings')) || [];
    savings.push({ date, amount });
    localStorage.setItem('savings', JSON.stringify(savings));
}

function loadSavings() {
    let savings = JSON.parse(localStorage.getItem('savings')) || [];
    savings.forEach(item => {
        const list = document.getElementById('list');
        const listItem = document.createElement('li');
        listItem.textContent = `Date: ${item.date} - Amount: ₱${item.amount}`;
        list.appendChild(listItem);
    });
    updateChart();
}

function updateChart() {
    let savings = JSON.parse(localStorage.getItem('savings')) || [];
    let totalSaved = savings.reduce((total, item) => total + parseInt(item.amount), 0);
    
    const chart = document.getElementById('chart');
    chart.textContent = `Total Savings: ₱${totalSaved}`;
}
