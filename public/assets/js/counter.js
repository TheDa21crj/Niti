var counterContainer = document.querySelector(".website-counter");
var visitCount = localStorage.getItem("page_view");

// Check if page_view entry is present
if (visitCount) {
    visitCount = Number(visitCount) + 1;
    localStorage.setItem("page_view", visitCount);
} else {
    visitCount = 15000;
    localStorage.setItem("page_view", 15000);
}
counterContainer.innerHTML = visitCount;
