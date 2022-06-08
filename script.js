const title = document.title;
const url = document.querySelector('link[rel=canonical]') ? document.querySelector('link[rel=canonical]').href : document.location.href;

shareButton = document.querySelector('#share-button')

shareButton.addEventListener('click', event => {
    if (navigator.share) {
      navigator.share({
        title: title,
        url: 'https://github.com/rubberteeth'
      }).then(() => {
        console.log('Thanks for sharing!');
      })
      .catch(console.error);
    } else {
      alert('This feature is not supported')
    }
  });