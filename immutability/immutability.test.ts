import {CompanysType, updateCompanys, updateCompanys2, UserType} from "./index";

test("update company", () =>{
    const user: UserType & CompanysType = {
        name: "Lena",
        hair: 32,
        address: {title: 'Novi sad'},
        companies: [{id: 1, title: 'epam'}, {id: 2, title: 'srsa'}]
    }

    const copyUser = updateCompanys(user, 1, "EPAM")


    expect(user).not.toBe(copyUser);
    expect(user.companies).not.toBe(copyUser.companies);
    expect(copyUser.companies[0].title).toBe("EPAM")
    }
)

test("update company 2", () =>{
        const user: UserType  = {
            name: "Lena",
            hair: 32,
            address: {title: 'Novi sad'}
        }

        let companies = {
            'Lena': [{id: 1, title: 'BIA' },{id: 2, title: 'epam'}],
            'Vova': [{id: 1, title: 'auto piter' },{id: 2, title: 'ya'}]

        }

        const companyCopy = updateCompanys2(companies, 'Lena', 2, "EPAM")

    expect(companies).not.toBe(companyCopy)
    expect(companyCopy['Lena']).not.toBe(companies['Lena'])
    expect(companyCopy['Vova']).toBe(companies['Vova'])
    expect(companyCopy['Lena'][1].title).toBe("EPAM")

    }
)