import {MDCRipple} from '@material/ripple';
import {MDCTextField} from '@material/textfield';
import {MDCSwitch} from '@material/switch';

const username = new MDCTextField(document.querySelector('.username'));
const email = new MDCTextField(document.querySelector('.email'));
const phone = new MDCTextField(document.querySelector('.phone'));
const allergies = new MDCTextField(document.querySelector('.allergies'));
const guestname = new MDCTextField(document.querySelector('.guestName'));


const switchControl = new MDCSwitch(document.querySelector('.guest'));
const chsGuestControl = new MDCSwitch(document.querySelector('.chs-guest'));
//const notifyControl = new MDCSwitch(document.querySelector('.notify'));

new MDCRipple(document.querySelector('.next'));


