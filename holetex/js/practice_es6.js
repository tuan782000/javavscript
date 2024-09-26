// Ôn tập es6

// 1. let const

// tìm hiểu về scope - nơi biến đó được truy xuất và sử dụng giá trị
// var let const

var firstName = "Tuan"; // global Scope

// functional scope - có nghĩa biến đó được định nghĩa bên trong của scope đó
// nếu đã được khai báo trong scope đều phải hoạt động trong scope đó - value của nó không được ra ngoài

// block scope
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// let chỉ có giá trị trong {}

// const là hằng số - không re-asign được - let thì có thể

// 2. template literals

const firstName = "Tuan";

const fullName = `Tôi tên là ${firstName}`;
console.log(fullName);

// 3. enhanced object property
// 4. extended params handling
// 5. arrow function
// 6. destructuring
// 7. class
// 8. Promise
