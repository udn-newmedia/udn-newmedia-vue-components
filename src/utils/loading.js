(function() {
  function handleLoagin() {
    const loadingContainer = document.createElement('div');
    loadingContainer.id = 'init-loading-container';
    loadingContainer.className = 'init-loading__container';

    const logoContainer = document.createElement('div');
    logoContainer.id = 'init-loading-logo-conainer';
    logoContainer.className = 'init-loading__logo-conainer';

    const shadowContainer = document.createElement('div');
    shadowContainer.id = 'init-loading-shaow-conainer';
    shadowContainer.className = 'init-loading__shaow-conainer';

    const udnLogo = document.createElement('i');
    udnLogo.id = 'init-loading-udn-logo';
    udnLogo.className = 'udn-icon udn-icon-logo';

    document.getElementsByTagName('body')[0].appendChild(loadingContainer);
    document.getElementById('init-loading-container').appendChild(logoContainer);
    document.getElementById('init-loading-container').appendChild(shadowContainer);
    document.getElementById('init-loading-logo-conainer').appendChild(udnLogo);
    console.log('loading');
  }

  function handeInteractive() {
    document.getElementById('init-loading-container').className = 'init-loading__container init-loading__container--disabled';
    document.getElementById('app').style.opacity = 1;
    console.log('interactive');
  }
  
  function handeComplete() {
    console.log('complete');
  }

  handleLoagin();
  document.onreadystatechange = () => {
    // if (document.readyState === 'loading') handleLoagin();
    if (document.readyState === 'interactive') handeInteractive();
    if (document.readyState === 'complete') handeComplete();
  }
})();
  