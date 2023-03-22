(function() {
  emailjs.init('Sqv9uE2Y6KuauFhQX');
})();
window.onload = function() {
  document.getElementById('form').addEventListener('submit', function(event) {
      event.preventDefault();
      this.contact_number.value = Math.random() * 100000 | 0;
      emailjs.sendForm('service_pomt37t', 'template_yzadocs', this)
          .then(function() {
            alert("Success!")
          }, function(error) {
            alert("Error!")
          });
  });
}