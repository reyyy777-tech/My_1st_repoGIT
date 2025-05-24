document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const menuBtn = document.querySelector('.menu-btn');
  const navLinks = document.querySelector('.nav-links');

  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      navLinks.classList.toggle('active');
      menuBtn.classList.toggle('active');
    });
  }

  // Close mobile menu when clicking outside of .navbar
  document.addEventListener('click', (e) => {
    if (
      menuBtn &&
      navLinks &&
      navLinks.classList.contains('active') &&
      !e.target.closest('.navbar')
    ) {
      navLinks.classList.remove('active');
      menuBtn.classList.remove('active');
    }
  });

  // Set active link in navbar
  const currentPage = location.pathname.split('/').pop();
  document.querySelectorAll('.nav-links a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active-link');
    }
  });

  // Exercise Filter (uses .active class)
  const muscleGroupSelect = document.getElementById('muscleGroup');
  const exerciseCards = document.querySelectorAll('.exercise-card');

  if (muscleGroupSelect && exerciseCards.length) {
    const filterExercises = () => {
      const sel = muscleGroupSelect.value.toLowerCase();
      exerciseCards.forEach(card => {
        const grp = card.dataset.muscle.toLowerCase();
        if (sel === 'all' || grp === sel) {
          card.classList.add('active');
        } else {
          card.classList.remove('active');
        }
      });
    };

    muscleGroupSelect.addEventListener('change', filterExercises);
    // Initialize on load
    filterExercises();
  }
});


