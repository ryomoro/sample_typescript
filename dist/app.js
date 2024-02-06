"use strict";
class Department {
    constructor(name) {
        this.name = name;
        this.employees = [];
    }
    descripbe() {
        console.log("Deaprtment: " + this.name);
    }
    addEmploy(employe) {
        this.employees.push(employe);
    }
}
class AccountingDepartment extends Department {
    constructor() {
        super("IT");
    }
    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment();
        return this.instance;
    }
}
const accounting = AccountingDepartment.getInstance();
const accountin2g = AccountingDepartment.getInstance();
console.log(accounting, accountin2g);
//# sourceMappingURL=app.js.map