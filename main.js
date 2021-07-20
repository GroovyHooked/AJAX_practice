var form = $('#userForm');
var url = 'http://localhost/TutoAjax/123user.json';
var errorSpan = $('#error');
var successCallBack = function (response){
    console.log(response);
}
var errorCallBack = function (response){
    console.log(response);
    errorSpan.append(response.responseText);
}
var getOptions ={
    method: 'POST',
    async: true,
    cache: false,
    success: successCallBack,
    error: errorCallBack
}
form.on('submit', function (e){
    e.preventDefault();
    getOptions.data = $(this).serialize();
    $.ajax(url, getOptions);
})