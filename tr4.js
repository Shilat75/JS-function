//tr4


function Rever_String(arr){
    let Narr=[]
    for(let i=arr.length-1;i>=0;i--){
       Narr.push(arr[i]);
        
    }
    return Narr;
}

console.log( Rever_String([1,2,3,4]));