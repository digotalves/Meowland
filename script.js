
const cats = fetch('https://cataas.com/api/cats?limit=10&skip=0')
.then((res) => res.json())
.then((data) => console.log(data))

const tags = 'https://cataas.com/api/tags'


const selectElement = document.querySelector('#list-cat');

fetch(tags)
  .then(response => response.json())
  .then(data => {
    data.forEach(item => {
      const optionElement = document.createElement('option');
      optionElement.value = item.id;
      optionElement.textContent = item;
      selectElement.appendChild(optionElement);
    });
  });

