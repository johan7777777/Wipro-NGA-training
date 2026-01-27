interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
}

class ContactManager {
  private contacts: Contact[] = [];

  addContact(contact: Contact): void {

    let exists = false;

    for (let i = 0; i < this.contacts.length; i++) {
      if (this.contacts[i].id === contact.id) {
        exists = true;
        break;
      }
    }

    if (exists) {
      console.log("Error: Contact already exists.");
      return;
    }

    this.contacts.push(contact);
    console.log("Contact added successfully.");
  }

  viewContacts(): Contact[] {
    return this.contacts;
  }

  modifyContact(id: number, updatedContact: Partial<Contact>): void {

    let foundContact: Contact | null = null;

    for (let i = 0; i < this.contacts.length; i++) {
      if (this.contacts[i].id === id) {
        foundContact = this.contacts[i];
        break;
      }
    }

    if (foundContact === null) {
      console.log("Error: Contact not found.");
      return;
    }

    if (updatedContact.name !== undefined) {
      foundContact.name = updatedContact.name;
    }

    if (updatedContact.email !== undefined) {
      foundContact.email = updatedContact.email;
    }

    if (updatedContact.phone !== undefined) {
      foundContact.phone = updatedContact.phone;
    }

    console.log("Contact updated successfully.");
  }

  deleteContact(id: number): void {

    let index = -1;

    for (let i = 0; i < this.contacts.length; i++) {
      if (this.contacts[i].id === id) {
        index = i;
        break;
      }
    }

    if (index === -1) {
      console.log("Error: Contact not found.");
      return;
    }

    this.contacts.splice(index, 1);
    console.log("Contact deleted successfully.");
  }
}

// Testing

const manager = new ContactManager();

manager.addContact({
  id: 1,
  name: "johan",
  email: "johan@example.com",
  phone: "7777777777"
});

manager.addContact({
  id: 2,
  name: "siva",
  email: "siva@example.com",
  phone: "8888888888"
});

console.log("Contacts:", manager.viewContacts());

manager.modifyContact(1, { phone: "9999999999" });

manager.deleteContact(2);

console.log("Final Contacts:", manager.viewContacts());
