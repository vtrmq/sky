// theme toggle
const getColorPreference = () => {
  if (localStorage.getItem('bloggerco-theme'))
    return localStorage.getItem('bloggerco-theme');
  else
    return 'dark';
}

const theme = {
  value: getColorPreference()
}

const reflectPreference = () => {
  if (theme.value === "dark") {
    document.firstElementChild.classList.add(theme.value);
  } else {
    document.firstElementChild.classList.remove("dark");
  }
}

// set early so no page flashes
reflectPreference()
