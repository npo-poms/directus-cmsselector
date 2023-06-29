<template>
  <div class="pomsselector">
    <input  :value="value"  readonly="readonly"  />
    <button type="button" @click="handleSelect()" class="select_button">select in poms</button>
  </div>
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
				  emit('input', value);
			}, {mediaType: "CLIP"});
		}
	},
};
</script>
