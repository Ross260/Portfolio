// changer le style de la navbar pendant le scroll
window.addEventListener('scroll', function() {
    let navbar = document.querySelector('.navbar');
    let scrollTop = window.scrollY;

    if (scrollTop > 100) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});

 // JavaScript pour l'animation de texte typé
 document.addEventListener('DOMContentLoaded', function () {
      const typedStrings = ["Frontend", "Backend", "Full Stack"];
      const typedElement = document.querySelector('.leH1');
      
      if (typedElement) {
        let charIndex = 0;
        let stringIndex = 0;
        let typingEffect = setInterval(type, 250);

        function type() {
          if (stringIndex === typedStrings.length) {
            stringIndex = 0;
          }

          if (charIndex < typedStrings[stringIndex].length) {
            typedElement.textContent += typedStrings[stringIndex].charAt(charIndex);
            charIndex++;
          } else {
            charIndex = 0;
            stringIndex++;
            typedElement.textContent = '';
          }
        }
      }
    });


//-----------------------------------------------------------------------------------------

    // Ajouter un événement de soumission du formulaire
  //configuration
  document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Empêcher le rechargement de la page

    // Récupérer les valeurs du formulaire
    const nom = document.getElementById('name').value;
    const prenom = document.getElementById('fisrt_name').value;
    const email = document.getElementById('email').value;
    const numero = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    const btn = document.getElementById('button');

    btn.value = 'Envoie en cours...';


    // code permettant de commencer à utiliser EmailJs
    // (function(){
    //     emailjs.init({
    //       publicKey: "EEDry2HRfDUVp5Lgc",
    //     });
    // })();

    //OU 
    
    emailjs.init('EEDry2HRfDUVp5Lgc');
    
    // Configuration de l'email à envoyer via EmailJS
    const templateParams = {
      from_name: nom,
      from_first_name: prenom,
      from_email: email,
      from_numero:numero,
      message: message
    };

    // Envoyer l'email via EmailJS
    emailjs.send('service_pxurp4g', 'template_w53adua', templateParams).then(
      (response) => {
        btn.value = 'Envoyé';
        console.log('SUCCÈS!', response.status, response.text);
      },
      (error) => {
        btn.value = 'Envoyé';
        console.log('ÉCHEC...', error);
      },
    );

  });
