const body = document.querySelector("body");
const sidebar = body.querySelector(".sidebar");
const toggle = body.querySelector(".toggle");
const listItems = sidebar.querySelectorAll("ul"); // Select all <li> elements within the sidebar

function toggleSidebar() {
    sidebar.classList.toggle("close");
    sidebar.classList.toggle("open");
}

function checkOverflow() {
    listItems.forEach((item) => {
        // Check if the text content overflows the container
        if (item.scrollWidth > item.clientWidth) {
            sidebar.classList.add("close"); // Close the sidebar
        }
    });
}

toggle.addEventListener("click", () => {
    toggleSidebar();
});

// Check for overflow initially and on window resize
window.addEventListener("resize", checkOverflow);
window.addEventListener("load", checkOverflow);
