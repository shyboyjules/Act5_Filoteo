document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
 document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
 
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
  
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
  
   
    alert('Thank you for your message! We will get back to you soon.');
    
    
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
  });
  