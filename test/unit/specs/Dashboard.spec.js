import Vue from 'vue';
import Dashboard from '@/components/Dashboard';

describe('Dashboard.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Dashboard);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.hello h1').textContent).toEqual('Welcome to Your Vue.js App');
  });
});
