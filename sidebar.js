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
            sidebar.classList.toggle("close"); // Close the sidebar
        }
    });
}

// Detect if the device width is less than a certain breakpoint (e.g., 768px)
const isMobile = window.innerWidth < 768;

// Disable opening the sidebar on mobile devices
if (isMobile) {
    sidebar.classList.add("close");
    toggle.style.display = "none"; // Hide the toggle button on mobile devices
} else {
    // Enable opening the sidebar when not on a mobile device
    toggle.addEventListener("click","touch", toggleSidebar); // Call toggleSidebar when the button is clicked
}

// Check for overflow initially and on window resize
window.addEventListener("resize", checkOverflow);
window.addEventListener("load", checkOverflow);
