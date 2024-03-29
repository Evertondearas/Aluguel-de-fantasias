import { LightningElement, wire} from 'lwc';
import getFantasiasList from "@salesforce/apex/fantasias.getFantasiasList";
import { refreshApex } from '@salesforce/apex';
import './lista.css'
export default class Lista extends LightningElement {
  
    @wire(getFantasiasList) fantasias;
    
    handleItemClick(evt){ 


    const event = new CustomEvent('fantasiaselecionada',{
        detail: evt.detail
    });
    this.dispatchEvent(event);
    refreshApex(this.fantasias);
  }
}