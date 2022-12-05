// 1) console.log() 
// Mainly used to log(print) the output to the console. 
// We can put any type inside the log(), be it a string, array, object, boolean etc. 
console.log('abc');
console.log(1);
console.log(true);
console.log(null);
console.log(undefined);
console.log([1, 2, 3, 4]); // array inside log
console.log({a:1, b:2, c:3}); // object inside log

// 2) console.error() 
// Used to print error message on console. Useful while testing. Error is highlighted in red color on console.
console.error("This is a simple error, Not occurred but it is coded");

// 3) console.warn() 
// Used to print warnings. Warnings are highlighted in yellow color.
console.warn("This is a warning, Not given but it is coded too!!");

// 4) console.clear() 
// Used to clear the console. The console will be cleared, in case of Chrome a simple overlayed text will be printed 
// like : ‘Console was cleared’ while in Firefox no message is returned. 
console.clear();

// 5) & 6) console.time() and console.timeEnd()
// Whenever we want to know the amount of time spend by a block or a function, we can make use of
// the time() and timeEnd() methods provided by the JavaScript console object. They take a label
// which must be same, and the code inside can be anything( function, object, simple console). 

console.time('abc');    // We are using 'abc' as a label
 let fun =  function(){
     console.log('fun is running');
 }
 let fun2 = function(){
     console.log('fun2 is running..');
 }
 fun(); // calling fun();
 fun2(); // calling fun2();
console.timeEnd('abc');

// In the above code snippet, we can see that the label is ‘abc’ which is same for both the time() and
// the timeEnd() method. If we increase the amount of code inside the block defined by these
// methods, then the time will increase. It is also worth remembering that the time returned to the
// console will be in milliseconds and might be different each time we refresh the page. 

// 7) console.table()
// This method allows us to generate a table inside a console. 
// The input must be an array or an object which will be shown as a table. 

console.table({'a':1, 'b':2});

// 8) console.count()
// This method is used to count the number that the function hit by this counting method. 

for(let i=0;i<5;i++){
    console.count(i);
}

// Output of above js code as seen in console
// 0: 1    console_methods.js:56 
// 1: 1    console_methods.js:56 
// 2: 1    console_methods.js:56 
// 3: 1    console_methods.js:56 
// 4: 1    console_methods.js:56

// 9) & 10) console.group() and console.groupEnd()
// group() and groupEnd() methods of the console object allows us to group contents in a separate
// block, which will be indented. Just like the time() and the timeEnd() they also accepts label,
// again of same value. 

console.group('simple');   // 'simple' is the label here to signify the group start
  console.warn('warning!');
  console.error('error here');
  console.log('vivi vini vici');
console.groupEnd('simple');    // group ends here
console.log('new section');

// 11) Custom console tags
// User can add Styling to the console logs in order to make logs Custom . The Syntax for it is to add
// the CSS styling as a parameter to the logs which will replace %c in the logs as shown in the
// example below . 

const spacing = '10px';
  const styles =
        `padding: ${spacing}; background-color: pink; color: yellow; font-style:
         italic; border: 1px solid black; font-size: 2em;`;
  console.log('%cPlease Open Console to see Magic!!', styles);

