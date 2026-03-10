document.addEventListener('DOMContentLoaded', () => {
    // 1. პაციენტის დამატების ფორმის (Modal) შექმნა დინამიურად
    const modalHTML = `
        <div id="patientModal" class="modal">
            <div class="modal-content">
                <span class="close-modal">&times;</span>
                <h2><i class="fas fa-user-plus"></i> ახალი პაციენტის რეგისტრაცია</h2>
                <form id="addPatientForm">
                    <input type="text" id="pName" placeholder="პაციენტის სახელი და გვარი" required>
                    <input type="text" id="pService" placeholder="პროცედურა (მაგ: წმენდა)" required>
                    <input type="date" id="pDate" required>
                    <button type="submit" class="btn-save">შენახვა</button>
                </form>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    // ელემენტების სელექტორები
    const modal = document.getElementById('patientModal');
    const addBtn = document.querySelector('.btn-add');
    const closeBtn = document.querySelector('.close-modal');
    const patientForm = document.getElementById('addPatientForm');
    const tableBody = document.querySelector('tbody');
    const searchInput = document.querySelector('.search-box input');

    // 2. მოდალური ფანჯრის მართვა
    addBtn.onclick = () => modal.style.display = 'block';
    closeBtn.onclick = () => modal.style.display = 'none';
    window.onclick = (e) => { if (e.target == modal) modal.style.display = 'none'; };

    // 3. ახალი პაციენტის დამატება ცხრილში
    patientForm.onsubmit = (e) => {
        e.preventDefault();
        
        const name = document.getElementById('pName').value;
        const service = document.getElementById('pService').value;
        const date = document.getElementById('pDate').value;

        const newRow = `
            <tr class="new-row-animation">
                <td>${name}</td>
                <td>${service}</td>
                <td>${date}</td>
                <td><span class="status pending">მოდის</span></td>
                <td><i class="fas fa-ellipsis-h"></i></td>
            </tr>
        `;

        tableBody.insertAdjacentHTML('afterbegin', newRow);
        
        // ფორმის გასუფთავება და დახურვა
        patientForm.reset();
        modal.style.display = 'none';
        
        // შეტყობინება
        console.log(`პაციენტი ${name} წარმატებით დაემატა.`);
    };

    // 4. ცოცხალი ძებნა (Live Search) ცხრილში
    searchInput.addEventListener('keyup', () => {
        const filter = searchInput.value.toLowerCase();
        const rows = tableBody.getElementsByTagName('tr');

        Array.from(rows).forEach(row => {
            const name = row.getElementsByTagName('td')[0].textContent.toLowerCase();
            if (name.includes(filter)) {
                row.style.display = "";
            } else {
                row.style.display = "none";
            }
        });
    });

    // ავტორის ხელმოწერა კონსოლში
    console.log("%c Portal Created by Gemini AI for L. Shiukashvili", "color: #007bff; font-weight: bold; font-size: 14px;");
});