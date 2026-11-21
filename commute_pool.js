// =========================
// FIND A RIDE FUNCTIONALITY
// =========================

document.addEventListener("DOMContentLoaded", function () {

    const searchForm = document.getElementById("ride-search-form");
    const resultsContainer = document.getElementById("ride-results");

    // Fictional sample data for testing the prototype
    const sampleRides = [
        {
            pickup: "hinjewadi",
            destination: "pune station",
            time: "8:00 AM",
            seats: 2,
            fare: 120
        },
        {
            pickup: "hinjewadi",
            destination: "pune station",
            time: "9:30 AM",
            seats: 1,
            fare: 100
        },
        {
            pickup: "wakad",
            destination: "pune station",
            time: "10:00 AM",
            seats: 3,
            fare: 150
        },
        {
            pickup: "hinjewadi",
            destination: "shivajinagar",
            time: "8:30 AM",
            seats: 2,
            fare: 80
        }
    ];

    searchForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const pickup = document.getElementById("pickup")
            .value.trim().toLowerCase();

        const destination = document.getElementById("destination")
            .value.trim().toLowerCase();

        const travelDate = document.getElementById("travel-date").value;

        // Search matching fictional routes
        const matchedRides = sampleRides.filter(function (ride) {

            return ride.pickup.includes(pickup) &&
                ride.destination.includes(destination);

        });

        resultsContainer.innerHTML = "";

        if (matchedRides.length === 0) {

            resultsContainer.innerHTML = `
                <div class="no-rides">
                    <h3>No matching sample rides found.</h3>
                    <p>Try different pickup or destination locations.</p>
                </div>
            `;

            return;
        }

        matchedRides.forEach(function (ride) {

            const rideCard = document.createElement("div");
            rideCard.className = "ride-card";

            rideCard.innerHTML = `
                <h3>Sample Ride Available</h3>

                <p><strong>Pickup:</strong> ${ride.pickup}</p>

                <p><strong>Destination:</strong> ${ride.destination}</p>

                <p><strong>Travel Date:</strong> ${travelDate}</p>

                <p><strong>Departure:</strong> ${ride.time}</p>

                <p><strong>Available Seats:</strong> ${ride.seats}</p>

                <p class="ride-price">Estimated Share: ₹${ride.fare}</p>

                <p><small>Fictional data for prototype testing only.</small></p>
            `;

            resultsContainer.appendChild(rideCard);

        });

    });

});

// =========================
// OFFER A RIDE FUNCTIONALITY
// =========================

document.addEventListener("DOMContentLoaded", function () {

    const offerForm = document.getElementById("offer-ride-form");
    const offerResults = document.getElementById("offer-ride-results");

    if (offerForm && offerResults) {

        offerForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const pickup = document.getElementById("offer-pickup").value.trim();
            const destination = document.getElementById("offer-destination").value.trim();
            const date = document.getElementById("offer-date").value;
            const time = document.getElementById("offer-time").value;
            const seats = document.getElementById("offer-seats").value;
            const fare = document.getElementById("offer-fare").value;

            offerResults.innerHTML = `
                <div class="ride-card">
                    <h3>Sample Listing Created Successfully!</h3>

                    <p><strong>Pickup:</strong> ${pickup}</p>
                    <p><strong>Destination:</strong> ${destination}</p>
                    <p><strong>Travel Date:</strong> ${date}</p>
                    <p><strong>Departure Time:</strong> ${time}</p>
                    <p><strong>Available Seats:</strong> ${seats}</p>
                    <p><strong>Estimated Share:</strong> ₹${fare}</p>

                    <p><small>Fictional sample listing for prototype testing only.</small></p>
                </div>
            `;

            offerForm.reset();

        });

    }

});


// MOBILE DASHBOARD DROPDOWN

const dropdownToggle = document.querySelector(".dropdown-toggle");
const dropdown = document.querySelector(".dropdown");

if (dropdownToggle && dropdown) {
    dropdownToggle.addEventListener("click", function () {
        dropdown.classList.toggle("active");
    });
}
