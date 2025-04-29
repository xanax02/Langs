type AssignUser = {
  name: string;
  age: number;
};

type AssignAdmin = {
  name: string;
  permissions: string;
};

const func = (assignUser: AssignAdmin | AssignUser): string => {
  return "hello" + assignUser.name;
};
