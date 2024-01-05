window.addEventListener('mousemove', function(e) {
    var header = document.getElementById('header');
    if (e.clientY <= 80) { 
        header.classList.remove('hide');
    } else {
        setTimeout(function() {
        header.classList.add('hide');
        }, 3000); 
    }
});