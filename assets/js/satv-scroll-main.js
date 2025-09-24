document.addEventListener('DOMContentLoaded', function () {
  const psCSS = 'https://cdn.jsdelivr.net/npm/perfect-scrollbar@1.5.5/css/perfect-scrollbar.css';
  const psJS = 'https://cdn.jsdelivr.net/npm/perfect-scrollbar@1.5.5/dist/perfect-scrollbar.min.js';

  function loadCSS(href) {
    return new Promise((resolve, reject) => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      link.onload = () => resolve();
      link.onerror = () => reject(`Error cargando CSS: ${href}`);
      document.head.appendChild(link);
    });
  }

  function loadJS(src) {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => resolve();
      script.onerror = () => reject(`Error cargando JS: ${src}`);
      document.body.appendChild(script);
    });
  }

  const style = `
    html, body {
      height: 100%;
      margin: 0;
      padding: 0;
      overflow: hidden !important;
    }

    #page-scroll {
      height: 100vh;
      overflow: hidden !important;
      position: relative;
    }

    .ps__rail-x {
      display: none !important;
    }

    .ps__rail-y {
      background-color: transparent !important;
      width: 8px !important;
      opacity: 1 !important;
      visibility: visible !important;
      transition: none !important;
      pointer-events: auto !important;
      right: 2px !important;
      z-index: 1000 !important;
    }

    .ps__thumb-y {
      background-color: #0078d4 !important;
      border-radius: 4px;
    }

    .ps__rail-y:hover > .ps__thumb-y {
      width: 8px !important;
    }
  `;

  const styleTag = document.createElement('style');
  styleTag.textContent = style;
  document.head.appendChild(styleTag);

  function forceScrollbarVisible(el, psInstance) {
    el.classList.add('ps--active-y');
    psInstance.update();
  }

  function initializeMainScroll() {
    if (!document.querySelector('#page-scroll')) {
      const wrapper = document.createElement('div');
      wrapper.id = 'page-scroll';

      while (document.body.firstChild) {
        wrapper.appendChild(document.body.firstChild);
      }

      document.body.appendChild(wrapper);
    }

    const el = document.querySelector('#page-scroll');
    const ps = new PerfectScrollbar(el, {
      wheelPropagation: false,
      suppressScrollX: true
    });

    requestAnimationFrame(() => {
      forceScrollbarVisible(el, ps);
    });
  }

  loadCSS(psCSS)
    .then(() => loadJS(psJS))
    .then(() => initializeMainScroll())
    .catch(console.error);
});