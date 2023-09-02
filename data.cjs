// module.exports = {
//     firstName: 'Jeram',
//     lastName: 'Calbe',
//     email: 'email@email.com'
// }

module.exports = function(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = () => {
        return this.firstName + ' ' + this.lastName
    }
}