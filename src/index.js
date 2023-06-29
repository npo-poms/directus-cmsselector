import InterfaceComponent from './interface.vue';
import "./index.scss";

export default {
	id: 'pomsselector',
	name: 'POMS Selector',
	icon: 'box',
	description: 'selector for poms',
	component: InterfaceComponent,
	options: null,
	types: ['string'],
	recommendedDisplays: ['mid', 'media']
};
