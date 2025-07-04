export const PROPERTY_ADDRESS = "PROPERTY_TYPE";
export const LEASING_INFO = "LEASING_INFO";
export const CHARGES = "CHARGES";
export const RENT_FREQUENCY_AND_PAYMENT_REMINDER = "RENT_FREQUENCY_AND_PAYMENT_REMINDER";
export const  APPLICATION_AGREEMENT= "APPLICATION_AGREEMENT";
export const  ABOUT_PROPERTY= "ABOUT_PROPERTY";
export const  COMMUNITY_IS_AMENITY= "COMMUNITY_IS_AMENITY";
export const  PROPERTY_GALLERY= "PROPERTY_GALLERY";
export const  PET_FEES= "PET_FEES";
export const  PARKING= "PARKING";
export const  NEAREST_EDUCATIONAL_INSTITUTION= "NEAREST_EDUCATIONAL_INSTITUTION";
export const  NEAREST_STATION= "NEAREST_STATION";
export const  NEAREST_LANDMARK= "NEAREST_LANDMARK";
export const  UTILITIES_PROVIDER= "UTILITIES_PROVIDER";


export const informationInitialState = {
    propertyAddress:null,
    leasingInfo:null,
    charges:null,
    rentFrequency:null,
    applicationAgreement:null,
    aboutProperty:null,
    community:[],
    propertyGallery:null,
    petFees:[],
    parking:null,
    nearestEducationalInstitute:null,
    nearestStation:null,
    nearestLandmark:null,
    utilitiesProvider:null,

}

export const informationReducers=(state,action)=>{
    switch(action.type){
        case PROPERTY_ADDRESS :{
            return {...state,propertyAddress:action.data}
        }
        case LEASING_INFO :{
            return {...state,leasingInfo:action.data}
        }
        case CHARGES :{
            return {...state,charges:action.data}
        }
        case RENT_FREQUENCY_AND_PAYMENT_REMINDER :{
            return {...state,rentFrequency:action.data}
        }
        case APPLICATION_AGREEMENT :{
            return {...state,applicationAgreement:action.data}
        }
        case ABOUT_PROPERTY :{
            return {...state,aboutProperty:action.data}
        }
        case COMMUNITY_IS_AMENITY :{
            return {...state,community:action.data}
        }
        case PROPERTY_GALLERY :{
            return {...state,propertyGallery:action.data}
        }
        case PET_FEES :{
            return {...state,petFees:[...state.petFees,action.data]}
        }
        case PARKING :{
            return {...state,parking:action.data}
        }
        case NEAREST_EDUCATIONAL_INSTITUTION :{
            return {...state,nearestEducationalInstitute:action.data}
        }
        case NEAREST_STATION :{
            return {...state,nearestStation:action.data}
        }
        case NEAREST_LANDMARK :{
            return {...state,nearestLandmark:action.data}
        }
        case UTILITIES_PROVIDER :{
            return {...state,utilitiesProvider:action.data}
        }
    }
}