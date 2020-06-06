const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const http = require("http");
const path = require("path");
const router = express.Router();
const exphs = require("express-handlebars");
const nodemailer = require("nodemailer");

// set up view engines
app.engine("handlebars", exphs());
app.set("view engine", "handlebars");

router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

router.get("/services", function (req, res) {
  res.sendFile(path.join(__dirname + "/services.html"));
});

// bodyparser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// static folder
app.use(express.static(path.join(__dirname, "public")));

//add the router
app.use("/", router);
// set port
const port = process.env.PORT || "9000";
app.set("port", port);

const server = http.createServer(app);
server.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

// create a post request
app.post("/send", (req, res) => {
  console.log(req.body);

  // nodemailer
  // async..await is not allowed in global scope, must use a wrapper
  async function main() {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "testingdevice36",
        pass: "testingdevice002",
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"CLARITY360 HUB 👻" <cv@clarity360hub.com>',
      to: "deomolara@yahoo.com, bimzyb@gmail.com",
      subject: "Clarity360 Hub CV review ✔", // Subject line
      text: "Please review my CV. My details are below:", // plain text body
      html: `<p>Please review my CV. My details are below</p>
    <h3>Contact Details</h3>
    <ul>
       <li>First Name: ${req.body.first}</li>
       <li>Last Name: ${req.body.last}</li>
       
    </ul>
    <h3>CV</h3>
    ${req.body.file}
   `, // html body
      attachments: [
        {
          path: "public/images/logo.jpeg",
        },
      ],
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    //   refreshing the page
    //  res.render("/index.html", { layout: false });
  }

  main().catch(console.error);
});
