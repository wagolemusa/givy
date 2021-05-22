import React from 'react'
import { useForm, useStep } from "react-hooks-helper";
import Location from './mulitforms/Location'
import Business from './mulitforms/Business'
import Registered from  './mulitforms/Registered'
import Representative from './mulitforms/Representative'
import Bank from './mulitforms/Bank'
import {Review} from './mulitforms/Review'
import Submit from './mulitforms/Submit'

const defaultData = {
    countryCd: "",
    address1: "",
    city: "",
    stateCd: "",
    zip: "",
    legalBusinessName: "",
    businessPhone: "",
    websiteAddress: "",
    ownerName: "",
    ownerEmail: "",
    ownerTitle: "",
    ownerMobilePhone: "",
    ownerDob: "",
    ownerSSN: "",
    bankAcctNum: "",
    bankRoutingNum: "",

};

const steps = [
    { id: 'location'},
    { id: 'business'},
    { id: 'representative'},
    { id: 'bank'},
    { id: 'review'},
    { id: 'submit'} 
]

const Actave = () =>{
    const [formData, setForm] = useForm(defaultData)
    const { step, navigation } = useStep({
        steps,
        initialStep: 0
      
    })

    const props = { formData, setForm, navigation}

switch (step.id){
    case "location":
        return<Location {...props} />
    case "business":
        return<Business {...props} />
    case "registered":
        return<Registered {...props} />
    case "representative":
        return<Representative {...props} />
    case "bank":
        return<Bank {...props}/>
    case "review":
        return<Review {...props} />
    case "submit":
        return<Submit {...props}/>
}
    return(
        <>
        </>
    )
}
export default Actave