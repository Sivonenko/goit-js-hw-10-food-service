
const switchInput = document.querySelector('.theme-switch__toggle');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const changeTheme = currentTheme => document.body.classList.add(currentTheme);
const currentLocalStorage = () => localStorage.getItem('currentTheme');
const changeLocalStorage = currentTheme =>
  localStorage.setItem('currentTheme', currentTheme);
const addChecked = () => (switchInput.checked = true);
const removeCheked = () => (switchInput.checked = false);

const enableDark = () => {
  currentTheme = Theme.DARK;
  document.body.classList.remove(Theme.LIGHT);
  changeTheme(currentTheme);
  changeLocalStorage(currentTheme);
  addChecked();
};

const activateWhite = () => {
  currentTheme = Theme.LIGHT;
  document.body.classList.remove(Theme.DARK);
  changeTheme(currentTheme);
  changeLocalStorage(currentTheme);
  removeCheked();
};

if (!localStorage.hasOwnProperty('currentTheme')) {
  activateWhite();
}

changeTheme(currentLocalStorage());

if (currentLocalStorage() === Theme.DARK) {
  addChecked();
}

switchInput.addEventListener('change', event => {
  currentLocalStorage() === Theme.LIGHT ? enableDark() : activateWhite();
});


