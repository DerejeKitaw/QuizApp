import * as mongoose from 'mongoose';

const questionSchema = new mongoose.Schema({
    questionId: String,
    question: String,
    imageName: String,
    option1: String,
    option2: String,
    option3: String,
    option4: String,
    answer: String,
});

const Question = mongoose.model('Question', questionSchema);

export default Question;
