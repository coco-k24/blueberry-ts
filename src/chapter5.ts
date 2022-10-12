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

class User {
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
console.log(salt.age);
