const users = [
  {
    id: 7,
    email: "michael.lawson@reqres.in",
    first_name: "Michael",
    last_name: "Lawson",
    avatar: "https://reqres.in/img/faces/7-image.jpg",
    tags: ["AAA", "BBB"],
  },
  {
    id: 8,
    email: "lindsay.ferguson@reqres.in",
    first_name: "Lindsay",
    last_name: "Ferguson",
    avatar: "https://reqres.in/img/faces/8-image.jpg",
    tags: ["CCC", "DDD"],
  },
  {
    id: 9,
    email: "tobias.funke@reqres.in",
    first_name: "Tobias",
    last_name: "Funke",
    avatar: "https://reqres.in/img/faces/9-image.jpg",
    tags: ["AAA", "BBB"],
  },
  {
    id: 10,
    email: "byron.fields@reqres.in",
    first_name: "Byron",
    last_name: "Fields",
    avatar: "https://reqres.in/img/faces/10-image.jpg",
    tags: ["AAA", "DDD"],
  },
  {
    id: 11,
    email: "george.edwards@reqres.in",
    first_name: "George",
    last_name: "Edwards",
    avatar: "https://reqres.in/img/faces/11-image.jpg",
    tags: ["AAA"],
  },
  {
    id: 12,
    email: "rachel.howell@reqres.in",
    first_name: "Rachel",
    last_name: "Howell",
    avatar: "https://reqres.in/img/faces/12-image.jpg",
    tags: ["BBB"],
  },
];

//1. Giới thiệu "filter()"

users.filter((user) => {
  console.log(user.id);
});

const filterFirstNameUser = users.filter((user) => {
  return user.first_name === "Rachel";
  // khi user.first_name bằng với Rachel mới trả về lưu vào biến filterFirstNameUser
  // ngược lại sai nó sẽ bỏ qua user đó
});

console.log({ filterFirstNameUser });

const filterFirstNameUser2 = users.filter((user) => {
  return user.first_name === "Rachel" || user.first_name === "Lindsay";
  // khi user.first_name bằng với Rachel hoặc Lindsay mới trả về lưu vào biến filterFirstNameUser
  // chỉ đúng 1 trong 2 điều kiện đưa ra thì sẽ trả về
  // ngược lại sai nó sẽ bỏ qua user đó
});

console.log({ filterFirstNameUser2 });

// Tóm lại filter dùng lọc dữ liệu

// ---

//2. Giới thiệu "find()"

// nó cũng tương tự như filter cũng dùng để tìm kiếm và lọc dữ liệu - nhưng sẽ có 1 điểm khác

const findFirstNameUser = users.find((user) => {
  return user.first_name === "Rachel" || user.first_name === "Lindsay";
  // khi user.first_name bằng với Rachel hoặc Lindsay mới trả về lưu vào biến filterFirstNameUser
  // chỉ đúng 1 trong 2 điều kiện đưa ra thì sẽ trả về
  // ngược lại sai nó sẽ bỏ qua user đó
});

console.log({ findFirstNameUser });

// find chỉ trả về 1 object đầu tiên thoả mãn với điều kiện - mặc dù phía sau vẫn còn object thoả điều kiện đưa ra

// Tóm lại nếu cần tìm kiếm trả ra nhiều đối tượng khác nhau dùng "filter" - nếu chỉ cần tìm và trả ra 1 đối tượng duy nhất mặc kệ các đối tượng khác có thoả mãn hay không thì dùng "find"

// ---

// 3. Tìm hiểu về "map()"

// biến array cũ thành 1 array mới

const customUser = users.map((user) => {
  return user.email;
});

// bây giờ customUser chỉ là 1 mảng các email
// lúc này không còn là 1 mảng các object - ghi đè lại thành 1 mảng các string
console.log(customUser);

// có 1 cách dùng khác - dữ nguyên dữ liệu cũ và thêm dữ liệu mới
const customEditUser = users.map((user) => {
  return {
    ...user, // copy nông - shallow copy - bạn đang sao chép tất cả các thuộc tính từ đối tượng user sang đối tượng mới
    last_name: `${user.last_name} edited`, // riêng last_name sẽ có chỉnh sửa
  };
});

console.log(customEditUser);

// chú ý users không hề thay đổi mà nó được gán vào array mời customEditUser
// map - nó sẽ tạo ra array mới để cập nhật dữ liệu chứ không cập nhật trực tiếp vào dữ liệu cũ

// 4. Tìm hiểu về "some()"

// nó thường kết hợp với filter - mảng bên trong mảng chứa tiếp mảng nữa

// lúc chưa dùng some

const findUserTags = users.filter((user) => {
  // chỉ cần có chứa BBB thì trả về - tức là thoả điều kiện tag có BBB là trả về
  // lý do dùng let - để re-asigned là dữ liệu
  let found = false;
  user.tags.forEach((tag) => {
    if (tag === "BBB") {
      found = true;
    }
  });
  return found;
});

console.log(findUserTags);

// sau khi kết hợp some

const findUserUsingFilterAndSome = users.filter((user) => {
  return user.tags.some((tag) => {
    return tag === "BBB"; // nếu có
  }); // thằng ngoài này trả về true - thằng some trả về true - không có trả về false
});

// some kiểm tra trong mảng có thành phần nào thoả mãn điều kiện không - nếu có trả về true - không có trả về false

// 5. Ngoài some ra còn every() - tất cả phải thoả điều kiện

const findUserUsingFilterAndEvery = users.filter((user) => {
  return user.tags.every((tag) => {
    return tag === "BBB"; // nếu có thằng nào thoả đúng không sai hoặc thừa thì mới trả về true
  });
});

// phải thoả đúng - đúng mà dư không chịu

// 6. reduce: ví dụ có 1 array chuyển hoá thành 1 object thì làm như nào

/*
Nhóm theo email

=> {
    [email]: {
        id: ....,
        email: ....
    }
}
*/

// reduce: có 2 tham số mặc định: 1 callback cái thứ 2 là giá trị khởi tạo
// mình đang muốn chuyển từ array sang object thì giá trị khơi tạo phải là object
// callback sẽ nhận vào 2 tham số - 1 acc là accumulate - tích luỹ - giá trị giữ lại từng vòng lặp
//                                - 2 cur là current - tham số mà nó đang loop qua - ở đây là current user nó đang loop qua.

// mỗi lần return nó sẽ được gán lại vào acc và acc là tham số thứ 2 của hàm reduce

const customUsersWithReduce = users.reduce((acc, cur) => {
  return { ...acc, [cur.email]: cur };
}, {});

console.log(customUsersWithReduce);

// object với key là email còn value là object

// reduce - tuỳ biến kiểu dữ liệu

// chuyển từ object thành array

const convertObjectToArray = Object.values(customUsersWithReduce).reduce(
  (acc, cur) => {
    return [...acc, cur.email];
  },
  []
);

console.log(convertObjectToArray);

const numbers = [1, 2, 3, 4, 5, 6, 555, 666, 777, 888];

const totals = numbers.reduce((acc, cur) => {
  return acc + cur;
}, 0);

// sau mỗi vòng lặp giá trị sẽ được tăng lên

/**
 * Vòng lặp 1: loop qua số 1 - acc bạn đầu sẽ là 0 cur sẽ là giá trị lập đầu tiên
 * 0 + 1 = 1 - lúc này accc được gán thành 1
 * Vòng lặp 2:
 * 1 + 2 = 3 - tiếp tục acc = 3
 *
 */
