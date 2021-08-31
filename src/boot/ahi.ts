import { boot } from 'quasar/wrappers';

export const sleep = () =>
  new Promise((res) => {
    console.log('Waiting 5');

    setTimeout(res, 5000);
  });

export default boot(async () => {
  if (process.env.NODE_ENV === 'development') {
    // await sleep();
    const { worker } = await import('../mocks/browser');
    void worker.start();
  }
});
