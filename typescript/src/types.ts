type EmployeeType = {
    name: string
    startDate: string;
}

type ManagerType = {
    name: string,
    department: string;
}

type TeamLead = EmployeeType & ManagerType

let t: TeamLead = {
    name: "abhay:",
    startDate: "yesterday",
    department: "CSE"
}

//union
type GoodUser = {
    name: string;
    gift: string;
}

type BadUser ={
    name: string;
    ip: string
}

type UserBehave = GoodUser | BadUser

