var promise1 = "bebra";
var promise2 = 42;
var promise3 = new Promise((resolve, reject) =>{resolve("neo why cyberpunk 2077 is so bad")});
Promise.all([promise1, promise2, promise3]).then((x)=> {
    console.log(x);
});
