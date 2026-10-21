function countX(arr){
let count=0;
    for(let i=0;i<arr.length;i++){
        for(let j=0;j< arr[i].length;j++){
            if (arr[i][j]=="X" || arr[i][j]=="x" ){
                count++
            }
        }
    }
          return count;
}

console.log(countX([
    ["s","f","h","x","f"],
     ["s","f","h","x","f"],
     ["s","f","h","x","f"],
     ["s","f","h","x","f"],
    ["s","f","h","x","f"]]
     ));



