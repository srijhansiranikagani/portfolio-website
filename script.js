<script>

document.getElementById('yr').textContent = new Date().getFullYear();

const pages = document.querySelectorAll('.page');
const links = document.querySelectorAll('[data-page]');

function go(name){
  pages.forEach(p => p.classList.toggle('active', p.id === name));

  document.querySelectorAll('.nav-links a').forEach(a =>
    a.classList.toggle('active', a.dataset.page === name)
  );

  window.scrollTo({top:0, behavior:'smooth'});

  document.querySelector('.nav-links').classList.remove('open');
}

links.forEach(a =>
  a.addEventListener('click', e => {
    e.preventDefault();
    go(a.dataset.page);
  })
);

document.querySelector('.menu-toggle').addEventListener('click', () =>
  document.querySelector('.nav-links').classList.toggle('open')
);

</script>