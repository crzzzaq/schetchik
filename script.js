let btn = document.querySelector('.addition__btn');
let input1 = document.querySelector('.addition__name1');
let name = document.querySelector('.purcashes__name');
let price = document.querySelector('.purcashes__price');
let input2 = document.querySelector('.addition__name2');
let category = document.querySelector('.purcashes__category');
let select = document.querySelector('.select');



btn.addEventListener('click', () => {
    let element = document.createElement('li');
    element.textContent = input1.value;
    name.append(element);
})

btn.addEventListener('click', () => {
    let element = document.createElement('li');
    element.className = 'price'
    element.textContent = input2.value;
    price.append(element);
})

btn.addEventListener('click', () => {
    let element = document.createElement('li');
    element.textContent = select.value;
    category.append(element);
})
