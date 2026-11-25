[x] revisar si el index ya esta ocupado
[x]   si esta ocupado comprobar la key 
[x]     si es la misma sobreescribir key y value
[x]     si no es la misma crear una linked list y agregar otra entrada a la lista
[ ]
[ ]     agregar la propiedad nextNode a cada item de la lista, el ultimo debe apuntar null
[x]   si no esta ocupado agregar normalmente 
[ ] verificar la capacidad actual
[ ] revisar porque mustra dos veces las weas


check if headNode is null
-  true => write headNode with newNode (esto no pasa en el hashmap)
-  false => crear currentNode con el headNode actual
 -  iterar el currentNode comparando la propiedad nextNode hasta que sea distinta a null
   - en cada iteracion currentNode pasa a ser currentNode.nextNode
   - al finalizar la iteracion, currentNode.nextNode es igual a newNode

