type EmployeeType = {
  name: string;
  startDate: string;
};

type ManagerType = {
  name: string;
  department: string;
};

//intersection -> have all properites of type
type TeamLead = EmployeeType & ManagerType;

let t: TeamLead = {
  name: "abhay:",
  startDate: "yesterday",
  department: "CSE",
};

//union
type GoodUser = {
  name: string;
  gift: string;
};

type BadUser = {
  name: string;
  ip: string;
};

// union -> either Gooduser or BadUser or all values of both
type UserBehave = GoodUser | BadUser;

const union_user: UserBehave = {
  name: "abhay",
  gift: "hello hlloo",
};
