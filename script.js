class HashMap {
  constructor(loadFactor, capacity) {
    this.loadFactor = loadFactor;
    this.capacity = capacity;    
    this.array = new Array( this.capacity );
  }

  arrayLength() {
    console.log(this.array.length);
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
    console.log(index);
  }
}



const myHashMap = new HashMap(0.75, 16);

const myHash = myHashMap.hash("carrot");

console.log(myHash);
myHashMap.set("apple", "red");


// tengo un hash map
// tengo mis buckets
// cada bucket que creo tiene un indice que es el hash
// dentro del bucket guardo la key y el value
// para encontrar un bucket uso la key
// 
