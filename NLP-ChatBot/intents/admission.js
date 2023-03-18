const handleAdmission=async(req,res)=>{
    console.log("ADMISSION INTENT");
    const response = {
            fulfillmentMessages: [
                {text: {
                    text: [req.body.queryResult.queryText.split(" ")[0].split("%")[0]>=78?"Congrats, you are eligible for admission in UBIT.":"Sorry, you are not eligible for admission in UBIT."]
                  }},
              {
                payload: {
                    "richContent": [
                        [
                          {
                            "rawUrl": "https://lh3.googleusercontent.com/p/AF1QipMUI75tW0RVu8ugg6aO2sHupScasjKDoevrgjBD=s1360-w1360-h1020",
                            "accessibilityText": "Dialogflow across platforms",
                            "type": "image"
                          },
                          {
                            "type": "info",
                            "subtitle": "Click here to visit the Admission Portal",
                            "actionLink": "http://uokadmission.edu.pk"
                          },
                          
                        ]
                      ]
                }
              }
            ]
          };
    res.send(response)
}

module.exports = handleAdmission;