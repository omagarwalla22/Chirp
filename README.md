

Chirp
------------------------
A real-time chat app solving the lack of seamless instant communication in web platforms by leveraging the MERN
stack and Socket.IO. Implemented secure JWT-based auth and designed a modern UI with Tailwind CSS and
DaisyUI to ensure responsiveness and user clarity.

--------------------------------------------------------------------------------------


- Before execution, 
Setup CLOUDINARY account followed by setting .env file in backend folder.

-  Put the following in .env file:






MONGODB_URI=your_mongodb_connection_string

PORT= 5006
(Put the same Port in other files as well)

JWT_SECRET=your_jwt_secret

NODE_ENV=development

- Navigate to API keys in profile section of CLOUDINARY to get the following data:

CLOUDINARY_CLOUD_NAME=your_cloud_name

CLOUDINARY_API_KEY=your_api_key

CLOUDINARY_API_SECRET=your_api_secret



------------------------------------------------------------------------------
 Initialize the backend
 ---------------------------------------
npm run build

-----------------------------------------------------------------------------
Run backend
 ------------------------------------------
npm run start

-  Output will be :
   
Server Running at PORT ....

MongoDB connected: .....

-----------------------------------------------------------------------------
Initialize the frontend
-------------------------------------------

cd frontend

npm install

-----------------------------------------
 Run the App
 -------------------------

npm run dev

------------------

  


