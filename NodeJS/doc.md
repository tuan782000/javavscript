yarn add express dotenv cors

cors: quản lý được các https nào được chọc vào server để thao tác với data

yarn add nodemon -D

```js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();

// vai trò cors chặn mọi thằng request tới - thoả mãn mới cho vào
app.use(
  cors({
    origin: process.env.CLIENT_URL, // chỉ cho PORT 3000 truy cập - có thể bổ sung thêm
    methods: ["GET", "POST", "PUT", "DELETE"], // cho phép CRUD
  })
);

app.use(express.json()); // đọc được data client gửi lên
app.use(
  express.urlencoded({
    extended: true,
  })
); // đọc được mảng và object từ client gửi lên - convert mảng đó thành chuỗi json

// Tạo 1 route
// req: phía user (client) gửi
// res: phía server phản hồi
app.use("/", (req, res) => {
  return res.send("Server on");
});

const PORT = process.env.PORT || 8888;

const listener = app.listen(PORT, () => {
  // console.log(`Server is running on ${PORT}`);
  // http://localhost:7820/
  console.log(
    `Server is running on: http://localhost:` + listener.address().port
  );
});
```

src

- controllers: điều hướng - và gọi services
- models: chứa các model thực thể
- routes: tuyến đường
- services: viết chức năng ở đây

```js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import routes from "./src/routes/index.js"; // tạo đường dẫn

dotenv.config();
const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL, // chỉ cho PORT 3000 truy cập - có thể bổ sung thêm
    methods: ["GET", "POST", "PUT", "DELETE"], // cho phép CRUD
  })
);

app.use(express.json()); // đọc được data client gửi lên
app.use(
  express.urlencoded({
    extended: true,
  })
);

// Tạo route
app.use("/", routes);

const PORT = process.env.PORT || 8888;

const listener = app.listen(PORT, () => {
  console.log(
    `Server is running on: http://localhost:` + listener.address().port
  );
});
```

```js
import express from "express";
import { getUser } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", getUser);

export default router;


import express from "express";
import { getUser } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", getUser);

export default router;

```

```js
const getUser = async (req, res) => {
  return res.send("<h1>Users</h1>");
};

export { getUser };
```
