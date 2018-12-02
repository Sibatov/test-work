$('form').on('beforeSubmit', function(){
    alert('Работает!');
    return false;
});