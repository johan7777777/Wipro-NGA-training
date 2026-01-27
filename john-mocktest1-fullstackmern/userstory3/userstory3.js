var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var CustomerStatus;
(function (CustomerStatus) {
    CustomerStatus["ACTIVE"] = "Active";
    CustomerStatus["INACTIVE"] = "Inactive";
})(CustomerStatus || (CustomerStatus = {}));
function LogAction(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`Action performed: ${propertyKey}`);
        return originalMethod.apply(this, args);
    };
}
class Customer {
    constructor(id, name, contact) {
        this.id = id;
        this.name = name;
        this.contact = contact;
        this.status = CustomerStatus.ACTIVE;
    }
    register() {
        console.log(`${this.name} registered successfully`);
    }
}
__decorate([
    LogAction
], Customer.prototype, "register", null);
class PremiumCustomer extends Customer {
    constructor(id, name, contact, membershipLevel) {
        super(id, name, contact);
        this.membershipLevel = membershipLevel;
    }
    upgrade() {
        console.log(`${this.name} upgraded to ${this.membershipLevel}`);
    }
}
__decorate([
    LogAction
], PremiumCustomer.prototype, "upgrade", null);
class CustomerManager {
    constructor() {
        this.customers = [];
    }
    addCustomer(customer) {
        this.customers.push(customer);
    }
    *getCustomers() {
        for (const customer of this.customers) {
            yield customer;
        }
    }
}
const manager = new CustomerManager();
const customer1 = new Customer(1, "joe", ["joe@email.com", 1234567890]);
const customer2 = new PremiumCustomer(2, "abi", ["abi@email.com", 9876543210], "Gold");
manager.addCustomer(customer1);
manager.addCustomer(customer2);
customer1.register();
customer2.register();
customer2.upgrade();
for (const cust of manager.getCustomers()) {
    console.log(cust.name, cust.status);
}
