import mongoose, { Document, Schema } from "mongoose";

interface IConversation extends Document {
  members: mongoose.Types.ObjectId[];
  messages: mongoose.Types.ObjectId[];
}

const conversationSchema = new Schema<IConversation>(
  {
    members: [
      {
        ref: "User",
        required: true,
        type: mongoose.Schema.ObjectId,
      },
    ],
    messages: [
      {
        default: [],
        ref: "Message",
        type: mongoose.Schema.ObjectId,
      },
    ],
  },
  { timestamps: true },
);

const Conversation = mongoose.model<IConversation>("Conversation", conversationSchema);

export default Conversation;
