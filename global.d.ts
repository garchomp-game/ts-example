interface MemberInterface {
    name: string
    age: number
    getName(): string
    getAge(): number
}

interface MemberInfo {
    member: Array<MemberInterface>
    groupName: string
}

interface MemberGroupInterface extends MemberInfo{
    setGroupName(name: string): void
    setMember(member: MemberInterface): void
}