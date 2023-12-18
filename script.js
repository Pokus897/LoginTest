dsLocalSportMany.refreshDataSource();
dsLocalSportsPlace.refreshDataSource();
dsLocalSportsPlayer.refreshDataSource();
dsLocalStadium.refreshDataSource();
dsLocalTeamName.refreshDataSource();
dsLocalSportMatches.refreshDataSource();
dsLocalSportsResult.refreshDataSource();
dsLocalSportsSport.refreshDataSource();

document.getElementById('localsportsplayers').addEventListener('click', function() {
  dsLocalSportsPlayer.refreshDataSource();
});

document.getElementById('localsportsstadium').addEventListener('click', function() {
  dsLocalStadium.refreshDataSource();
});

document.getElementById('localsportmatches').addEventListener('click', function() {
  dsLocalSportMatches.refreshDataSource();
});

document.getElementById('localsportresult').addEventListener('click', function() {
  dsLocalSportsResult.refreshDataSource();
});

function toggleForm(event) {
    event.preventDefault();

    var loginForm = document.getElementById("loginForm");
    var signupForm = document.getElementById("signupForm");

    if (loginForm.style.display === "none") {
        loginForm.style.display = "block";
        signupForm.style.display = "none";
    } else {
        loginForm.style.display = "none";
        signupForm.style.display = "block";
    }
}

