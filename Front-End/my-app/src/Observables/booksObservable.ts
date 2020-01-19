import { BehaviorSubject } from "rxjs";
import BookModel from "../Models/Book/BookModel";

const downloadedBooks = new BehaviorSubject<BookModel[]>([]);
