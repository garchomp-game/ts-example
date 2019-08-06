/// <reference path="global.d.ts" />
class Member implements MemberInterface {
    constructor(public name: string, public age: number) {}

    getName(): string {
        return this.name
    }

    getAge(): number {
        return this.age
    }
}

class MemberGroup implements MemberGroupInterface {
    public groupName: string = ""
    public member: Array<Member> = []

    setGroupName (name: string): void {
        this.groupName = name
    }

    setMember(member: Member): void {
        this.member.push(member)
    }

    getInfo(): MemberInfo {
        return {
            member: this.member,
            groupName: this.groupName
        }
    }
}

const otoka = new Member('otoka', 20)
const taku = new Member('taku', 21)
const memberGroup = new MemberGroup()
memberGroup.setMember(otoka)
memberGroup.setMember(taku)
memberGroup.setGroupName('testGroup1')
console.log(memberGroup.getInfo())