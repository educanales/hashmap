class HashMap {
  constructor(loadFactor, capacity) {
    this.loadFactor = loadFactor;
    this.capacity = capacity;    
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
    const index = this.hash(key);
    const newBucket = new Bucket(index, key, value);
  }
}

class Bucket {
  constructor(hash, key, value) {
    this.hash = hash;
    this.key = key;
    this.value = key;
  }
}

const myHashMap = new HashMap(0.75, 16);

const myHash = myHashMap.hash("carrot");

console.log(myHash % 16);


// tengo un hash map
// tengo mis buckets
// cada bucket que creo tiene un indice que es el hash
// dentro del bucket guardo la key y el value
// para encontrar un bucket uso la key
// 
