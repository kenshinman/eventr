"user server"

import {CreateUserParams} from "@/types"
import User from "../database/models/user.models"
import {handleError} from "../utils"
import {connectToDatabase} from "../database"

export const createUser = async ( user: CreateUserParams ) => {
  try {
    await connectToDatabase();
    const newUser = await User.create( user )
    await newUser.save()

    return JSON.parse( JSON.stringify( newUser ) )
  } catch ( error ) {
    handleError( error )
  }
}