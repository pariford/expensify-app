const book = {
  title: "Ego is the enemy",
  author: "Ryan Holiday",
  publisher: {
    name: "Penguin"
  }
};

console.log(book);
//Object destructuring along with default values
const { name: publisherName = "Self-Published" } = book.publisher;

console.log(publisherName);

//Array Destructuring

const menuArray = ["Coffee(Hot)", "₹250", "₹200", "₹300"];

//const [menu, large, medium, extraLarge] = menuArray;
//Another way to do the same thing.You can omit some objects/values if you dont want them to be destructured
const [menu, , medium, extraLarge] = menuArray;

console.log(`The price of ${menu} is ${medium}`);
