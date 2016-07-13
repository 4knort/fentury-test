(function() {
  //destroying placeholder
  var input = document.querySelector('.form-input');
  var placeholder;

  input.addEventListener('focus', function(event) {
    var el = event.target;
    placeholder = el.getAttribute('placeholder') 
    el.setAttribute('placeholder', '');
  })

  input.addEventListener('blur', function(event) {
    var el = event.target;
    el.setAttribute('placeholder', placeholder)
  })

})()