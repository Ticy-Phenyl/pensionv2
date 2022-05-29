// Script shadow onclick:
function shadowMe() {
    search = document.getElementById("searchInput").classList.toggle("shadow")
}
window.addEventListener('focusout', shadowMe, false);




//  Script pr fctn recherche:
$(document).ready(function () {
    $("#searchInput").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#letMeKnow .card").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    })
})
