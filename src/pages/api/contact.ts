import type { NextApiRequest, NextApiResponse } from "next";
import NextCors from "nextjs-cors";
import nodemailer from "nodemailer";

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "guilhermemagno09@gmail.com",
    pass: "pnwuirlypldurocb",
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

type Data = {
  message: string;
  status?: number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const name = req.body.firstName;
    const sobrenome = req.body.lastName; 
    const email = req.body.email;
    const phone = req.body.phone;
    const message = req.body.message;

    if (
      (!name || name.trim(" ") == " ",
      !email || !email.includes("@"),
      !phone || phone.trim(" ") === " ",
      !message || message.trim(" ") === " ")
    ) {
      return res
        .status(500)
        .json({ message: "Os campos não pode estar vazio!" });
    }

    const mail = {
      from: email,
      to: "guilhermemagno09@gmail.com",
      subject: "Envio Do Formulario De Contato - Portfolio",
      html: `
    <p>Nome: ${name } ${sobrenome}</p>
    <p>Email: ${email}</p>
    <p>Phone:  ${phone}</p>
    <p>Mensagem:  ${message}</p>
    `,
    };

    contactEmail.sendMail(mail, (error) => {
      if (error) {
        res.json(error);
      } else {
        res.status(200).json({ status: 200, message: "Email Enviado!" });
      }
    });

    await NextCors(req, res, {
      methods: ["POST"],
      origin: "*",
      optionsSuccessStatus: 200,
    });
  }
}
