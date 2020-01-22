const bcrypt = require('bcryptjs');

const password = 'password';

// const salt = bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync(password, 10);
console.log('original password:', password);
console.log('hashed password:', hash);

const result = bcrypt.compareSync('word', hash);
console.log('result:', result);
