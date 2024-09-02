import UserModel from '@/model/user';
import { getServerSession } from 'next-auth/next';
import dbConnect from '@/lib/dbConnect';
import { User } from 'next-auth';
import { Message } from '@/model/user';
import { NextRequest } from 'next/server';
import { authOptions } from '../../auth/[...nextauth]/options';

export async function DELETE(                               //need to accept dynamic parameters
  request: Request,
  { params }: { params: { messageid: string } }
) {
  const messageId = params.messageid;
  await dbConnect();
  const session = await getServerSession(authOptions);
  const _user: User = session?.user;


  if (!session || !_user) {                    //if the user is not authenticated, return a 401 status code
    return Response.json(
      { success: false, message: 'Not authenticated' },
      { status: 401 }
    );
  }

  try {                                                     //pull operator removes all instances of a value from an array
    const updateResult = await UserModel.updateOne(
      { _id: _user._id },                                 //find the user by id
      { $pull: { messages: { _id: messageId } } }          //remove the message from the user's messages array
    );

    if (updateResult.modifiedCount === 0) {
      return Response.json(
        { message: 'Message not found or already deleted', success: false },
        { status: 404 }
      );
    }

    return Response.json(
      { message: 'Message deleted', success: true },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error deleting message:', error);
    return Response.json(
      { message: 'Error deleting message', success: false },
      { status: 500 }
    );
  }
}