import DateQueryModel from "../Models/Networking/DateQueryModel";

export default function createDateQuery(date: Date): DateQueryModel {
  const dateQuery: DateQueryModel = {
    Year: date.getFullYear(),
    Month: date.getMonth() + 1, // +1 because javascript starts counting months from 0 but C# DateTime doesn't
    Date: date.getDate()
  };

  return dateQuery;
}
