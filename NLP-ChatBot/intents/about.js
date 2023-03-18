const handleAbout=async(req,res)=>{
    console.log("ADMISSION INTENT")
    const response = {
      fulfillmentMessages: [
        {
          text: {
            text: ["UBIT, also known as Umaer Basha Institute of Information and Technology, is a leading educational institution that offers various programs in computer science and software engineering at the BS, MS, and PHD levels. Our team comprises experienced and dedicated staff who are committed to providing our students with a top-quality education that is continuously updated with the latest technology trends. We believe in empowering our students by offering them numerous career opportunities and collaborating with reputed organizations to provide comprehensive counseling services."]
          }
        }
      ],
      source: "iCourse"
    };
    res.send(response)

}

module.exports = handleAbout;