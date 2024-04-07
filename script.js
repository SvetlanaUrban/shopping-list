const input = document.querySelector(`#input`);
const container = document.querySelector(`#items`);

input.addEventListener(`keydown`, function(event) {
    if (event.key == `Enter`) {    
      const inputText = input.value;   

      const shoppingList = document.createElement(`div`);
      shoppingList.textContent = inputText;
         
      shoppingList.addEventListener(`click`, function () {
      shoppingList.classList.toggle(`done`);   
    });
      container.append(shoppingList);
      input.value =``;
    }
  });    
       

 





/* Новые элементы должны добавляться в список по нажатию на Enter */

/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */
