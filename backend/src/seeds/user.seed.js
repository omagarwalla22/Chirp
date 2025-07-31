import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";

config();

const seedUsers = [
  // Female Users

  {
    email: "riya.grover@example.com",
    fullName: "Riya Grover",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/21.jpg",
  },
  {
    email: "aditi.sharma@example.com",
    fullName: "Aditi Sharma",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/22.jpg",
  },
  {
    email: "sonia.kapoor@example.com",
    fullName: "Sonia Kapoor",
    password: "12345r6",
    profilePic: "https://randomuser.me/api/portraits/women/23.jpg",
  },
  {
    email: "avani.patel@example.com",
    fullName: "Avani Patel",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/24.jpg",
  },
  {
    email: "isha.verma@example.com",
    fullName: "Isha Verma",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/25.jpg",
  },
  {
    email: "mira.agarwal@example.com",
    fullName: "Mira Agarwal",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/26.jpg",
  },
  {
    email: "charvi.nair@example.com",
    fullName: "Charvi Nair",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/27.jpg",
  },
  {
    email: "amisha.reddy@example.com",
    fullName: "Amisha Reddy",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/28.jpg",
  },

  // Male Users
  {
    email: "jay.mehta@example.com",
    fullName: "Jay Mehta",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/21.jpg",
  },
  {
    email: "arjun.singh@example.com",
    fullName: "Arjun Singh",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    email: "rohan.das@example.com",
    fullName: "Rohan Das",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/23.jpg",
  },
  {
    email: "laksh.malhotra@example.com",
    fullName: "Laksh Malhotra",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/24.jpg",
  },
  {
    email: "harsh.jain@example.com",
    fullName: "Harsh Jain",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/25.jpg",
  },
  {
    email: "advait.iyer@example.com",
    fullName: "Advait Iyer",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/26.jpg",
  },
  {
    email: "mohan@example.com",
    fullName: "Mohan Batra",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/27.jpg",
  },
];


const seedDatabase = async () => {
  try {
    await connectDB();

    await User.insertMany(seedUsers);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

// Call the function
seedDatabase();