// When html page is loaded, then check sessionStorage: if ageVerified is false or not existing then show Modal Form 
$(document).ready(function() {
    let ageVerified = JSON.parse(sessionStorage.getItem("ageVerified"));
    if(!ageVerified){
        ageVerified = false;
        sessionStorage.setItem("ageVerified", JSON.stringify(ageVerified));
        $('#staticBackdrop').modal('show');
    }
});

$(window).on('load',function(){
    filDayCombo();
    filYearCombo();
});

//Change sessionStorage:ageVerified to true // sessionStorage wil be cleared after browser restarts
$(document).on("click", "#buttonAgeCheck", function(){
    let buttonContinue = document.getElementById("buttonContinue");
    // opbouwen opgegeven leeftijd
    let enterdAge = getAge(document.getElementById("ageYear").value +"/" + document.getElementById("ageMonth").value +"/" + document.getElementById("ageDay").value);
    let minimumAge = 18;

    if(enterdAge<minimumAge) {
        buttonContinue.innerText="Sorry to young";
    } else {
        ageVerified = true;
        sessionStorage.setItem("ageVerified", JSON.stringify(ageVerified));
        buttonContinue.innerText="Welkom";
    }
});

$(document).on("click", "#buttonModal", function(){
    let buttonContinue = document.getElementById("buttonContinue");
    ageVerified = false;
    sessionStorage.setItem("ageVerified", JSON.stringify(ageVerified));
    buttonContinue.innerText="Leave";
    $('#staticBackdrop').modal('show');
    $("#ageDay").val('01');
    $("#ageMonth").val('01');
    $("#ageYear").val(currentYear());
});

$(document).on("click", "#buttonContinue", function(){
    let ageVerified = JSON.parse(sessionStorage.getItem("ageVerified"));
    if(!ageVerified){
        window.location.replace("http://www.google.com");
    } else {
        $('#staticBackdrop').modal('hide');
    }
});

//Function for calculating age
function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}
// console.log('age: ' + getAge("2004/07/05"));

//Function for filling dropdown elements
function filDayCombo(){
    $('#ageDay').empty()
    for (let i = 1; i < 32; i++) {
        let val=i;
        if(i<10){
            val= "0" + i;
        } 
        textnode2=document.getElementById("ageDay");
        let op = new Option();
        op.value = val;
        op.text = val;
        textnode2.options.add(op);
    }
}

function currentYear() {
    let vandaag = new Date()
    return vandaag.getFullYear();
}

function filYearCombo(){
    $('#ageYear').empty()
    let baseYear =currentYear();
    for(i=baseYear; baseYear-100 < i; i--) {
        textnode2=document.getElementById("ageYear");
        let op = new Option();
        op.value = i;
        op.text = i;
        textnode2.options.add(op);
    }
}