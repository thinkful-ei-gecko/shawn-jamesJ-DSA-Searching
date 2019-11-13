//QUESTIONS:

//1A.)  How many steps would a binary search take to find 8 in sorted array [3, 5, 6, 8, 11, 12, 14, 15, 17, 18]?
//[3, 5, 6, 8, 11, 12, 14, 15, 17, 18]
//[3, 5, 6, 8]
//[6, 8]
//[8]
//4 steps required.


//1B.)  How many steps would a binary search take to find 16 in sorted array [3, 5, 6, 8, 11, 12, 14, 15, 17, 18]?
//Note: 16 not present in array.
//[3, 5, 6, 8, 11, 12, 14, 15, 17, 18]
//[12, 14, 15, 17, 18]
//[17, 18]
//[17, 18]  Loop exited as 16 is less than 17 which is the current math.floor value.  End of function, return -1
//4 steps required.

//3.)  Implement your algorithm to find a book whose Dewey and book title is provided.
//sample book:  TALKING TO ROBOTS
//dewey = 629.892
//6xx = Technology and Applied Science
//x2x =

//filter 10^3
//filter 10^2
//filter 10^1
//filter 10^-1
//filter 10^-2
//filter 10^-3


//3.)  Create a function to query a library.  You have title and dewey decimal.

const BST = require('./BST');

const library = [
  { author: 'Cowlishaw, Mike', dewey: '005.133', title: 'The REXX Language' },
  { author: 'Sams', dewey: '005.133', title: 'Teach Yourself C++ In 21 Days' },
  { author: 'Stroustrup., Bjarne', dewey: '005.133', title: 'The C++ Programming Language' },
  { author: 'Crockford, Douglas', dewey: '005.2762', title: 'JavaScript: The Good Parts' },
  { author: 'Flanagan, David', dewey: '005.2762', title: 'JavaScript: The Definitive Guide' },
  { author: 'Schmidt, Meinhard', dewey: '005.44684', title: 'Windows Vista for Dummies' },
  { author: 'Zondervan', dewey: '220.52081', title: 'NIV Study Bible' },
  { author:'Humphries, Russell, Dr.', dewey: '231.7652', title: 'Starlight and Time' },
  { author: 'Jane, Frederick Thomas', dewey: '623.82509051', title: 'Jane\'s Fighting Ships' },
  { author: 'Norris, Chuck', dewey: '796.8092', title: 'The Official Chuck Norris Fact Book' }
];

function trim(dewey, library){
  let trimmed = [];
  for(let i = 0; i < library.length; i++){
    if(library[i]['dewey'] === dewey){
      trimmed.push(library[i])
    }
  }
  return trimmed;
}

function findBook(title, library, start = 0, end = library[library.length-1]){
  let index = Math.floor(library.length/2)
  if(title === library[index]['title']){
    return library[index]
  }
  if(start > end){
    return -1
  }

  findBook(title, library, start, index--)
  findBook(title, library, index++, end)
}


// 4) Searching in BST

// 1) 14, 19, 15, 27, 25, 79, 90, 91, 89, 35
// 2) 8, 6, 5, 7, 10, 9, 11

// 5) Implement different tree traversals
let data = [25, 15, 50, 10, 24, 35, 70, 4, 12, 18, 31, 44, 66, 90, 22]


// node, left, right
function preOrder(bst) {
  if (!bst.left && !bst.right) {
    return [bst.key]
  }

  if (bst.left && bst.right) {
    return [bst.key, ...preOrder(bst.left), ...preOrder(bst.right)]
  }
  if (bst.left && !bst.right) {
    return [bst.key, ...preOrder(bst.left)]
  }
  if (!bst.left && bst.right) {
    return [bst.key, ...preOrder(bst.right)]
  }
}

// left, node, right
function inOrder(bst) {
  let inOrderArr = []
  // if (!bst.left && !bst.right) {
  //   inOrderArr = [...inOrderArr, bst.key]
  // }

  if (bst.left) {
    inOrderArr = [...inOrder(bst.left)]
  }

  if (bst.key) {
    inOrderArr = [...inOrderArr, bst.key]
  }
  
  if (bst.right) {
    inOrderArr = [...inOrderArr, ...inOrder(bst.right)]
  }

  return inOrderArr
}

// left, right, node
function postOrder(bst) {
  let postOrderArr = []
  // if (!bst.left && !bst.right) {
  //   inOrderArr = [...inOrderArr, bst.key]
  // }

  if (bst.left) {
    postOrderArr = [...postOrder(bst.left)]
  }
  
  if (bst.right) {
    postOrderArr = [...postOrderArr, ...postOrder(bst.right)]
  }

  if (bst.key) {
    postOrderArr = [...postOrderArr, bst.key]
  }

  return postOrderArr
}

//6.)  

/*
             Captain Picard
             /                \
    Commander Riker       Commander Data
      /         \               \
 Lt. Cmdr.   Lt. Cmdr.          Lt. Cmdr.
 Worf        LaForge            Crusher
   /                           /
Lieutenant                  Lieutenant
security-officer            Selar


OUTPUT:  Picard, Riker, Data, Worf, LaForge, Crusher, Sec off, Selar
            5     3       6     2       4         7        1      8
*/

let crew = [
  {key:5, value:'Captain Picard'}, 
  {key:3, value:'Commander Riker'},
  {key:6, value:'Commander Data'},
  {key:2, value:'Lt. Commander Worf'},
  {key:4, value:'Lt. Commander LaForge'},
  {key:7, value:'Lt. Commander Crusher'},
  {key:1, value:'Lieutenant Security-Officer'},
  {key:8, value:'Lieutenant Selar'}
 
]


// function coc(bst, results=[]){
//   if(!bst){
//     return [];
//   }
//   results = [bst.value]
//   if(bst.left && bst.right){
//     results = [...results, bst.left.value, bst.right.value]
//     coc(bst.left, results)
//     coc(bst.right, results)

//   }else if(bst.left && !bst.right){
//     results = [...results, bst.left.value]
//     coc(bst.left.left, results)
//     coc(bst.left.right, results)
//   }

// }

const Queue = require('./Queue');

function coc(bst) {

  let values = []
  const Q = new Queue()
  
  Q.enqueue(bst)

  //console.log(Q.first)

  while (Q.first) {
    let node = Q.dequeue()
    //console.log(node.value.value)
    values.push(node.value)
    
    if (node.left){
      Q.enqueue(node.left)
    }
    if (node.right){
      Q.enqueue(node.right)
    }
  }
  return values

  

  // if(!bst){
  //   return;
  // }
  // if (!bst.left && !bst.right) {
  //   return [bst.value]
  // }

  // if (bst.left && bst.right) {
  //   return [bst.value, bst.left.value, bst.right.value, ...coc(bst.left.left), ...coc(bst.left.right), ...coc(bst.right.left), ...coc(bst.right.right)]
  // }
  // if (bst.left && !bst.right) {
  //   return [bst.value, bst.left.value, ...coc(bst.left.left), ...coc(bst.left.right)]
  // }
  // if (!bst.left && bst.right) {
  //   return [bst.value, bst.right.value, ...coc(bst.right.left), ...coc(bst.right.right)]
  // }
}




function main(){

  //console.log(findBook('JavaScript: The Definitive Guide', trim('005.2762', library)))

  let crewBST = new BST()
  for (let i = 0; i < crew.length; i++) {
    crewBST.insert(crew[i].key, crew[i].value)
  }

  //console.log(crewBST.key);
  console.log(coc(crewBST))

  let dataBST = new BST()
  for (let i = 0; i < data.length; i++) {
    dataBST.insert(data[i])
  }

  //console.log(coc(crewBST));

  //console.log(preOrder(dataBST))
  //console.log(inOrder(dataBST))
  //console.log(postOrder(dataBST))



}

main()













/*
INTERVIEW QUESTION OF THE DAY:
Given a postorder traversal of a BST, construct the BST.
(don't worry about runtime or other optimization)

INPUT: 8, 12, 10, 16, 25, 20, 15 
(Note:  this is the output from running the dsfPostOder() below...)

OUTPUT: ...

              15
            /    \
          10      20
         /  \    /  \
        8   12  16   25



SOLUTION:

 class BST{
     constructor(key,parent){
         this.key = key;
         this.parent = parent;
         this.left = null;
         this.right = null;
     }
 }

 function postToBST(arr, start=0, end=arr.length-1){
    if(start > end){
        return;
    }

    let bst = new BST(arr[end])
    let i;
    for(i=end-1;i>start;i--){
        if(arr[i]<arr[end]){
            break;
        }
    }
    bst.left = postToBST(arr,start,i);
    bst.right = postToBST(arr,i+1,end-1);
    return bst;
 }




POST ORDER FUNCTION:

dsfPostOrder() {
    if (this.left) {
        this.left.dsfPostOrder();
    }
    if (this.right) {
        this.right.dsfPostOrder();
    }
    console.log(this.key);
}

*/


