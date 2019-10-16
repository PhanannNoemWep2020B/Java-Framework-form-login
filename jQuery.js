$(document).ready(function(){
    $('button').on('click', function(){
        let username = $('#user').val();
        let password = $('#pwd').val();
        isUserNotEmpty(username);
        isPassWordNotEmpty(password);
        checkLengthInput(username);
        checkLengthInput(password);
 
    });
});

function error(e){
    $(e).css('border', '1px solid red');
    $('.alert-success').fadeOut(3000);
}
function success(s){
    $(s).css('border', '1px solid green');
    $('.alert-success').fadeIn(3000);
}

function isUserNotEmpty(username){
    if(username == "" || username.length <= 3){
        error('#user');
        $('.alert-success').fadeIn(3000);
    }else{
        success('#user');
        $('.alert-success').fadeIn(3000);
    }
}

function isPassWordNotEmpty(password){
    if(password == "" || password.length <= 3){
        $('.alert-success').fadeOut(3000);
    }else{
        $('.alert-success').fadeIn(3000);
    }
}

function checkLengthInput(c){
    if(c.length <= 3){
        $('.alert-success').fadeOut(3000);
    }else{
        $('.alert-success').fadeIn(3000);
    }
}