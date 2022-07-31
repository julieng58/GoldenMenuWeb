initApp = function() {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            user.getIdToken().then(function(accessToken) {
                document.getElementById('compteButton').textContent = 'Se deconnecter';
                document.getElementById('navbarDropdownAssiettes').classList.remove('disabled');
                document.getElementById('navbarDropdownCompos').classList.remove('disabled');
                document.getElementById('navbarDropdownCave').classList.remove('disabled');
                document.getElementById('fournisseurbutton').classList.remove('disabled');
                document.getElementById('navbarDropdownCaveListing').classList.remove('disabled');

            });
        } else {
            document.getElementById('compteButton').textContent = 'Se connecter';
            document.getElementById('navbarDropdownAssiettes').classList.add('disabled');
            document.getElementById('navbarDropdownCompos').classList.add('disabled');
            document.getElementById('navbarDropdownCave').classList.add('disabled');
            document.getElementById('fournisseurbutton').classList.add('disabled');
            document.getElementById('navbarDropdownCaveListing').classList.add('disabled');

        }
    }, function(error) {
        console.log(error);
    });
};

window.addEventListener('load', function() {
    initApp();
});


openLogPage = function() {
    if(document.getElementById('compteButton').textContent === 'Se deconnecter'){
        firebase.auth().signOut().then(function() {
            window.open("/index.html","_self");
            showalert("Vous avez été déconnecté","alert-success")
        }).catch(function(error) {
            // An error happened.
        });
    }else{
        window.open("./auth.html","_self");
    }
};

function showalert(message,alerttype) {

    $('#alert_placeholder').append('<div id="alertdiv" class="alert ' +  alerttype + '"><a class="close" data-dismiss="alert">×</a><span>'+message+'</span></div>')

    setTimeout(function() { // this will automatically close the alert and remove this if the users doesnt close it in 5 secs


        $("#alertdiv").remove();

    }, 5000);
}
