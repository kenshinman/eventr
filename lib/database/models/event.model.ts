import {Schema, model, models} from 'mongoose'

export interface IEvent {
  _id: string;
  title: string;
  description?: string;
  location?: string;
  createdAt: Date;
  imageUrl: string;
  startDate: Date;
  endDate: Date;
  price: string;
  isFree: boolean;
  url: string;
  category: {_id: string, name: string};
  organizer: {_id: string, firstName: string, lastName: string};
}

const EventSchema = new Schema( {
  title: {type: String, required: true},
  description: {type: String, },
  location: {type: String},
  createdAt: {type: Date, default: Date.now},
  imageUrl: {type: String, required: true},
  startDate: {type: Date, default: Date.now},
  endDate: {type: Date, default: Date.now},
  price: {type: String, required: true},
  isFree: {type: Boolean, default: false},
  url: {type: String, required: true},
  category: {type: Schema.Types.ObjectId, ref: 'Category'},
  organizer: {type: Schema.Types.ObjectId, ref: 'User'},
} )

const Event = models.Event || model( 'Event', EventSchema )

export default Event;