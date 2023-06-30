import InterfaceComponent from './interface.vue';

export default {
	id: 'pomsselector',
	name: 'POMS Selector',
	icon: 'box',
	description: 'selector for poms',
	component: InterfaceComponent,
	options: ({ field }) => {
		return [
			{
				field: 'mediaType',
				name: 'Type',
				type: 'string',
				meta: {
					width: 'half',
					interface: 'input',
				},
				schema: {
					default_value: 'CLIP',
				},
			},
			{
				field: 'writable',
				name: 'Writable',
				type: 'boolean',
				meta: {
					width: 'half',
					interface: 'check_box',
				},
				schema: {
					default_value: true,
				},
			},
			{
				field: 'avType',
				name: 'AVType',
				type: 'string',
				meta: {
					width: 'half',
					interface: 'choices',
				},
				schema: {
					default_value: null,
				},
			}
		];
	},
	types: ['string'],
	recommendedDisplays: ['mid', 'media']
};
