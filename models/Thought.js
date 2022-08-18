const mongoose = require('mongoose');


const reactionSchema = new mongoose.Schema({
    reactionId: {type: ObjectId, default: ObjectId},
    reactionBody: {type: String, required: true, maxlength: 280,},
    username: {type: String, required: true,},
    createdAt: { type: Date, default: Date.now },
  });

const thoughtSchema = new Schema (
    {
        thoughtText: {type:String, required: true, minlength: 1, maxlength: 180,},
        //TODO: FORMAT DATE TIME
        createdAt: { type: Date, default: Date.now },
        username: {type: String, required: true,},
        reactions: [reactionSchema]
    }
)

  // Initialize our Post model
  const Thought = model('thought', thoughtSchema);

  module.exports = Thought;