function validateForm(){
    let x = document.forms["myForm"]["finame"].value;
    if(x==""){
        alert("Name must be filled out");
        return false;
    }
}