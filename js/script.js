document.getElementById("year").innerHTML = new Date().getFullYear();

// Program filter
// Adapted from W3Schools, "How To - Filter Elements":
// https://www.w3schools.com/howto/howto_js_filter_elements.asp
// Modified to use data attributes, classList, addEventListener, and aria-pressed
const filterButtons = document.querySelectorAll(".chip");
const programCards = document.querySelectorAll("[data-category]");
const filterStatus = document.getElementById("filter-status");

filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const filter = button.dataset.filter;
        let shown = 0;

        // show matching cards, hide the rest
        programCards.forEach(function (card) {
            if (filter === "all" || card.dataset.category === filter) {
                card.classList.remove("is-hidden");
                shown++;
            } else {
                card.classList.add("is-hidden");
            }
        });

        // mark only the clicked chip as pressed
        filterButtons.forEach(function (btn) {
            btn.setAttribute("aria-pressed", "false");
        });
        button.setAttribute("aria-pressed", "true");

        // announce the result to screen readers
        if (filterStatus) {
            filterStatus.textContent = "Showing " + shown + (shown === 1 ? " program" : " programs");
        }
    });
});