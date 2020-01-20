import { BehaviorSubject } from "rxjs";
import BookModel from "../Models/Book/BookModel";
import RenderOrAppendModel from "../Models/RenderOrAppendModel";

export const downloadedBooks: BookModel[] = [];

export const renderOrAppend = new BehaviorSubject<RenderOrAppendModel>({ value: true, Books: [...downloadedBooks] });
