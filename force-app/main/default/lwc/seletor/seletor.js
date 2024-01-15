import { LightningElement } from 'lwc';
import './seletor.css';
export default class Seletor extends LightningElement {

    fantasiaSelecionadaId

    fantasiaSelecionada(evt){
        this.fantasiaSelecionadaId = evt.detail;
    }
}