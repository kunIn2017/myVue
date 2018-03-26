// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import index from './components/index/index';
import shopping from './components/shopping/shopping';
import hot from './components/hot/hot';
import my from './components/my/my';

const routers = [{
  path: '/',
  redirect: '/index'
}, {
  path: '/index',
  component: index
}, {
  path: '/shopping',
  component: shopping
}, {
  path: '/hot',
  component: hot
}, {
  path: '/my',
  component: my
}];


export default routers
