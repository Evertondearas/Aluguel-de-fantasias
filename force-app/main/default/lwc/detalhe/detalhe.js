import { LightningElement, wire, api, track} from 'lwc';
import getFantasiasList from "@salesforce/apex/fantasias.getFantasiasList";
import {refreshApex} from'@salesforce/apex';
import Modal from 'c/modal';
import './detalhe.css';

export default class Detalhe extends LightningElement {

    @wire(getFantasiasList) listaFantasias;
    
    fantasia;

    _fantasiaId = undefined;

    set fantasiaId(valor){
        this._fantasiaId = valor;
        if (this.listaFantasias && this.listaFantasias.data) {
            this.fantasia = this.listaFantasias.data.find(fantasy => fantasy.Id === valor);
        }
    }
    
    get butao(){
        return this.fantasia.Status_da_fantasia__c === "Disponível";
    }

    @api get fantasiaId(){
        return this._fantasiaId;
    }

    async handleClick() {
        await Modal.open({
        });
        refreshApex(this.listaFantasias);
    }
}