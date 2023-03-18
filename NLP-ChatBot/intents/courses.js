const { response } = require("express");
const Image = require("../Models/Image");

let field = null;

const extractNumber = (str) => {
  let arr = str.split(" ");
  for (let i = 0; i < arr.length; i++) {
    if (!isNaN(parseInt(arr[i]))) {
      return parseInt(arr[i]);
    }
  }
  return null;
};
const handleCourses = async (req, res) => {
  console.log("COURSES INTENT");
  try {
    if (
      req.body.queryResult.queryText
        .toLowerCase()
        .includes("computer science") ||
      req.body.queryResult.queryText
        .toLowerCase()
        .includes("software engineering")
    ) {
      req.body.queryResult.queryText.toLowerCase().includes("computer science")
        ? (field = "CS")
        : (field = "SE");
      const response = {
        fulfillmentMessages: [
          {
            text: {
              text: [
                "For which semester would you like to view the course list?",
              ],
            },
          },
        ],
        source: "iCourse",
      };
      res.send(response);
    } else {
      let semester = extractNumber(req.body.queryResult.queryText);
      const findImg = await Image.find({
        $and: [{ title: `semester ${semester}` }, { field: field }],
      });
      console.log(findImg[0])
      // res.status(200).json({ findNote });
      const response = {
        fulfillmentMessages: [
          {
            text: {
              text: [`This is the Course List for Semester ${semester}.`],
            },
          },
          {
            payload: {
              richContent: [
                [
                  {
                    rawUrl: `${findImg[0].url}`,
                    accessibilityText: "Dialogflow across platforms",
                    type: "image",
                  },
                ],
              ],
            },
          },
        ],
      };
      res.send(response);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }

  // const newImage = new Image({
  //     title: req.body.title,
  //     url: req.body.url,
  //     field:req.body.field,
  //     intent:req.body.intent
  //   });
  //   newImage.save().then((_, rej) => {
  //     if (rej) {
  //       console.log(rej);
  //     } else {
  //     //   res.send({
  //     //     message: "successfully uploaded",
  //     //     imageData: newImage.image,
  //     //   });
  //     console.log(_)
  //     res.status(200).send("DOne");
  //     }
  //   });
};

module.exports = handleCourses;
