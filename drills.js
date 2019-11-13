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


function main(){

  console.log(findBook('JavaScript: The Definitive Guide', trim('005.2762', library)))

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


