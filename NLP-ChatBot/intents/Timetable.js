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
const handleTimetable = async (req, res) => {
  console.log("COURSES INTENT");
  if (
    req.body.queryResult.queryText.toLowerCase().includes("computer science") ||
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
            text: ["For which year would you like to view the timetable?"],
          },
        },
      ],
      source: "iCourse",
    };
    res.send(response);
  } else {
    try {
      let year=extractNumber(req.body.queryResult.queryText);
      const findImg = await Image.find({
        $and: [
          { title: `${year} year` },
          { field: field },
          { intent: "Timetable" },
        ],
      });
      const response = {
        fulfillmentMessages: [
          {
            text: {
              text: [
                `This is the Class Schedule for Year ${year}.`,
              ],
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
    } catch (error) {
      console.log(error);
      res.status(500);
    }
  }
};
module.exports = handleTimetable;
