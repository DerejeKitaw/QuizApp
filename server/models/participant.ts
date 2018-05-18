import * as mongoose from 'mongoose';

const participantSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true, lowercase: true, trim: true },
  score: String,
  timeSpent: String
});


const Participant = mongoose.model('Participant', participantSchema);

export default Participant;
