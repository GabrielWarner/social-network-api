//importing schema and model from mongoose object
const { Schema, model } = require('mongoose');
//validation function to check for email
var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};
// Schema to create Post model
const userSchema = new Schema(
    {
      username: {type: String, unique: true, required: true, trim: true},
      email: {type: String, unique: true, required: true,validate: [validateEmail, 'Please fill a valid email address'], match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']},
      thoughts: [{ type: Schema.Types.ObjectId, ref: 'thought' }],
      friends: [{ type: Schema.Types.ObjectId, ref: 'user' }],
    },
    {
      toJSON: {
        virtuals: true,
      },
      id: false,
    }
  );
// Create a virtual property `friendCount` that gets the amount of friends per User
  userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
  });

  // Initialize our Post model
const User = model('user', userSchema);

module.exports = User;