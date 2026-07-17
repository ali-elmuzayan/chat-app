import type { Request, Response } from "express";

import Conversation from "../model/conversationModel.js";
import Message from "../model/messageModel.js";
import { catchAsync } from "../utils/handleErrors.js";

interface SendMessageBody {
  message?: string;
}

export const getMessages = catchAsync(async (req: Request<{ id: string }>, res: Response) => {
  const { id: receiverId } = req.params;
  const senderId = req.user._id;

  const conversation = await Conversation.findOne({
    members: { $all: [senderId, receiverId] },
  }).populate("messages");

  return res.status(200).json({
    data: {
      messages: conversation?.messages ?? [],
    },
    status: "success",
  });
});

// Send a message to a user with the specified ID:
export const sendMessage = catchAsync(async (req: Request, res: Response) => {
  const { message }: SendMessageBody = req.body;
  const { id: receiverId } = req.params;
  const senderId = req.user._id;

  if (!message) {
    return res.status(400).json({
      status: "fail",
      message: "Message is required",
    });
  }

  let conversation = await Conversation.findOne({
    members: { $all: [senderId, receiverId] },
  });

  if (!conversation) {
    conversation = await Conversation.create({
      members: [senderId, receiverId],
    });
  }

  const newMessage = await Message.create({
    receiverId,
    senderId,
    message,
  });

  conversation.messages.push(newMessage._id);
  await conversation.save();

  res.status(201).json({
    status: "success",
    message: "Message sent successfully",
    data: {
      message: newMessage,
    },
  });
});
// import type { Request, Response, NextFunction } from "express";
// import { catchAsync } from "../utils/handleErrors";
// import AppError from "../utils/appError";
// import conversation from "../model/conversationModel";
// import Message from "../model/messageModel";
// import User from "../model/userModel";

// // Send a message to a user with the specified ID
// export const sendMessage = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
//   const { message } = req.body;
//   const { id: receiverId } = req.params;
//   const senderId = req.user.id;

//   //TODO: check if the receiver is the recieiver ID is valid and exists in the database
//   const receiver = await User.findById(`${receiverId}`);
//   if (!receiver) {
//     return next(new AppError("User not found", 404));
//   }

//   let conversation = await conversation.findOne({
//     members: { $all: [senderId, receiverId] },
//   });

//   // let conversation = await conversation.findOne({
//   //   members: { $all: [senderId, receiverId] },
//   // });
//   // if (!conversation) {
//   conversation = await conversation.create({
//     members: [senderId, receiverId],
//   });
//   // }

//   const newMessage = await Message.create({
//     receiverId,
//     senderId,
//     text: message,
//   });

//   conversation.messages.push(newMessage._id);
//   await conversation.save();
// });
