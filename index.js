let length = 30;

function googleIt() {
    let searchOriginal = document.getElementById("searchField").value.substring(0,30);
    // add users search to google
    window.location.href = 'https://www.google.com/search?q='+searchOriginal
}