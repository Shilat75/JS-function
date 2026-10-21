

function countTypeOf(arr){

    let str=0;
    let num=0;
    let obj=0;
    let bol=0;
    let nul=0;

    for(let i=0;i<arr.length;i++){
        if((typeof(arr[i]))==="string"){
            str++;
        }
    }

   
  return str;

}

 console.log(countTypeOf(["jjii",232,"dfd"]));




// console.log(
//  Cars([{type: "Ali" , valu:100},
//                  {type: "Lea",valu:90}, 
//                  {type: "Mona",valu:80} ]

// ));


// function Cars(arr){
// let Narr=arr.filter((arr)=>{
//  return arr.valu>80;
// })
// let result= Narr.map((Narr)=>{
//     return Narr.type +":"+ Narr.valu
// })

// return result;

