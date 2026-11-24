export class HashMap {
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
    if (index < 0 || index >= this.array.length) {
      throw new Error("Trying to access index out of bounds");
    } else if (this.array[index] !== undefined) {
        if (this.array[index].key === key) {
          // sobreescribir
          this.array[index] = { key: key, value: value, };
          console.log("sobreescribiendo...");
        } else {
          // agregar una linked list
          // marcar el primer nodo como header
          const prevPair = this.array[index];
          this.remove(prevPair.key);
          prevPair.nextNode = { key: key, value: value };
          this.array[index] = { headNode: prevPair };
          console.log("Creando una linked list");
        }
    } else {
      this.array[index] = { key: key, value: value, };
      console.log(`Agregando un nuevo bucket ${key}`);
    }
 }
  
  get(key) {
    const index = this.hash(key) % this.capacity;    
    if (!this.array[index]) {
      console.log("No existe la key que buscas.");
      return undefined;
    } else {
      console.log(`la key es: ${key}`);
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
      console.log(`Removing the entry: ${key}`);
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
    console.log("Length: ");
    return this.array.filter(item => item.key !== null).length;
  }

  clear() {
    console.log("Removing all entries in the hash map.");
    this.array.map(item => {
      if (item.key !== null) this.array = new Array( this.capacity );
    });
  }

  keys() {
    console.log("These are all the keys in the hashmap.");
    return this.array
      .filter(item => item.key)
      .map(item => item.key);
  }
  
  values() {
    console.log("These are all the values in the hashmap.");
    return this.array
      .filter(item => item.value)
      .map(item => item.value);
  }

  entries() {
    console.log("These are all the entries in the hashmap.");
    return this.array
      .filter(item => item)
      .map(item => [item.key, item.value]);
  }
}

// const myHashMap = new HashMap(0.75, 16);
// const myHash = myHashMap.hash("carrot");
// myHashMap.getArray();

// console.log(myHash);
// myHashMap.set("apple", "red");
// myHashMap.set("uva", "blue");
// myHashMap.set("mandarina", "orange");
// myHashMap.set("mandarina", "naranja");

// myHashMap.getArray();
// myHashMap.get("apple");
// myHashMap.has("banana");
// myHashMap.remove("uva");
// myHashMap.length();
// myHashMap.keys();
// myHashMap.values();
// myHashMap.entries();

const test = new HashMap(0.75, 16);

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
// test.set('ice cream', 'white')
// test.set('jacket', 'blue')
// test.set('kite', 'pink')
// test.set('lion', 'golden')

test.getArray();

// console.log(myHashMap.length());
// console.log(myHashMap.entries());
// console.log(myHashMap.length());
// console.log(myHashMap.has("applet"));
// myHashMap.set("apple", "red");
// console.log(myHashMap.array[10].key);
// myHashMap.helper("apple", "red");
// myHashMap.helper("anana", "red");

// helper(key, value) {
//   const index = this.hash(key) % this.capacity;
//   console.log(index);
//   if (this.array[index] !== undefined) {
//     return console.log("Existe");
//   } else {
//     return console.log("No existe");
//   }
// }
