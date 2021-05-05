import { User } from "../model/user";

export class MyDatabaseClass {
  private static instance: MyDatabaseClass | null = null;
  private users: User[] = []

  private constructor() { }

  static getInstance(): MyDatabaseClass {
    if (MyDatabaseClass.instance == null) {
      MyDatabaseClass.instance = new MyDatabaseClass();
    }
    return MyDatabaseClass.instance;
  }

  add(user: User): void {
    this.users.push(user);
  }

  remove(index: number): void {
    this.users.splice(index, 1);
  }

  show() {
    for (const user of this.users) {
      console.log(user);
    }
  }
}