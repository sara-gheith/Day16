class Person {

    static display(message) {
        return message;
    }

    show() {

        console.log(Person.display("Static method is invoked from Person class"));
    }
}

var message = new Person();
message.show();
module.exports = Person;