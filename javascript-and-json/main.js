var books = [
  {
    title: 'Harry Potter',
    isbn: '940490349-1234',
    author: 'JK Rowling'
  },
  {
    title: 'enders game',
    author: 'orson scott card',
    isbn: '41281944894-3213'
  },
  {
    title: 'enders shadow',
    author: 'orson scott card',
    isbn: '32918283838-2929'
  }
];

console.log('array of books:', books);
console.log('typeof books:', typeof books);

var element1 = JSON.stringify(books);
console.log('JSON result for Books:', element1);
console.log('typeof JSON Stringify for books:', typeof element1);

var student = '{ "Number id":"4564", "string name":"alex"}';
console.log('value of student:', student);
console.log('typeof student:', typeof student);

var student2 = JSON.parse(student);
console.log('value of new object:', student2);
console.log('typeof new object:', typeof student2);
