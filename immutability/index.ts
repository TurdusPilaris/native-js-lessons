export type UserType = {
    name: string
    hair: number
    address: { title: string }
}

export type CompanysType = {
    companies: Array<{ id: number; title: string }>
}


export type Laptoptype = {
    title: string
}

export type UserWithLaptopType = UserType & { laptop: Laptoptype } // Присоединяет объект

export const updateCompanys = (user: CompanysType,
                               idCompany: number,
                               title: string) => ({

    ...user,
    companies: user.companies.map(a => a.id===idCompany? {...a, title: title}:a)
})

export const updateCompanys2 = (companies: { [key: string]: Array<{id: number; title: string}>},
                               userName: string,
                               companyId: number,
                                newTitle: string) => {

    let companyCopy = {...companies}
    companyCopy[userName] = companyCopy[userName].map(c => c.id===companyId?{...c, title:newTitle}:c)
    return companyCopy;
}


