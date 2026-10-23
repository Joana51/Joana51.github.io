const languageButton = document.getElementById('language');
let language = 'es';
languageButton.addEventListener('click', () => {
  language = language === 'es' ? 'en' : 'es';
  document.documentElement.lang = language;
  document.querySelectorAll('[data-es][data-en]').forEach(element => {
    element.textContent = element.dataset[language];
  });
  languageButton.textContent = language === 'es' ? 'EN' : 'ES';
});
document.getElementById('year').textContent = new Date().getFullYear();
