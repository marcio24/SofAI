window.onload = function() {
    function scrollToBottom() {
      if (document.documentElement.scrollHeight > document.documentElement.clientHeight) {
        document.documentElement.scrollTop = document.documentElement.scrollHeight;
      } else {
        document.body.scrollTop = document.body.scrollHeight;
      }
    }
  
    scrollToBottom(); //  Faz com que a página carregue no final do Scroll
  };
  
  