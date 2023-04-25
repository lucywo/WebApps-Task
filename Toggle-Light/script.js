const btn = document.getElementById('toggle-btn');
const nightBtn = document.getElementById('night-mode-btn');
const body = document.body;
const title = document.getElementById('title');

btn.addEventListener('click', function() {
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
    title.textContent = 'Good Night';
    nightBtn.style.display = 'none';
    btn.classList.add('dark-mode');
  } else {
    title.textContent = 'Good Morning';
    nightBtn.style.display = 'flex';
    btn.classList.remove('dark-mode');
  }
});

nightBtn.addEventListener('click', function() {
  body.classList.add('dark-mode');
  title.textContent = 'Good Night';
  nightBtn.style.display = 'none';
  btn.classList.add('dark-mode');
});
