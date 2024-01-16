function onEnter(event) {
  if (event.key === 'Enter') {
    toDo();
    
  }
}
  
const result = JSON.parse(localStorage.getItem('result')) || [{
  name: 'make dinner',
  dueDate: '2022-12-22'
}, {
  name: 'wash dishes',
  dueDate: '2022-12-22'
}];

  render();

  function render() {
    let resultHTML = '';

    for (let i = 0; i < result.length; i++) {
      const todoObject = result[i];

      const {name, date} = todoObject;
      if (name === '' || date === '') {
        continue;
      } else {
      const html = `
        <div class="text">${name}</div>
        <div class="text">${date}</div>
        <button class="js-delete delete" onclick="
          result.splice(${i}, 1);
          render();
          saveToStorage();
        ">Delete</button>
      `;
      
      resultHTML += html;
      }
      
    }
    document.querySelector('.js-list')
      .innerHTML = resultHTML;

      
      

  }





  function toDo() {
    const inputElement = document.querySelector('.js-input');
    const name = inputElement.value;

    const dateElement = document.querySelector('.js-date');
    const date = dateElement.value;

    result.push({
      name,
      date
    })

    
  

    render();
    inputElement.value = '';
    dateElement.value = '';

    saveToStorage();
    
    
  }
  

  function saveToStorage() {
      localStorage.setItem('result', JSON.stringify(result));
  }
 