import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      data: [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5],
      compareVal: null
    };
  }

  binarySearch(array, value, start=0, end=array.length-1, counter = 0) {
    counter++;
    if (start > end){
      return `${value} was NOT found after ${counter} attmepts.`;
    } 
    //find the midpoint and the item at the midpoint
    let index = Math.floor((start + end) / 2);
    let item = array[index];
    
    //if the middle element is the target them return that location
    if (item === value) {
        return `${value} was found after ${counter} attmepts.`;
    }
    //if the middle element is less than the target then the target lies 
    //on the right side so eliminate all left side and only 
    //consider after the middle to the end of the array
    else if (item < value) {
        return this.binarySearch(array, value, index + 1, end, counter);
    }
    //if the middle element is greater than the target then the 
    //target is on the left side so the left of the middle 
    else if (item > value) {
        return this.binarySearch(array, value, start, index - 1, counter);
    }
  }
  
  indexOf(array, value) {
    let counter = 0;
    for (let i = 0; i < array.length; i ++) {
      counter++;
        if (array[i] === value) {
            return `${value} was found after ${counter} attmepts.`;
        }
    }
    return `${value} was NOT found after ${counter} attmepts.`;
  }

  linearClick(e){
    e.preventDefault();
    console.log(e.currentTarget);
    const value = this.state.compareVal;
    const linearResult = this.indexOf(this.state.data, parseInt(value));
    this.setState({
      result: linearResult
    })
    //console.log(this.indexOf(this.state.data, parseInt(value)));
  }

  binaryClick(e){
    e.preventDefault();
    console.log(e.currentTarget);
    const value = this.state.compareVal;
    const sortedData = this.state.data.sort();
    const binaryResult = this.binarySearch(sortedData, parseInt(value));
    this.setState({
      result: binaryResult
    })
    //console.log(this.indexOf(this.state.data, parseInt(value)));
  }


  handleCompare(e){
    this.setState({
      compareVal: e.target.value
    })
  }


render(){
  return (
    <div className="App">
    <form>
      <input
      onChange={(e) => this.handleCompare(e)}
      type="number"
       title="compare"
        id="compare"
      />
      <button
      type="submit"
      title="Linear"
        onClick={(e) => this.linearClick(e)}
        >
      Linear
        </button>

      <button
      type="submit"
      title="Binary"
      onClick={(e) => this.binaryClick(e)}
      >
      Binary
        </button>
      </form>
      <p>
        {this.state.result}
      </p>

    </div>
  );
}
}

export default App;