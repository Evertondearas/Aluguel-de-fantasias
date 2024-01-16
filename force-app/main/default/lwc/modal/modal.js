import { LightningElement} from 'lwc';
import LightningModal from 'lightning/modal';
import Aluguel_de_fantasia__c_OBJECT from "@salesforce/schema/Aluguel_de_fantasia__c"
import NAME_FIELD from "@salesforce/schema/Aluguel_de_fantasia__c.name"
import data from "@salesforce/schema/Aluguel_de_fantasia__c.Data_do_aluguel__c"
import Dias from"@salesforce/schema/Aluguel_de_fantasia__c.Dias_alugados__c"
import Fantasy from "@salesforce/schema/Aluguel_de_fantasia__c.Fantasia_alugada__c"

export default class Modal extends LightningModal {

    handleOkay() {
        this.close('okay');
        console.log("fechou");
    }
    
    aluguelObject = Aluguel_de_fantasia__c_OBJECT;
    fields = [NAME_FIELD,  data, Dias, Fantasy];

}