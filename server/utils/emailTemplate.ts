export const generateEmailHTML = (
  message: string,
  phoneNumber: string,
  email: string
) => {
  return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Message Received</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }
          .container {
            background-color: #f9f9f9;
            border: 1px solid #e0e0e0;
            border-radius: 5px;
            padding: 20px;
          }
          h1 {
            color: #2c3e50;
            text-align: center;
          }
          .message, .phone {
            background-color: #ffffff;
            border: 1px solid #e0e0e0;
            border-radius: 5px;
            padding: 15px;
            margin-bottom: 20px;
          }
          .label {
            font-weight: bold;
            color: #2c3e50;
            margin-bottom: 5px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>New Message Received</h1>
          <div class="message">
            <div class="label">Message:</div>
            <div>${message}</div>
          </div>
          <div class="phone">
            <div class="label">Phone Number:</div>
            <div>${phoneNumber || "Not provided"}</div>
          </div>
          <div class="phone">
            <div class="label">Who Send you :</div>
            <div>${email}</div>
          </div>
        </div>
      </body>
      </html>
    `;
};
