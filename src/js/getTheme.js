export default function getTheme(){
  if(localStorage.getItem("theme") === null) {
    localStorage.setItem("theme", "moon-outline");
  }
}