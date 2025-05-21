// Highlight current nav item dynamically (in case you want)
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('nav a');
  const currentPage = location.pathname.split('/').pop();

  navLinks.forEach(link => {
    if(link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });

  // Pause other audios when one plays (for story page)
  const audios = document.querySelectorAll('audio');
  audios.forEach(audio => {
    audio.addEventListener('play', () => {
      audios.forEach(otherAudio => {
        if(otherAudio !== audio) {
          otherAudio.pause();
        }
      });
    });
  });

  // Simple contact form validation & message
  const contactForm = document.getElementById('contactForm');
  const formMessage = document.getElementById('formMessage');

  if(contactForm) {
    contactForm.addEventListener('submit', e => {
      e.preventDefault();

      if(!contactForm.checkValidity()) {
        formMessage.textContent = 'Please fill out all fields correctly.';
        formMessage.style.color = 'red';
        return;
      }

      // For demo: just show success message
      formMessage.style.color = 'green';
      formMessage.textContent = 'Thank you for your message! We will get back to you soon.';

      contactForm.reset();
    });
  }
});
