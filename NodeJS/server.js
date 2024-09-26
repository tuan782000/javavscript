import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import routes from "./src/routes/index.js";

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
// app.use("/", (req, res) => {
//   return res.send("Server on");
// });
app.use("/", routes);

const PORT = process.env.PORT || 8888;

const listener = app.listen(PORT, () => {
  // console.log(`Server is running on ${PORT}`);
  // http://localhost:7820/
  console.log(
    `Server is running on: http://localhost:` + listener.address().port
  );
});
