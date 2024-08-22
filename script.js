function sumColumn(className) {
    let sum = 0;
    const elements = document.getElementsByClassName(className);
    for (let i = 0; i < elements.length; i++) {
        const value = parseFloat(elements[i].textContent.replace('$', '').replace(',', ''));
        if (!isNaN(value)) {
            sum += value;
        }
    }
    return sum;
}

function updateTotals() {
    const columns = [
        { className: 'sumColumn1', totalId: 'totalColumn1' },
        { className: 'sumColumn2', totalId: 'totalColumn2' },
        { className: 'sumColumn3', totalId: 'totalColumn3' },
        { className: 'sumColumn4', totalId: 'totalColumn4' },
        { className: 'sumColumn5', totalId: 'totalColumn5' }
    ];

    columns.forEach(column => {
        const total = sumColumn(column.className);
        document.getElementById(column.totalId).textContent = `$${total.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    });
}

updateTotals();
