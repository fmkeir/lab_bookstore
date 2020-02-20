document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);

  const deleteButton = document.createElement('button');
  const title = document.querySelector('h1')
  deleteButton.textContent = "DELETE EVERYTHING"
  title.appendChild(deleteButton)
  deleteButton.addEventListener('click', handleButtonClick)
})

const handleFormSubmit = function() {
  event.preventDefault();
  // console.log(event.target.title.value);
  const newBookItem = document.createElement('li');
  const list = document.querySelector('#reading-list')
  list.classList.add('container')
  const title = document.createElement('h2')
  const author = document.createElement('h3')
  const category = document.createElement('h4')
  title.textContent = `${event.target.title.value}`
  author.textContent = `${event.target.author.value}`
  category.textContent = `${event.target.category.value}`
  newBookItem.appendChild(title)
  newBookItem.appendChild(author)
  newBookItem.appendChild(category)
  list.appendChild(newBookItem)
  document.getElementById('new-item-form').reset();

}
const handleButtonClick = function() {
  const list = document.querySelector('#reading-list')
  while (list.firstChild) {
    list.removeChild(list.lastChild);
  }
}
