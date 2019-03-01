import { person, sayHello } from './lib';
console.timeLog(person.name);
console.log(sayHello('Tyroo'));

// async label auto returns promise
async function getPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  return data;
}

getPosts().then(posts => console.log(posts));
