<template>
  <div class="whisper-message-input">
    <div class="codemirror-container">
      <textarea
        style="width: 100%"
        ref="textarea"
        name="codemirror"
        placeholder="请输入"
      ></textarea>
    </div>
    <whisper-button size="mini" class="whisper-message-input--popoverButton">
      置入字段
    </whisper-button>
  </div>
</template>

<script setup lang="ts" name="WhisperMessageInput">
  import WhisperButton from '../../button';
  import '../style';
  import 'codemirror/lib/codemirror.css';
  import CodeMirror from 'codemirror';
  import type { Editor } from 'codemirror';
  import './languages/fclog';
  import { Props } from './MessageInput';
  import { getLinkMarks, getLogMark, MarkStates } from './utils';
  import { ref, markRaw, onMounted, unref, watch } from 'vue';

  const emit = defineEmits(['ready', 'change']);
  const props = defineProps(Props);

  const textarea = ref();
  const _cminstance = ref<Editor | null>(null);

  const renderTextMark = (cminstance: Editor = props.cminstance as any) => {
    const marks = cminstance.getAllMarks();
    // 重置marks
    marks.forEach(mark => mark.clear());
    const value = cminstance.getValue();
    const linkMarks: MarkStates[] = ([] as MarkStates[])
      .concat(getLinkMarks(value))
      .concat(getLogMark(value));
    for (let _i = 0; _i < linkMarks.length; _i++) {
      const mark = linkMarks[_i];
      cminstance.markText(cminstance.posFromIndex(mark.start), cminstance.posFromIndex(mark.end), {
        replacedWith: mark.node
      });
    }
    emit('change', _cminstance.value?.getValue());
  };

  const getCmInstance = () => {
    return unref(_cminstance);
  };

  const initialize = () => {
    _cminstance.value = markRaw(
      CodeMirror.fromTextArea(textarea.value, {
        mode: 'fclog'
      })
    );
    _cminstance.value?.on('change', renderTextMark);
  };

  const reviseStyle = () => {};

  const onCodeChange = (newVal: any) => {
    const CM_VALUE = _cminstance.value?.getValue();
    if (newVal !== CM_VALUE) {
      _cminstance.value?.setValue(newVal);
      reviseStyle();
    }
  };

  watch(
    () => props.value,
    val => {
      onCodeChange(val);
    }
  );

  onMounted(() => {
    initialize();
  });

  defineExpose({
    getCmInstance
  });
</script>

<style scoped></style>
