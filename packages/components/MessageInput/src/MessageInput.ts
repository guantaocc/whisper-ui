import type { PropType } from 'vue';

export const Props = {
  value: {
    type: String as PropType<string>,
    default: ''
  },
  options: {
    type: Object,
    default: () => ({})
  },
  height: {
    type: Number as PropType<number>,
    default: 100
  },
  cminstance: {
    type: Object as any,
    default: () => ({})
  }
};
