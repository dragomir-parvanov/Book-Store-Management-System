import { BehaviorSubject } from "rxjs";
import BookQueryModel from "../Models/Networking/BookQueryModel";

const currentBookQuery = new BehaviorSubject<BookQueryModel>({});
export default currentBookQuery;
