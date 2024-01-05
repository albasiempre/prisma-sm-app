const express = require("express");
const app = express();
const authRoute = require("./routers/auth");
const postsRoute = require("./routers/posts");
const usersRoute = require("./routers/users");
const cors = require("cors");

require("dotenv").config();


const PORT = 5050;

// 新規ユーザー登録API
// app.post("/api/auth/register", async (req, res) => {
//   const { username, email, password } = req.body;

//   const hashedPassword = await bcrypt.hash(password, 10);

//   const user = await prisma.user.create({
//     data: {
//       username,
//       email,
//       password: hashedPassword,
//     },
//   });
//   return res.json({ user });
// });

// ユーザーログインAPI

// app.post("/api/auth/login", async(req,res) => {
//   const { email, password } = req.body;
//   const user = await prisma.user.findUnique({ where: { email }});

//   if(!user) {
//     return res.status(401).json({ error: "メールアドレスかパスワードが間違っています。"})
//   }
//   const isPasswordValid = await bcrypt.compare(password, user.password);

//   if(!isPasswordValid) {
//     return res.status(401).json({ error: "そのパスワードが間違っています。"})
//   }


//   const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, {
//     expiresIn: "1d",
//   })

//   return res.json({ token })
// })

app.use(cors());
app.use(express.json());
app.use("api/auth", authRoute);
app.use("api/posts", postsRoute);
app.use("api/users", usersRoute);
app.listen(PORT, () => console.log(`server is running on Port ${PORT}`));
