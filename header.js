// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Get elements
  const menuToggle = document.querySelector('.kb-menu-toggle');
  const nav = document.querySelector('.kb-nav');
  const navLinks = document.querySelectorAll('.kb-nav-link');

  // Toggle mobile menu
  menuToggle?.addEventListener('click', function() {
    this.classList.toggle('active');
    nav?.classList.toggle('active');
    
    // Toggle aria-expanded
    const isExpanded = this.classList.contains('active');
    this.setAttribute('aria-expanded', isExpanded);
  });

  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
    const isClickInside = nav?.contains(event.target as Node) || 
                         menuToggle?.contains(event.target as Node);
    
    if (!isClickInside && nav?.classList.contains('active')) {
      nav.classList.remove('active');
      menuToggle?.classList.remove('active');
      menuToggle?.setAttribute('aria-expanded', 'false');
    }
  });

  // Close menu when clicking a link (mobile)
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      nav?.classList.remove('active');
      menuToggle?.classList.remove('active');
      menuToggle?.setAttribute('aria-expanded', 'false');
    });
  });

  // Handle escape key
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && nav?.classList.contains('active')) {
      nav.classList.remove('active');
      menuToggle?.classList.remove('active');
      menuToggle?.setAttribute('aria-expanded', 'false');
    }
  });
});