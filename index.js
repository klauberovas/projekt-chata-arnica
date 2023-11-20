// https://dev.to/ananyaneogi/create-a-dark-light-mode-switch-with-css-variables-34l8
// vybrání divu s přepínačem
const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]',
);

//fce pro přepínání
const switchTheme = (e) => {
  if (e.target.checked) {
    ////checked true = použijí se barvy z dark
    document.documentElement.setAttribute('data-theme', 'dark');
    // použijí se původně nastavené hodnoty
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }
};

// Posluchač navěšený na div při změně se spustí fce
toggleSwitch.addEventListener('change', switchTheme, false);
