// 引入页面文件
import foo from './views/foo';
import bar from './views/bar';

const routes = {
  '/foo': foo,
  '/bar': bar
};

class Router {
  start() {
    window.addEventListener('popstate', () => {
      // 点击浏览器后退 / 前进按钮时会触发 window.onpopstate 事件，我们在这时切换到相应页面
      this.load(location.pathname);
    });

    this.load(location.pathname);
  }

  go(path) {
    history.pushState({}, '', path);
    this.load(path);
  }

  load(path) {
    if (path === '/') {
      path = '/foo';
    }

    const view = new routes[path]();
    view.mount(document.body);
  }
}

export default new Router();