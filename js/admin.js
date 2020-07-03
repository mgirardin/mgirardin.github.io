(function ($) {
    "use strict";


    // loader
    var loader = function() {
    setTimeout(function() { 
        if($('#loader').length > 0) {
        $('#loader').removeClass('show');
        }
    }, 1);
    };
    loader();

    /*==================================================================
    [ Focus input ]*/
    $('.input100').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })    
    })
  
  
    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    
})(jQuery);

document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    if(username == "" || password == "" ){
        return;
    }
    document.getElementById('loader').classList.add("show");
    document.getElementById('login-container').style.display = "none";    
    var xhr = new XMLHttpRequest();
    xhr.open("POST", 'https://api.matheusgirardin.com/v1/signin', true);

    //Send the proper header information along with the request
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function() { // Call a function when the state changes.
        if (this.readyState !== XMLHttpRequest.DONE) {
            return;
        }  
        if (this.status === 200) {
            window.location.href = "index.html"
        }
        else{
            document.getElementById('loader').classList.remove("show");
            document.getElementById('login-container').style.display = "block";    

        } 
    }
    xhr.send(JSON.stringify({"login": username, "passwd": password}));
  })

function login(word){
    alert(word);
}