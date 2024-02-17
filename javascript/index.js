document.addEventListener('DOMContentLoaded', function() {
    let form = document.getElementById('ticketForm');
    let ticketList = document.getElementById('ticketList');
    let deleteAllButton = document.getElementById('deleteAll');

    let tickets = [];

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Retrieve form values
        let film = document.getElementById('film').value;
        let numberOfTickets = document.getElementById('tickets').value;
        let firstname = document.getElementById('firstname').value;
        let surname = document.getElementById('surname').value;
        let email = document.getElementById('email').value;
        let phone = document.getElementById('phone').value;

        // Perform input validation
        if (!numberOfTickets.trim() || isNaN(numberOfTickets) || numberOfTickets < 1 || numberOfTickets > 10) {
            alert('Vennligst skriv inn et gyldig antall billetter (1-10).');
            return;
        }

        if (!firstname.trim()) {
            alert('Vennligst skriv inn fornavnet ditt.');
            return;
        }

        if (!surname.trim()) {
            alert('Vennligst skriv inn etternavnet ditt.');
            return;
        }

        if (!email.trim()) {
            alert('Vennligst skriv inn en gyldig e-postadresse.');
            return;
        }

        if (!phone.trim() || phone.length !== 8 || isNaN(phone)) {
            alert('Vennligst skriv inn et gyldig telefonnummer (8 sifre).');
            return;
        }

        // Create ticket object
        const ticket = {
            film: film,
            numberOfTickets: numberOfTickets,
            firstname: firstname,
            surname: surname,
            email: email,
            phone: phone
            // Add other properties here
        };

        // Add ticket to the array
        tickets.push(ticket);

        // Clear form fields
        form.reset();

        // Render tickets
        renderTickets();
    });

    deleteAllButton.addEventListener('click', function() {
        // Clear all tickets
        tickets.length = 0;
        renderTickets();
    });

    function renderTickets() {
        // Clear existing list
        ticketList.innerHTML = '';

        // Render each ticket
        tickets.forEach(function(ticket, index) {
            const li = document.createElement('li');
            li.textContent = `Film: ${ticket.film}, Antall: ${ticket.numberOfTickets}, Fornavn: ${ticket.firstname}, Etternavn: ${ticket.surname}, E-post: ${ticket.email}, Telefon: ${ticket.phone}`;
            // Append other ticket details as needed
            ticketList.appendChild(li);
        });
    }
});
