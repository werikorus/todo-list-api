import { setNewList } from "../../../Services/Lists/ListsService";

export const saveNewList = async (descriptionList, idUser) => {
  if(descriptionList===""){
    alert('Type your list');
    return;
  }

  const newList = {    
    idUser: idUser,
    descriptionList: descriptionList,
    dateCreate: new Date(),
    dateUpdate: new Date(),    
  }

  const response = await setNewList(newList);

  if(!response.ok){
    alert('Error when save new list: ', response.status);
    return;
  };
};
