document.addEventListener('DOMContentLoaded', () => {
  if (window.location.pathname.split("/").pop() == 'concertTimesAndMessages.html') {
    setCookie();
  } else if (!sessionStorage.getItem('viewedNews')) {
    $('#banner').show();
    $('#banner').on('closed.bs.alert', setCookie);
    $('#banner > a').on('click', setCookie);
  } else {
    $('#banner').hide();
  }

  function setCookie() {
    sessionStorage.setItem('viewedNews', true);
  }
})