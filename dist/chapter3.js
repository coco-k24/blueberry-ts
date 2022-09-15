import { createInterface } from "readline";
const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
});
/*
//3.1.3

const propName = "foo";

const obj = {
    [propName]: 123
};

console.log(obj.foo);


//3.1.4

const message = {
    good: "0以上の数値が入力されました!",
    bad: "負の数値を入力しないでください!"
};

rl.question('数値を入力してください; ', (line) => {
    const num = Number(line);
    console.log(message[num >= 0 ? "good" : "bad"]);//プロパティアクセスの際[""]を使えば式を入れることができる
    rl.close();
});

//3.1.5

const obj1 = {
    foo: 123,
    bar: 456,
    baz: 789,
};

const obj2 = {
    ...obj1,
    foo: -9999,
};

console.log(obj2);



//3.1.6

//明示的にコピーしなければobjectは同じ
//objectを別変数に代入する行為はコピーではない
//objectが同じ例
const foo = { num: 1234 };
const bar = foo;
console.log(`bar is ${bar.num}, foo is ${foo.num}`);
bar.num = 0;
console.log(`bar is ${bar.num}, foo is ${foo.num}`);


//明示的にコピーする例
const foo = { num: 123 };
const bar = { ...foo };//スプレッド構文
console.log(`bar is ${bar.num}, foo is ${foo.num}`);
bar.num = 0;
console.log(`bar is ${bar.num}, foo is ${foo.num}`);


//スプレッド構文使用時の罠
//ネストしている場合objというobjectをコピーするため、同じになる
const foo = { obj: { num:123 } };
const bar = { ...foo };
bar.obj.num = 0;
console.log(`foo is ${foo.obj.num}, bar is ${bar.obj.num}`);



//オブジェクトの比較

const foo = { num: 1234 };
const bar = foo;
const baz = { num: 1234 };
const hoge = foo;
console.log(`foo bar ${foo === bar}`);
console.log(`foo baz ${foo === baz}`);
hoge.num = 0;
console.log(`foo is ${foo.num}, hoge is ${hoge.num}`);
console.log(`foo baz ${foo === hoge}`);

//3.2.1

const obj: {
    foo: number;
    bar: string;
} = {
    foo: null,
    bar: "Hello, world!"
};


//3.2.3
//type文は順序関係ない
type FooBarObj = {
    foo: number;
    bar: string;
};

const obj: FooBarObj = {
    foo: 123,
    bar: "Hello, Would!",
};


//3.2.4
//interface宣言
//ほぼtype文でok
interface FooBarObj {
    foo: number;
    bar: string;
}

const obj: FooBarObj = {
    foo: 0,
    bar: "string"
};


//3.2.5
//インデックスシグネチャ
type priceData = {
    [key: string]: number;
}

const data: priceData = {
    apple: 220,
    coffee: 120,
    bento: 500,
}

console.log(data.bento);


//3.2.6

type myObj = {
    foo: boolean;
    bar: boolean;
    baz?: number;//ユニオン型になる
}

const obj: myObj = { foo: false, bar: true };
const obj2: myObj = { foo: true, bar: false, baz: 1234 };
console.log(obj.baz);
console.log(obj2.baz);


//3.2.7
//読み取り専用
type MyObj = {
    readonly foo: number;
}

const obj: MyObj = { foo: 123 };
obj.foo = 0;


//3.3.2
//部分型関係
type Animal = {
    age: number;
}

type Human = {
    age: number;
    name: string;
}

type AnimalFamily = {
    familyName: string;
    mother: Animal;
    father: Animal;
    child: Animal;
}

type HumanFamily = {
    familyName: string;
    mother: Human;
    father: Human;
    child: Human;
}


//3.4.3

type HasName = {
    name: string;
};

type Family<Parent extends HasName, Child extends HasName> = {
    mother: Parent;
    father: Parent;
    child: Child;
};

//type T = Family<number, string>;


type Human = {
    name: string;
    age: number;
    height: number;
}

type Animal = {
    name: string;
    age: number;
    animal: string;
}

type Family<a, b> = {
    mather: a;
    father: a;
    pet: b;
}

const tanaka: Family<Human, Animal> = {
    mather: {name: "aaa", age: 30, height: 160},
    father: {name: "aaa", age: 30, height: 160},
    pet: {name: "aaa", age: 30, animal: "dog"},
}

console.log(tanaka.mather.name);


//3.5.1

const arr1 = [4, 5, 6];
const arr2 = [1, 2, 3, ...arr1];
console.log(`arr1 is ${arr1}`);
console.log(`arr2 is ${arr2}`);
arr1[2] = 1000;
console.log(`arr1 is ${arr1}`);
console.log(`arr2 is ${arr2}`);


//3.5.3
//配列型の記法
const arr1: boolean[] = [false, true];

const arr2: Array<{ name: string }> = [
    {name: "山田"},
    {name: "佐々木"}
];

console.log(arr2[1].name);

const arr3: Array<{ name: string, age: number }> = [
    {name: "木村", age: 19},
    {name: "越後", age: 30}
]

console.log(`${arr3[1].name} is ${arr3[1].age}`);
console.log(arr3);


//3.5.5

const arr = [1, 10, 100];
arr.push(1000);
console.log(arr);
//arr.push("aaa");//型推論によってarrはnumber型になっているためエラー


//3.6.1
//分割代入
type obj = {
    foo: string;
    bar: number;
}

const MyObj: obj = {
    foo: "aaa",
    bar: 1234,
};

//const { foo, bar } = MyObj;
const {
    foo,
    bar: aaa,
} = MyObj;

console.log(`foo is ${foo}`);
console.log(`bar is ${aaa}`);

*/
//3.6.3
const nested = {
    num: 123,
    obj: {
        foo: "hello",
        bar: "would",
    }
};
console.log(nested);
const { num, obj: { foo } } = nested;
console.log(`num is ${num}, foo is ${foo}`);
rl.close();
