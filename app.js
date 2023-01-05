const  express=require("express");
const validator = require("validator");
const bodyParser =require("body-parser");

const app=express();
const mongoose=require("mongoose");

mongoose.set('strictQuery', true);

const { stringify } = require("querystring");
app.use(express.json());
mongoose.connect("mongodb://127.0.0.1:27017/Manojsir_feedbackform",{


//useNewUrlParser:true,
useUnifiedTopology:true
},(err)=>{
if(!err)
{
    console.log("connected to db")
}

else
{
    console.log(err)
}
})




//SCHEMA

const feedbackschema =mongoose.Schema({
    
  
   
    
    The_course_as_a_whole_was:{
        type: [String],
            required: false,
            
     },
     The_course_content_was:{
        type: [String],
            required: true,
            enum: ['Excellent', 'Very Good', 'Good', 'Fair','Poor','Very Poor']
     },
     The_instructor_contribution_to_the_course_was:{
        type: [String],
            required: true,
            enum: ['Excellent', 'Very Good', 'Good', 'Fair','Poor','Very Poor']
     },
     The_instructor_effectiveness_in_teaching_the_subject_matte_was:{
        type: [String],
            required: true,
            enum: ['Excellent', 'Very Good', 'Good', 'Fair','Poor','Very Poor']
     },
     Course_Organization_was_Clarity_of_instructor_voice_was:{
        type: [String],
            required: true,
            enum: ['Excellent', 'Very Good', 'Good', 'Fair','Poor','Very Poor']
     },
     Explanations_by_instructor_were:{
        type: [String],
            required: true,
            enum: ['Excellent', 'Very Good', 'Good', 'Fair','Poor','Very Poor']
     },
     Instructor_use_of_examples_and_illustrations_was:{
        type: [String],
            required: true,
            enum: ['Excellent', 'Very Good', 'Good', 'Fair','Poor','Very Poor']
     },
     Quality_of_questions_or_problems_raised_by_the_instructor_was:{
        type: [String],
            required: true,
            enum: ['Excellent', 'Very Good', 'Good', 'Fair','Poor','Very Poor']
     },
     Student_confidence_in_instructor_knowledge_was:{
        type: [String],
            required: true,
            enum: ['Excellent', 'Very Good', 'Good', 'Fair','Poor','Very Poor']
     },

     Instructor_enthusiasm_was:{
        type: [String],
            required: true,
            enum: ['Excellent', 'Very Good', 'Good', 'Fair','Poor','Very Poor']
     },

     Encouragement_given_to_students_to_participate_was:{
        type: [String],
            required: true,
            enum: ['Excellent', 'Very Good', 'Good', 'Fair','Poor','Very Poor']
     },

     

     Answers_to_student_questions_were:{
        type: [String],
            required: true,
            enum: ['Excellent', 'Very Good', 'Good', 'Fair','Poor','Very Poor']
     },

     Availability_of_extra_help_when_needed_was:{
        type: [String],
            required: true,
            enum: ['Excellent', 'Very Good', 'Good', 'Fair','Poor','Very Poor']
     },

     Use_of_class_time_was:{
        type: [String],
            required: true,
            enum: ['Excellent', 'Very Good', 'Good', 'Fair','Poor','Very Poor']
     },

     instructor_interest_in_student_progress_was:{
        type: [String],
            required: true,
            enum: ['Excellent', 'Very Good', 'Good', 'Fair','Poor','Very Poor']
     },

     Amount_you_learned_was_Relavence_of_course_content_was:{
        type: [String],
            required: true,
            enum: ['Excellent', 'Very Good', 'Good', 'Fair','Poor','Very Poor']
     },

     Crading_techniques_were:{
        type: [String],
            required: true,
            enum: ['Excellent', 'Very Good', 'Good', 'Fair','Poor','Very Poor']
     },
     Amount_of_assigned_work_was:{
        type: [String],
            required: true,
            enum: ['Excellent', 'Very Good', 'Good', 'Fair','Poor','Very Poor']
     },
     Charity_of_student_requints:{
        type: [String],
            required: true,
            enum: ['Excellent', 'Very Good', 'Good', 'Fair','Poor','Very Poor']
     },
     
     

    }

)

const monmodel=mongoose.model("feedback",feedbackschema);




//post



app.post("/post",async(req,res)=>{
  try{
    console.log("inside post function")

    const data =new monmodel({

        
        The_course_as_a_whole_was:req.body.The_course_as_a_whole_was,
        The_course_content_was:req.body.The_course_content_was,
   
        The_instructor_contribution_to_the_course_was:req.body.The_instructor_contribution_to_the_course_was,
        The_instructor_effectiveness_in_teaching_the_subject_matte_was:req.body.The_instructor_effectiveness_in_teaching_the_subject_matte_was,
        Course_Organization_was_Clarity_of_instructor_voice_was:req.body.Course_Organization_was_Clarity_of_instructor_voice_was,

        Explanations_by_instructor_were:req.body.Explanations_by_instructor_were,
        Instructor_use_of_examples_and_illustrations_was:req.body.Instructor_use_of_examples_and_illustrations_was,


        Quality_of_questions_or_problems_raised_by_the_instructor_was:req.body.Quality_of_questions_or_problems_raised_by_the_instructor_was,
        Student_confidence_in_instructor_knowledge_was:req.body.Student_confidence_in_instructor_knowledge_was,
   
        Instructor_enthusiasm_was:req.body.Instructor_enthusiasm_was,
        Encouragement_given_to_students_to_participate_was:req.body.Encouragement_given_to_students_to_participate_was,
        Answers_to_student_questions_were:req.body.Answers_to_student_questions_were,

        Availability_of_extra_help_when_needed_was:req.body.Availability_of_extra_help_when_needed_was,
        Use_of_class_time_was:req.body.Use_of_class_time_was,

        instructor_interest_in_student_progress_was:req.body.instructor_interest_in_student_progress_was,
        Amount_you_learned_was_Relavence_of_course_content_was:req.body.Amount_you_learned_was_Relavence_of_course_content_was,
    
        Crading_techniques_were:req.body.Crading_techniques_were,
        Amount_of_assigned_work_was:req.body.Amount_of_assigned_work_was,
    
        Charity_of_student_requints:req.body.Charity_of_student_requints,
   
    
    

    
  


    
 

});

const val=await data.save();
res.json(val);
}
catch (error){
    console.log(error);
    res.send(error);
}  
});





app.listen(3000,()=>{
console.log("port is running at 3000")
})