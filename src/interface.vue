<template class="pomsselector">
  <v-input 
           :model-value="value"
           clickeable
           readonly
           placeholder="<mid>"
           @update:model-value="$emit('input', $event)"
           :full-width="true" />
  <v-button @click="handleSelect() ">select in poms</v-button>
  <!--
  <v-span :model-value="data">mediaType: {{ data.mediaType }}</v-span>
  -->
</template>

<script lang="js">
  export default {
    props: {
      value: {
        type: String
      },
      mediaType: {
        type: String,
        default: undefined
      },
      writable: {
        type: Boolean,
        default: true
      },
      avType: {
        type: String,
        default: undefined
      },
    },
    emits: ['input', 'setFieldValue'], 
    setup(props, { emit }) {

      if (typeof nl_vpro_media_CMSSelector === "undefined") {
        let pomsSelectorScript = document.createElement('script')
        // TODO: This URL needs to be configurable
        pomsSelectorScript.setAttribute('src', 'https://poms-acc.omroep.nl/CMSSelector/media2.js')
        document.head.appendChild(pomsSelectorScript)
      }
      
      return { handleSelect };
      
      function handleSelect() {
        console.log("props", props)
          nl_vpro_media_CMSSelector.select(function (data) {
          emit('input', data.mid);
        }, {
            mediaType: props.mediaType,
            'properties.writable': props.writable,
            avType: props.avType,
            returnValue: 'data'
        });
      }
    },
  };
</script>
 
