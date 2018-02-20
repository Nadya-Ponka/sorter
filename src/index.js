class Sorter {
  constructor(name) {
    // your implementation
    this.name = name;
	this.elemetnsArray = [];
	this.sortMethod = (left,right) => left-right;
  }
  add(element) {
    // your implementation
    this.elemetnsArray.push(element);
   // console.log(this.elemetnsArray);
	return this.elemetnsArray;
  }

  at(index) {
    // your implementation
	return this.elemetnsArray[index];
  }

  get length() {
    // your implementation
    return this.elemetnsArray.length;
  }

  toArray() {
    // your implementation
	return this.elemetnsArray;
  }

  sort(indices) {
	  indices.sort((left, right) => left - right);

	  if (indices.length == 1) {return this.elemetnsArray[indices[0]];} 
	  else {
	 
	  var helperArray = [];
	  
	  for (let i=0; i<indices.length;i++) { helperArray[i] = this.elemetnsArray[indices[i]]; }
	  
	  helperArray.sort(this.sortMethod);
	  
	  for (let i=0; i<indices.length;i++) { this.elemetnsArray[indices[i]] = helperArray[i]; }

	  return this.elemetnsArray; 
	  }
  }

  setComparator(compareFunction) {
    // your implementation
	this.sortMethod = compareFunction;
  }

}

module.exports = Sorter;
