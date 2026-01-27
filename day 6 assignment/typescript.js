// Week-2 Day-1 : Contact Manager Application
// Basic TypeScript Implementation
// ContactManager Class
var ContactManager = /** @class */ (function () {
    function ContactManager() {
        this.contacts = [];
    }
    ContactManager.prototype.addContact = function (contact) {
        var exists = this.contacts.find(function (c) { return c.id === contact.id; });
        if (exists) {
            console.log("Error: Contact already exists.");
            return;
        }
        this.contacts.push(contact);
        console.log("Contact added successfully.");
    };
    ContactManager.prototype.viewContacts = function () {
        return this.contacts;
    };
    ContactManager.prototype.modifyContact = function (id, updatedContact) {
        var contact = this.contacts.find(function (c) { return c.id === id; });
        if (!contact) {
            console.log("Error: Contact not found.");
            return;
        }
        Object.assign(contact, updatedContact);
        console.log("Contact updated successfully.");
    };
    ContactManager.prototype.deleteContact = function (id) {
        var index = this.contacts.findIndex(function (c) { return c.id === id; });
        if (index === -1) {
            console.log("Error: Contact not found.");
            return;
        }
        this.contacts.splice(index, 1);
        console.log("Contact deleted successfully.");
    };
    return ContactManager;
}());
// Testing Script
var manager = new ContactManager();
manager.addContact({
    id: 1,
    name: "Akhil",
    email: "akhil@example.com",
    phone: "9876543210"
});
manager.addContact({
    id: 2,
    name: "Praneeth",
    email: "praneeth@example.com",
    phone: "9123456780"
});
console.log("Contacts:", manager.viewContacts());
manager.modifyContact(1, { phone: "9999999999" });
manager.deleteContact(2);
console.log("Final Contacts:", manager.viewContacts());
