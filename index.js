import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

const FULL_NAME = "amitesh mishra"; // lowercase
const DOB = "06032004"; // ddmmyyyy
const EMAIL = "amiteshmishraoff@gmail.com";
const ROLL_NUMBER = "22BAI10038";

// alternating caps for reversed string
function alternatingCapsReverse(str) {
  let reversed = str.split("").reverse().join("");
  let result = "";
  for (let i = 0; i < reversed.length; i++) {
    if (i % 2 === 0) {
      result += reversed[i].toUpperCase();
    } else {
      result += reversed[i].toLowerCase();
    }
  }
  return result;
}

// POST route
app.post("/bfhl", (req, res) => {
  try {
    const inputArray = req.body.data;

    if (!Array.isArray(inputArray)) {
      return res.status(400).json({
        is_success: false,
        message: "Invalid input format. 'data' must be an array.",
      });
    }

    let even_numbers = [];
    let odd_numbers = [];
    let alphabets = [];
    let special_characters = [];
    let sum = 0;
    let alphabetsConcat = "";

    inputArray.forEach((item) => {
      if (!isNaN(item) && item.trim() !== "") {
        // It's a number
        let num = parseInt(item, 10);
        if (!isNaN(num)) {
          if (num % 2 === 0) {
            even_numbers.push(item);
          } else {
            odd_numbers.push(item);
          }
          sum += num;
        }
      } else if (/^[a-zA-Z]+$/.test(item)) {
        // It's an alphabet string
        alphabets.push(item.toUpperCase());
        alphabetsConcat += item;
      } else {
        // Special character
        special_characters.push(item);
      }
    });

    const concat_string = alternatingCapsReverse(alphabetsConcat);

    return res.status(200).json({
      is_success: true,
      user_id: `${FULL_NAME}_${DOB}`,
      email: EMAIL,
      roll_number: ROLL_NUMBER,
      odd_numbers,
      even_numbers,
      alphabets,
      special_characters,
      sum: sum.toString(),
      concat_string,
    });
  } catch (error) {
    return res.status(500).json({
      is_success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
});

// Root route
app.get("/", (req, res) => {
  res.send("API is working! Use POST /bfhl");
});

// Server start
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
