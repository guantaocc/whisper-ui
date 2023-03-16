<script setup lang="ts">
  import { WhisperButton } from '@whisper-ui/components'
  import { WhisperMessageInput } from '@whisper-ui/components'
  import '@whisper-ui/components/MessageInput/style/index'

  import { createLinkMark, createLogMark, createLog, createTitle } from '@whisper-ui/components/MessageInput/src/utils';

  import { ref } from 'vue';
  const code = ref()

  const changeValue = (value: any) => {
    console.log('changed-value', value)
  }

  const setCode = () => {
    code.value = `Complete log download address: ${createLinkMark({
        href: "/logDownload",
        download: "",
        target: "_blank"
      })}${createTitle("Logs with time nodes and output types")}${createLog("info content", "info")}${createLog("warning content", "warning")}${createLog("error content", "error")}`
  }
</script>

<template>
  <div class="block">
    <h2>button</h2>
    <WhisperButton type="primary">button</WhisperButton>
    <WhisperButton type="success" round>button</WhisperButton>
    <WhisperButton type="danger" size="small" circle>button</WhisperButton>
    <WhisperButton type="warning" :loading="true" size="small" round>button</WhisperButton>
  </div>
  <div class="block">
    <h2>模板输入</h2>
    <WhisperButton type="primary" size="mini" @click="setCode">插入code</WhisperButton>
    <div class="message-input-wrapper">
      <WhisperMessageInput v-model:value="code" @change="changeValue"></WhisperMessageInput>
    </div>
  </div>
</template>

<style scoped>
.message-input-wrapper {
  margin: 40px 0;
  background-color: #999;
}
</style>
