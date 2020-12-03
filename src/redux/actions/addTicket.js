export const AddMoreToTicket = "AddMoreToTicket";
export const AddLessToTicket = "AddLessToTicket";

export const addMore = (item) => {
  return {
    type: AddMoreToTicket,
    item: item,
  };
};

export const addLess = (item) => {
  return {
    type: AddLessToTicket,
    item: item,
  };
};
