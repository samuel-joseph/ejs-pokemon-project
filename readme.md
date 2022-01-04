Link to my game:
https://stark-falls-07166.herokuapp.com/

in express

start with
-npm init

- this installs package.json (package.json is the blueprint of entire app)
  -npm install express
- installed express dependency
  -npm install ejs

`test string ${variable}`

- this is a template literal

HEROKU DEPLOY

- in your main file add const port = process.env.PORT || 3400;
- heroku login
- need to initialize git first in the directory
- git init
- heroku create
- git add .
- git commit "..."
- git push heroku main

Session Storage:

- install body-parser
- create form in your home route

Setup:

- (not requiring to use express-generator in project)
- npx express-generator routez --view=ejs
- cd routez
- npm install

Difference between index and users router:

- indexRouter
  - app.use('/', indexRouter);
- usersRouter

  - app.use('/users', usersRouter);

  Application:

- in your application
- in index.js
  app.use(express.urlencoded({extended: true}));
  app.use(express.json())

  app.get('/',(req,res)=>{
  res.render("index");
  })
  app.post("/signup", (req,res)=>{
  const user = req.body.username;
  res.send(`Welcome ${user}`);
  })

- This is in index.ejs
<form action="/signup" method="POST">
<input type="text" name="username" placeholder="What is your username?" />
<input type="password" name="password" placeholder="What is your password?" />
<input type="submit" value="sign up!" />
</form>

- npm install express-session

app.get("/", (req, res) => {
const session_username = req.session ? req.session.username : "user not set";
res.render("index", { user: session_username });
});

app.post("/signup", (req, res) => {
const user = req.body.username;
req.session.username = user;
res.redirect("/");
});

- Getting login to work with password ( using dummy data )
- npm i querystring
