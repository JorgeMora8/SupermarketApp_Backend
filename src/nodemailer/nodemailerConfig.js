import nodemailer from "nodemailer"
import path from "path"
import hbs from "nodemailer-express-handlebars";
import { userService } from "../apiArquitecture/Users/UserService.js";
import { ADMIN_EMAIL } from "../config/Env.js";

 let transporter = nodemailer.createTransport({
    service: "gmail", 
    port: 587,
    auth: {
      user: "jorgeandresmm2002@gmail.com", 
      pass: "xsuutqaoqqaztzzk", 
    },
  });

  const handlebarsOptions = { 
    viewEngine: {
      partialsDir: path.resolve("./views/"),
      defaultLayout: false 
    }, 
    viewPath: path.resolve("./views/"),
  };

  transporter.use("compile", hbs(handlebarsOptions))

  export async function sendEmail(email, products, total){ 

    const user = await userService.getByEmail(email)

      await transporter.sendMail({ 
        from:"Food Market", 
        to:ADMIN_EMAIL, 
        subject:"Purchase", 
        template:"email",
        context:{ 
          products: products, 
          total:total
        }
      })

      await transporter.sendMail({ 
        from:"Food Market", 
        to:email, 
        subject:"Purchase", 
        template:"email",
        context:{ 
          products: products, 
          total:total
        }
      })
}


