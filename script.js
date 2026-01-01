// Ensure page loads at home section
window.addEventListener('load', () => {
  // Scroll to top on page load
  window.scrollTo(0, 0);
  
  // Set home as active in navigation
  const homeLink = document.querySelector('.nav-links a[href="#home"]');
  if (homeLink) {
    homeLink.classList.add('active');
  }
});

// Prevent scroll restoration
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

// Smooth scroll reveal animation
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.15 });

sections.forEach(section => {
  section.style.opacity = 0;
  section.style.transform = "translateY(50px)";
  section.style.transition = "all 0.7s ease";
  observer.observe(section);
});

// Mobile navigation toggle
const mobileToggle = document.querySelector('.mobile-toggle');
const navLinks = document.querySelector('.nav-links');

if (mobileToggle) {
  mobileToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Animate hamburger icon
    const spans = mobileToggle.querySelectorAll('span');
    if (navLinks.classList.contains('active')) {
      spans[0].style.transform = 'rotate(45deg) translateY(8px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translateY(-8px)';
    } else {
      spans[0].style.transform = 'none';
      spans[1].style.opacity = '1';
      spans[2].style.transform = 'none';
    }
  });

  // Close menu when clicking on a link
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      const spans = mobileToggle.querySelectorAll('span');
      spans[0].style.transform = 'none';
      spans[1].style.opacity = '1';
      spans[2].style.transform = 'none';
    });
  });
}

// Active navigation link based on scroll position
const navLinksArray = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (window.pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });

  navLinksArray.forEach(link => {
    link.classList.remove('active');
    const href = link.getAttribute('href');
    if (href && href.includes(current) && current !== '') {
      link.classList.add('active');
    }
  });
});

// Contact form submission with animations
const contactForm = document.getElementById('contactForm');
const toast = document.getElementById('toast');

// Your backend URL
const BACKEND_URL = 'https://portfolio-backend-eta-ivory-75.vercel.app/api/contact';

function showToast(message, type) {
  const toastIcon = toast.querySelector('.toast-icon');
  const toastMessage = toast.querySelector('.toast-message');

  // Remove previous classes
  toast.classList.remove('success', 'error', 'show');

  // Set new content
  toastMessage.textContent = message;
  toast.classList.add(type);

  // Show toast after a brief delay
  setTimeout(() => {
    toast.classList.add('show');
  }, 100);

  // Hide after 5 seconds
  setTimeout(() => {
    toast.classList.remove('show');
  }, 5000);
}

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    // Show loading state
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;

    try {
      // Send to your backend
      const response = await fetch(BACKEND_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message
        })
      });

      const data = await response.json();

      if (response.ok) {
        showToast(`Thank you ${name}! Your message has been sent successfully.`, 'success');
        contactForm.reset();
      } else {
        throw new Error(data.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error:', error);
      showToast('Failed to send message. Please try again later.', 'error');
    } finally {
      // Remove loading state
      submitBtn.classList.remove('loading');
      submitBtn.disabled = false;
    }
  });
}

// Add hover effect to project cards
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.zIndex = '10';
  });
  
  card.addEventListener('mouseleave', function() {
    this.style.zIndex = '1';
  });
});

// Add typing effect to hero subtitle (optional enhancement)
const subtitle = document.querySelector('.subtitle');
if (subtitle) {
  const text = subtitle.textContent;
  subtitle.textContent = '';
  let i = 0;
  
  function typeWriter() {
    if (i < text.length) {
      subtitle.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 50);
    }
  }
  
  // Start typing effect after a short delay
  setTimeout(typeWriter, 500);
}
