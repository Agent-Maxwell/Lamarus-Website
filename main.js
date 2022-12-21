const apiUrl = 'https://api.atlauncher.com/v1/pack/LamarusComposite'
fetch(apiUrl)
  .then( (data) => console.log(data.json()))
  .then( (version) => generateHtml(version))
  
const generateHtml = (data) => {
  console.log(data)
  const newHtml = `
    <div class="name">${data.name}</div>
  `
  const packInformationDiv = document.querySelector('.packInformation')
  packInformationDiv.innerHTML = newHtml;
}