// Page initialization
window.addEventListener('load', () => {
  window.scrollTo(0, 0);
  
  const homeLink = document.querySelector('.nav-links a[href="#home"]');
  if (homeLink) homeLink.classList.add('active');
});

// Prevent browser scroll restoration
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

// Scroll reveal for sections
const sections = document.querySelectorAll("section");
const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.15 }
);

sections.forEach(section => {
  section.style.opacity = 0;
  section.style.transform = "translateY(50px)";
  section.style.transition = "all 0.7s ease";
  revealObserver.observe(section);
});

// Mobile nav toggle
const mobileToggle = document.querySelector('.mobile-toggle');
const navLinks = document.querySelector('.nav-links');

if (mobileToggle) {
  mobileToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    const spans = mobileToggle.querySelectorAll('span');
    if (navLinks.classList.contains('active')) {
      spans[0].style.transform = 'rotate(45deg) translateY(8px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translateY(-8px)';
    } else {
      spans.forEach(span => {
        span.style.transform = 'none';
        span.style.opacity = '1';
      });
    }
  });

  // Close menu on link click
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      mobileToggle.querySelectorAll('span').forEach(span => {
        span.style.transform = 'none';
        span.style.opacity = '1';
      });
    });
  });
}

// Update active nav link on scroll
const navLinksArray = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (window.pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });

  navLinksArray.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href')?.includes(current) && current) {
      link.classList.add('active');
    }
  });
});

// Contact form
const contactForm = document.getElementById('contactForm');
const toast = document.getElementById('toast');
const BACKEND_URL = 'https://portfolio-backend-eta-ivory-75.vercel.app/api/contact';

function showToast(message, type) {
  const toastIcon = toast.querySelector('.toast-icon');
  const toastMessage = toast.querySelector('.toast-message');

  toast.classList.remove('success', 'error', 'show');
  toastMessage.textContent = message;
  toast.classList.add(type);

  setTimeout(() => toast.classList.add('show'), 100);
  setTimeout(() => toast.classList.remove('show'), 5000);
}

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const formData = new FormData(contactForm);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message')
    };

    submitBtn.classList.add('loading');
    submitBtn.disabled = true;

    try {
      const response = await fetch(BACKEND_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (response.ok) {
        showToast(`Thank you ${data.name}! Your message has been sent.`, 'success');
        contactForm.reset();
      } else {
        throw new Error(result.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      showToast(error.message || 'Failed to send message. Please try again.', 'error');
    } finally {
      submitBtn.classList.remove('loading');
      submitBtn.disabled = false;
    }
  });
}

// Project card hover effect
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mouseenter', () => card.style.zIndex = '10');
  card.addEventListener('mouseleave', () => card.style.zIndex = '1');
});

// Typing effect for hero subtitle
const subtitle = document.querySelector('.subtitle');
if (subtitle) {
  const text = subtitle.textContent;
  subtitle.textContent = '';
  let i = 0;
  
  const typeWriter = () => {
    if (i < text.length) {
      subtitle.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 50);
    }
  };
  
  setTimeout(typeWriter, 500);
}
