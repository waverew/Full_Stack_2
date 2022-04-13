function compareToTen(x){
    return new Promise ((resolve, reject) => {
        if (x>10){
            resolve(x+" is bigger than 10");
        }
        else{
            reject(x+" is less than 10(");
        }
    })
}
compareToTen(9)
.then((result) => console.log(result))
.catch((error) => console.error(error));