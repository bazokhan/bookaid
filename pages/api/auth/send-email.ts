import Iron from '@hapi/iron';
import nodemailer from 'nodemailer';
import { NextApiRequest, NextApiResponse } from 'next';

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const { email } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: `${process.env.EMAIL}`,
      pass: `${process.env.PASSWORD}`
    }
  });

  // Create a session object with a max age that we can validate later
  const obj = { email };
  const token = await Iron.seal(
    obj,
    process.env.NEXT_PUBLIC_TOKEN_SECRET,
    Iron.defaults
  );

  const mailOption = {
    from: `${email}`,
    to: `${email}`,
    subject: `Reset password ${email}`,
    text: `${process.env.VERCEL_URL}/login/reset-password/${token}`
  };

  transporter.sendMail(mailOption, (err: Error) => {
    if (err) {
      // eslint-disable-next-line no-console
      console.log({ err });
      res.status(400).json(err);
    } else {
      res.send('success');
    }
  });
};
