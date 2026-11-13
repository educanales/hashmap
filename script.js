class HashMap {
  constructor(loadFactor, capacity) {
    this.loadFactor = loadFactor;
    this.capacity = capacity;    
    this.array = new Array( this.capacity );
  }

  getArray() {
    // console.log(this.array.length);
    console.log(this.array);
  }

  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;

    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);      
    }
    return hashCode;
  }

  set(key, value) {
    const index = this.hash(key) % this.capacity;
    // console.log(index);
    this.array[index] = { key: key, value: value, };
  }

  get(key) {
    const index = this.hash(key) % this.capacity;    
    if (!this.array[index]) {
      return undefined;
    } else {
      return this.array[index].value;
    }
  }

  has(key) {
    const index = this.hash(key) % this.capacity;    
    if(!this.array[index]) return false;
    if(this.array[index].key !== key) {
      return false;
    } else {
        return true;
      }
  }

  remove(key) {
    if(!this.has(key)) {
      return false;
    } else {
      const index = this.hash(key) % this.capacity;    
      this.array.splice(index, 1, {});
      return true;
    }
  }

  length() {
    // let count = 0;
    // this.array.map(item => {
    //   if (item.key !== null) {
    //     count++;
    //   }
    // });
    // // console.log(count);
    // return count;
    return this.array.filter(item => item.key !== null).length;
  }

  clear() {
    this.array.map(item => {
      if (item.key !== null) this.array = new Array( this.capacity );
    });
  }

  keys() {
    return this.array
      .filter(item => item.key)
      .map(item => item.key);
  }
  

  values() {
    return this.array
      .filter(item => item.value)
      .map(item => item.value);
  }
}

const myHashMap = new HashMap(0.75, 16);
// const myHash = myHashMap.hash("carrot");
// myHashMap.getArray();

// console.log(myHash);
myHashMap.set("apple", "red");
myHashMap.set("uva", "blue");
myHashMap.set("mandarina", "orange");
// myHashMap.getArray();

// console.log(myHashMap.length());
console.log(myHashMap.values());
// console.log(myHashMap.length());
// console.log(myHashMap.has("applet"));
// myHashMap.set("apple", "red");
// console.log(myHashMap.array[10].key);
// myHashMap.getArray();

