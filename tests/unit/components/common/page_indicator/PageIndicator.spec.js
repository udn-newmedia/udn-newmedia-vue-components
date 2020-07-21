import { shallowMount } from '@vue/test-utils';
import PageIndicator from '@/components/common/ui/PageIndicator.vue';
import { readProgressFaker } from './factory';

/**
 * 1. 測試 progress 邊界
 * 2. 測試 progress 是否有連續、完整
 */

const scrollScript = readProgressFaker();

function checkProgressContinuity(stagePool) {
  let isValid = true;
  let i = 0;
  while (isValid && i < stagePool.length - 1) {
    if (stagePool[i + 1] - stagePool[i] !== 10) isValid = false;
    i++;
  }

  return isValid;
}

describe('PageIndicator.vue', () => {
  it('PageIndicator: the bounds of progress', () => {
    let isValid = true;
    for (const key in scrollScript) {
      if (scrollScript.hasOwnProperty(key)) {
        const e = scrollScript[key];
        if (e < 0 || e > 100) isValid = false;
      }
    }
    
    expect(isValid).toBeTruthy();
  });

  it('PageIndicator: progress continuity', () => {
    const wrapper = shallowMount(PageIndicator);

    /**
    * simulate scroll
    */
    for (const key in scrollScript) {
      if (scrollScript.hasOwnProperty(key)) {

        wrapper.vm.readProgress = scrollScript[key] - scrollScript[key] % 10;
        wrapper.vm.lastStage = Math.max(...wrapper.vm.stagePool) | 0;
        wrapper.vm.handleUpdateStage(wrapper.vm.lastStage, wrapper.vm.readProgress);
      }
    }

    expect(checkProgressContinuity(wrapper.vm.stagePool)).toBeTruthy();
  });
});
