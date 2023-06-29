<template class="pomsselector">
  <v-input 
           :model-value="value"
           @update:model-value="$emit('input', $event)"
           :full-width="true" />
  <v-button @click="handleSelect()">select in poms</v-button>
</template>

<script>
export default {
	props: {
		value: {
			type: String,
			default: "<mid>",
		},
	},
	emits: ['input'],
	setup(props, { emit }) {
		if (typeof nl_vpro_media_CMSSelector === "undefined") {
			let pomsSelectorScript = document.createElement('script')
			pomsSelectorScript.setAttribute('src', 'https://poms-acc.omroep.nl/CMSSelector/media2.js')
			document.head.appendChild(pomsSelectorScript)
		}
		return { handleSelect };

		function handleSelect() {
			nl_vpro_media_CMSSelector.select(function (value) {
        console.log("emmtiing", value);
				  emit('input', value);
			}, {mediaType: "CLIP"});
		}
	},
};
</script>
 