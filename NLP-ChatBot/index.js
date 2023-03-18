const connectMongo = require("./db");
const express = require("express");
const path = require("path");
const cors = require("cors");
const handleAbout = require("./intents/about");
const { response } = require("express");
const app = express();
const port = 5000;

app.use(
  cors({
    origin: "http://localhost:5500",
  })
);
connectMongo();
console.log(path.join(__dirname, "public\\Semester1.png"));
console.log("E:NLP-ChatBotpublic");
app.use(express.json());

let admissions = false;
let courses = false;
let timetable = false;
app.post("/", (req, res) => {
  console.log("________________________",req.body.queryResult.queryText.toLowerCase());
  if (req.body.queryResult.queryText.toLowerCase().includes("admission")) {
    admissions = true;
    courses = false;
    timetable = false;
    console.log("inside admissions");
    const response = {
      fulfillmentMessages: [
        {
          text: {
            text: ["What was your Intermediate percentage?"],
          },
        },
      ],
      source: "UBIT-Chatbot",
    };
    res.send(response);
  } else if (req.body.queryResult.queryText.toLowerCase().includes("course")) {
    admissions = false;
    courses = true;
    timetable = false;
    console.log("inside courses");
    const response = {
      fulfillmentMessages: [
        {
          text: {
            text: ["You are a student of :"],
          },
        },
        {
          payload: {
            richContent: [
              [
                {
                  type: "chips",
                  options: [
                    {
                      text: "Computer Science",
                    },
                    {
                      text: "Software Engineering",
                    },
                  ],
                },
              ],
            ],
          },
        },
      ],
    };

    res.send(response);
  } else if (req.body.queryResult.queryText.toLowerCase().includes("timetable") || req.body.queryResult.queryText.toLowerCase().includes("schedule")) {
    admissions = false;
    courses = false;
    timetable = true;
    console.log("inside timetable");
    const response = {
      fulfillmentMessages: [
        {
          text: {
            text: ["You are a student of :"],
          },
        },
        {
          payload: {
            richContent: [
              [
                {
                  type: "chips",
                  options: [
                    {
                      text: "Computer Science",
                    },
                    {
                      text: "Software Engineering",
                    },
                  ],
                },
              ],
            ],
          },
        },
      ],
    };

    res.send(response);
  } else {
    if (admissions) {
      handleAdmission = require("./intents/admission");
      handleAdmission(req, res);
    } else if (courses) {
      handleCourses = require("./intents/courses");
      handleCourses(req, res);
    } else if (timetable) {
      handleTimetable = require("./intents/Timetable");
      handleTimetable(req, res);
    }
  }
  console.log("Request Received!");
  res.status(200);












  // console.log(req.body.queryResult.queryText)
  // const response = {
  //     fulfillmentText: "OK Done!",
  //     fulfillmentMessages: [
  //       {
  //         text: {
  //           text: ["OKay"]
  //         }
  //       }
  //     ],
  //     source: "iCourse"
  //   };
  // const response = {
  //     fulfillmentMessages: [
  //       {
  //         payload: {
  //             "richContent": [
  //                 [
  //                   {
  //                     "rawUrl": "https://lh3.googleusercontent.com/wG5rKU-jcCXzydjgGkRLgpHGVZUbotCTpziPb14yrudQRnd1cwDGtI7zybWtvGjtQRM30tEX0n3MCnAEMjPXXM3gNscfCD3mtTqyJZIKGttIHJ2_VadgVM1l_fxTQ91EOU8vjPquNUxvbAhodQ2taKS5jGELURTadWXdBZq_3rrwmOkPLvjPim-a50rgSqGaOyIyQSz1VGWTJsjhl3uvkJhGzrY7r1veUDC7cObEEK-Cx3eCZFinA61EwqDHRWImKWouJc-yiuvCrUUq_TuFY1xxtZ0xJSr6QwcHjvrJXjImxAHJJj33cF8UDFUPDtlEu4jCJWprbzmdM6ahiekEu2SNzZ0Rgr3tByAkKQG0L621Oq98-SCkH5ESEJmoAqH50Z4HXl6NtCma1Qj_9tEny8Lcb0ynVp1hdfwH2EPNm1IQwgKvCQiPobNv5BsnYr4gGnc_brKKVISOI7IbuSwtDmnAJdsRYi5PUfYBR7PB9963pra4MGqhZ7DHYoF0cZQLBYVg0soJZILSEi00TKwBEh9YNST1SOlOj_6_5C02SaMhQRmRXqcKlL2CdDl2aUUMA4CzF-1u--FStZ_b1TUITgeZ8TxykMfny4F8s-_L43rE-BVcNn3mwdsmc9_TQZXgZPFPbCvtI-6zYZVDWX6FXN5lx4ky5t9qCLqJoEPROf8FNH1GvxQteMMflNtXlpvPYa3OSbFEFn0cv4WvGuGxxxxXlkRLyONK5Obx5t-LUcral9W9foNuyoYNMHvySnEB--BCVqOQOOVMsLvQlcK9dMY5zRoJkhg-xugt1hHKT58lDWYkVgaLk3TJiQI2eGBk53djmOHWcqRYUjX0kqp4uYB1QGONZEjOc-N2S87yQYQYxKc2MjTpKdN-ThDh-hPYZslMOFO8KbVLrXqo7VdeCQMqhW08eeZzNdo6JODF_k2YcVDHSo2agjynvkPlPIpAkYL0830GhwxPfDz0BgI=w654-h600-s-no?authuser=0",
  //                     // "rawUrl": "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
  //                     // "rawUrl": `file://${path.join(__dirname, "\public\\Semester1.png")}`,
  //                     "accessibilityText": "Dialogflow across platforms",
  //                     "type": "image"
  //                   },
  //                   {
  //                     "type": "info",
  //                     "subtitle": "Click here to visit Jinnahhhh Airport ",
  //                     "actionLink": "https://karachiairport.com.pk/schedule.aspx"
  //                   },
  //                   {
  //                     "type": "chips",
  //                     "options": [
  //                       {
  //                         "text": "Bookings"
  //                       }
  //                     ]
  //                   }
  //                 ]
  //               ]
  //         }
  //       }
  //     ]
  //   };
  // if (req.body.queryResult.queryText==="NLP") {
  //     return res.status(404)
  // }
  // res.json(response);
  // res.status(200)
  // Send the response object back to Dialogflow
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
