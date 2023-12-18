import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI

let cached = ( global as any ).mongoose || {conn: null, promise: null}

export const connectToDatabase = async () => {
  if ( cached.conn ) {
    return cached.conn
  }

  const MONGODB_URI = process.env.MONGODB_URI;

  if ( !MONGODB_URI ) {
    throw new Error( 'Please define the MONGODB_URI' )
  }

  cached.promise = cached.promise || mongoose.connect( MONGODB_URI, {
    dbName: "Cluster0",
    bufferCommands: false,
  } )

  cached.conn = await cached.promise
  return cached.conn
}