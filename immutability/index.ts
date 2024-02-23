export type UserType = {
    name: string
    hair: number
    address: {title: string}
}

export type CompanysType = {
    company: {
    id: number;
    title: string;}
}
export type Laptoptype = {
    title: string
}

export type UserWithLaptopType = UserType & { laptop: Laptoptype} // Присоединяет объект

const user: UserType&CompanysType = {
    name: "Lena",
    hair: 32,
    address: {title: 'Novi sad'},
    company: {id: 1, title: 'epam'}
}
console.log(updateCompanys(user, 1, "EPAM"))