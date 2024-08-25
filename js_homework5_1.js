let person = {
    firstName: "John",
    occupation: "QA Engineer",
    age: 29,
    getInfo: function() {
        for (let i in this) {
            if (this.hasOwnProperty(i) && typeof this[i] !== 'function') {
                console.log(i + ': ' + this[i]);
            }
        }
    }
};
person.getInfo();
person['salary'] = '7777';
person.getInfo();