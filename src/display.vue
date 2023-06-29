<template>
	<div>Value: {{ value }}</div>
</template>

<script>
export default {
	props: {
		value: {
			type: String,
			default: '<mid>',
		},
	},
  mounted() {
    let pomsSelectorScript = document.createElement('script')
    pomsSelectorScript.setAttribute('src', 'https://poms.omroep.nl/CMSSelector/media2.js')
    document.head.appendChild(pomsSelectorScript)
  },
  methods: {
    // methods of script
  }
};
</script>
