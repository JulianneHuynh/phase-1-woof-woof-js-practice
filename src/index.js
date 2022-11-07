fetch("http://localhost:3000/pups")
  .then(res => res.joson())
  .then((dogArray) => renderDogs(dogArray));
  
function renderDogs(dogs) {
  const dogBar = document.createElement("span")
  dogBar.textContent = 'dog-bar' 
}
  
