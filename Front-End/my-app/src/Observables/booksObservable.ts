import { BehaviorSubject } from "rxjs";
import BookModel from "../Models/Book/BookModel";
import ShouldRenderOrAppendModel from "../Models/ShouldRenderOrAppendModel";

export const downloadedBooks: BookModel[] = [];

export const shouldRenderOrAppend = new BehaviorSubject<ShouldRenderOrAppendModel>({ value: true, Books: [...downloadedBooks] });
