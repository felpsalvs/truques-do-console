const dogs = [{ name: 'Snickers', age: 2}, { name: 'hugo', age: 8 }];

function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#bada55';
    p.style.fontSize = '50px';
}

//regular
console.log('hello');

//interpolado
console.log('Hello I am a %s string!', '💩');

//estilo
console.log('%c I am some great text', 'font-size:50px; background:red; text-shadow: 10px 10px 0 blue')

//atenção
console.warn('OH NOOO');

//erro
console.error('Shit!');

//informação
console.info('Crocodilos comem 3-4 pessoas por ano!');

//teste
const p = document.querySelector('p');

console.assert(p.classList.contains('ouch'), 'That is wrong!');

//limpando
console.clear();

//vendo os elementos da DOM
console.log(p);
console.dir(p);

console.clear();

//juntando os grupos
dogs.forEach(dog =>{
    console.groupCollapsed(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age * 7} dog years old`);
    console.groupEnd(`${dog.name}`);
});

//contando

console.count('Wes');
console.count('Wes');
console.count('Steve');
console.count('Steve');
console.count('Wes');
console.count('Steve');
console.count('Wes');
console.count('Steve');
console.count('Steve');
console.count('Steve');
console.count('Steve');
console.count('Steve');