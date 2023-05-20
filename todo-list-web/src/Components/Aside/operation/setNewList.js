import { setNewList } from "../../../Services/ListsAPI";

export const saveNewList = async (descriptionList, idUser) => {
  const newList = {    
    descriptionList: descriptionList,
    dateCreate: new Date(),
    dateUpdate: new Date(),
    idUser: idUser,
  }

  if(descriptionList===""){
    alert('Type your list');
    return;
  }

  const response = await setNewList(JSON.stringify(newList));

  if(!response.ok){
    alert('Error when save new list: ', response.status);
    return;
  };
};
