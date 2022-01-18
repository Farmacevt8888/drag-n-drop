const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart', dragstart) // передаем событие начала перетаскивания
item.addEventListener('dragend', dragend) // передаем событие конца перетаскивания

for (const placeholder of placeholders) {
   placeholder.addEventListener('dragover', dragover)
   placeholder.addEventListener('dragenter', dragenter)
   placeholder.addEventListener('dragleave', dragleave)
   placeholder.addEventListener('drop', dragdrop)
}

function dragstart(event) {
   event.target.classList.add('hold') // добавляем класс перетаскиваемому элементу
   setTimeout(() => event.target.classList.add('hide'), 0) // класс для исчезания элемента

}

function dragend(event) {
   event.target.classList.remove('hold', 'hide') // убираем класс после завершения пертаскивания
   // event.target.className = 'item'  - убирает все классы, добавляя только указанный
}

function dragover(event) {
  event.preventDefault()
}

function dragenter(event) {
   event.target.classList.add('hovered')
}

function dragleave(event) {
   event.target.classList.remove('hovered')
}

function dragdrop(event) {
   event.target.classList.remove('hovered')
   event.target.append(item)
}





