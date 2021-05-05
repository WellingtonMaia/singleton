import { MyDatabaseClass } from "./db/my-database-classic";

const myDatabaseClass = MyDatabaseClass.getInstance();
//Add
myDatabaseClass.add({ name: 'João', age: 53 })
myDatabaseClass.add({ name: 'Maria', age: 41 })
myDatabaseClass.add({ name: 'Fulano', age: 19 })

//show
myDatabaseClass.show();
//removed
myDatabaseClass.remove(1);
console.log('---------------------------------');
//show
myDatabaseClass.show();
