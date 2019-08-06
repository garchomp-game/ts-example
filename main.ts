let userName: string = 'userName'
let num: number = 10
let boolean = true

let stringList: string[] = ['hoge', 'huga']
let stringList2: Array<string> = ['hoge', 'huga'] // どっちも同じ書き方
stringList.map(val => console.log(val))
stringList.map((val: string) => {
    console.log(val)
})

let numberList: number[] = [1, 2]
let numberList2: Array<number> = [1, 2] // どっちも同じ書き方
let total = numberList.reduce((total, val) => total + val)
console.log(`total is ${total}`)
let reduce = (total, val) => total + val
let total2: number = numberList.reduce(reduce)
total2 += numberList2.reduce(reduce)
console.log(`total2 is ${total2}`)
// 普通のfunction
function getMessate(message: string): string {
    return message
}

// アロー関数
let getNumber = (num: number): number => {
    return num
}


// class
class User {
    private accessorNum: number = 10
    constructor(public name: string, public age: number) { }
    getName(): string {
        return this.name
    }
    getAge(): number {
        return this.age
    }
}

// class
class User2 {
    public name: string
    public age: number
    private accessorNum: number = 10
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
    getName(): string {
        return this.name
    }
    getAge(): number {
        return this.age
    }
}

let user = new User('hoge', 10)
console.log(user.getName())
console.log(user.getAge())

let user2 = new User2('hoge', 10)
console.log(user2.getName())
console.log(user2.getAge())