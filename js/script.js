console.log("Hello World");

//array
var colors = ['red', 'orange', 'blue', 'green', 'yellow', 'pink'];

// console.log(colors);

//access element by index 1
// console.log(colors[1]);

// .length()
// console.log(colors.length);

var lastColor = colors[colors.length-1];
// console.log(lastColor);

// .forEach()
colors.forEach(function(item, index){
  console.log(index + ' : ' + item);
});


// Array.isArray()
var trueOrFalse = Array.isArray(['red', 'blue', 'orange']);
// console.log(trueOrFalse);

var oneItemArray = ['one'];
// console.log(Array.isArray(oneItemArray));

// .push()
oneItemArray.push('two');
// console.log(oneItemArray);

oneItemArray.push(3);
// console.log(oneItemArray);

// .pop()
oneItemArray.pop();
// console.log(oneItemArray);


//.pop() returns the last item
var returnedItem = oneItemArray.pop();
// console.log(returnedItem);

// .unshift()
colors.unshift('greenish');
// console.log(colors);

// .shift()
colors.shift();
// console.log(colors);

//.shift returns item from the array

var shiftedColor = colors.shift();
// console.log(shiftedColor);
// console.log(colors);

// .indexOf()
var colorPosition = colors.indexOf('blue');
// console.log(colorPosition);

// .lastIndexOf()
colors.push('green', 'violet', 'blue', 'pink');
// console.log(colors);

var lastBlue = colors.lastIndexOf('blue');
// console.log(lastBlue);

// removing items to an array using .splice()
var removeItem = colors.splice(2, 1);
// console.log(colors);
// console.log(removeItem);
// console.log(colors);
var removeItems = colors.splice(3, 2);
// console.log(colors);
console.log(removeItems);

//adding items to an array using .splice()
// console.log(colors);
var addItems = colors.splice(1, 0, 'orange', 'yellow', 'green');
// console.log(colors);
// console.log(addItems);

//removing then adding items to an array using splice
// console.log(colors);
var removeAndAdd = colors.splice(5, 1, 'purply');
// console.log(colors);
// console.log(removeAndAdd);

colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

// var blueIndex = colors.splice();
console.log(colors);
var newColors = colors.slice();
console.log(newColors);

var colorSlice = colors.slice(1, 3);
console.log(colorSlice);

// .reverse();
var reversed = colors.reverse();
console.log(reversed);

//sort();
var numbers = [1, 20, 10, 2, 01, 22, 3, 4.5];
console.log(numbers.sort());

var words = ['word', 'Word', '1 Word', '2 Words'];
console.log(words.sort());

// comparison sorting
var numbers = [2, 4, 5, 1, 3];
numbers.sort(function(a, b){
  return a - b;
})
console.log(numbers);
