<template>
  <div>
    <!-- Button trigger modal -->
    <button type="button" v-on:click="modalOpen = true" class="btn btn-outline-success btn-sm" data-toggle="modal" data-target="#modal">
      <svg style="width:24px;height:24px" viewBox="0 0 24 24">
        <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
      </svg>
    </button>

    <!-- Modal -->
    <div class="modal" :class="{ show : modalOpen }" id="modal" tabindex="-1" role="dialog" aria-labelledby="modalTitle" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="modalTitle">{{ title }}</h5>
            <button type="button" class="close" v-on:click="modalOpen = false" data-dismiss="modal" aria-label="Close">
              <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                <path fill="currentColor" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
              </svg>
            </button>
          </div>
          <div class="modal-body">
            <p class="text-justify">
              {{ info }}
            </p>
          </div>
          <div class="modal-footer">

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    info: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      modalOpen: false
    }
  },
}
</script>
