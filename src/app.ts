abstract class Department {
  private employees: string[] = [];

  constructor(protected readonly name: string) {}

  descripbe() {
    console.log("Deaprtment: " + this.name);
  }

  addEmploy(employe: string) {
    this.employees.push(employe);
  }
}

class AccountingDepartment extends Department {
  private static instance: AccountingDepartment;

  private constructor(public id: string) {
    super("IT");
    AccountingDepartment.id = this.id;
  }

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }

    //一度のみの実行
    this.instance = new AccountingDepartment("");
    return this.instance;
  }
}

const accounting = AccountingDepartment.getInstance();
const accountin2g = AccountingDepartment.getInstance();

console.log(accounting, accountin2g);
