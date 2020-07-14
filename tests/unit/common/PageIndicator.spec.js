import { shallowMount } from '@vue/test-utils';
import PageIndicator from '@/components/common/layout/PageIndicator.vue';

describe('PageIndicator.vue', () => {
  it('PageIndicator: the range of progress', () => {
    const wrapper = shallowMount(PageIndicator);

    expect(wrapper.vm.readProgress).toBeGreaterThanOrEqual(0);
    expect(wrapper.vm.readProgress).toBeLessThan(100);
  });
});
