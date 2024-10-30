function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open'); // Toggle the 'open' class
}
function closeSidebar() {
    document.getElementById("sidebar").classList.remove("sidebar-open");
}
function performSearch() {
    const searchInput = document.getElementById('search-input').value.trim().toLowerCase(); // Get the search input value and convert it to lowercase

    if (searchInput) {
        // Check if the input matches specific cuisine names
        switch (searchInput) {
            case 'indian':
                window.location.href = 'indian.html'; // Redirect to Indian recipes page
                break;
            case 'chinese':
                window.location.href = 'chinese.html'; // Redirect to Chinese recipes page
                break;
            case 'american':
                window.location.href = 'american.html'; // Redirect to American recipes page
                break;
            case 'italian':
                window.location.href = 'italian.html'; // Redirect to Italian recipes page
                break;
            default:
                alert("No matching recipes found!"); // Alert if no match is found
                break;
        }
    } else {
        alert("Please enter a recipe style to search!"); // Alert if input is empty
    }
}

