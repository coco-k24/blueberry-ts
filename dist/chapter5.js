"use strict";
//class構文
/* class User {
    name: string = "";
    age: number = 0;
}

const salt = new User();
console.log(salt.name);
console.log(salt.age); */
//5.1.2
//オプショナルなプロパティ
/* class User {
    name?: string;
    age: number = 0;
    readonly address: string = '';
}

const salt = new User();
console.log(salt.name);
salt.name = 'salt';
console.log(salt.name);
//salt.address = 'aaa'; */
//5.1.3
//メソッドの宣言
/* class User {
    name: string = '';
    age: number = 0;

    isAdult(): boolean {
        return this.age >= 20;
    }

    setAge(newAge: number) {
        this.age = newAge;
    }
}

const salt = new User();
console.log(salt.isAdult());
salt.setAge(23);
console.log(salt.isAdult()); */
//5.1.4
//コンストラクタ
/* class User {
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    isAdult(): boolean {
        return this.age >= 20;
    }
}

const salt = new User('salt', 23);
console.log(salt.age); */
/* const User = class {
    name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public isAdult(): boolean {
        return this.age >= 20;
    }
}

const salt = new User('salt', 23);
console.log(salt.isAdult()); */
/* class User<T> {
    name: string;
    #age: number;
    readonly data: T;

    constructor(name: string, age: number, data: T) {
        this.name = name;
        this.#age = age;
        this.data = data;
    }

    public isAdult(): boolean {
        return this.#age >= 20;
    }
}

const salt = new User<string>('salt', 23, '追加データ');
const data = salt.data;
const coco = new User('coco', 14, {num: 123});
const data2 = coco.data;

console.log(`${data}   ${data2.num}`); */
//5.2.1
/* class User {
    name: string = '';
    age: number = 0;

    isAdult():boolean {
        return this.age >= 20;
    }
}

const salt: User = new User();
const john: User = {
    name: 'john',
    age: 15,
    isAdult: () => this.age >= 20
}

console.log(john.isAdult()); */
/* class User {
    name: string = '';
    age: number = 0;
}

type MyUserConstructor = new() => User;

const MyUser: MyUserConstructor = User;
const u = new User();
console.log(u.name, u.age); */
/* class User {
    name: string;
    #age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.#age = age;
    }

    //public isAdult(): boolean {
        //return this.#age >= 20;
    //}

    isAdult = (): boolean => this.#age > 20;
}

class PremiumUser extends User {
    rank: number;

    constructor(name: string, age: number, rank: number) {
        super(name, age);
        this.rank = rank;
    }

    isAdult = (): boolean => true;
}

const salt = new User('salt', 23);
console.log(salt.isAdult());

const coco = new PremiumUser('coco', 15, 100);
console.log(coco.name, coco.rank);
console.log(coco.isAdult()); */
/* class User {
    name: string;
    #age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.#age = age;
    }

    public isAdult(): boolean {
        return this.#age >= 20;
    }

    public filterOlder(users: readonly User[]): User[] {
        return users.filter(u => u.#age > this.#age);
    }
}

 const salt = new User('salt', 23);
 const coco = new User('coco', 15);
 const uni = new User('uni', 29);
 const ikura = new User('ikura', 30);

 const older = salt.filterOlder([coco, uni, ikura]);
 console.log(older); */
//5.5.2
const throwError = () => {
    const error = new Error("エラーが発生しました");
    throw error;
};
try {
    console.log("エラーを発生させます");
    throwError();
    console.log("エラーを発生させました");
}
catch (err) {
    console.log("エラーをキャッチしました");
    console.log(err);
}
console.log("終わり");
