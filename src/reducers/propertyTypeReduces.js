export const PROPERTY_TYPE = "PROPERTY_TYPE";
export const SELECT_ROLE = "SELECT_ROLE";
export const OTHERS_ADDITIONAL_DATA = "OTHERS_ADDITIONAL_DATA";

export const propertyInitialState = {
    propertyType:"",
    userRole:"",
    othersAdditionalData:null,

}

export const propertyTypeReduces=(state,action)=>{
    switch(action.type){
        case PROPERTY_TYPE :{
            return {...state,propertyType:action.data}
        }
        case SELECT_ROLE :{
            return {...state,userRole:action.data}
        }
        case OTHERS_ADDITIONAL_DATA :{
            return {...state,othersAdditionalData:action.data}
        }
    }
}