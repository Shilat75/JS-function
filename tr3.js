//q3

let family = { parents: {},
               children: [ {name: "Ali"},
                 {name: "Lea"}, 
                 {name: "Mona"} ] };


   function print_third_child(obj) {

    console.log(obj.children[2].name);
   }          

   print_third_child(family);