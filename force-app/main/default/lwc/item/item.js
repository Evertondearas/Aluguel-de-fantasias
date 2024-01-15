import { LightningElement, api, track} from 'lwc';
import './item.css';
export default class Item extends LightningElement {
 
  @api fantasia

  itemClicadol(){
     this.dispatchEvent(new CustomEvent('itemclicado',{
      detail: this.fantasia.Id
    }))
  }
}