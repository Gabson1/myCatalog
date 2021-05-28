import { useEffect } from 'react';

/*
  USAGE: Place in component as hook and simply call function
  Add [data-replace-background-with="<your-url>"] to elements
  where image.src or element.backgroundImage should be replaced
*/
const replace = () => {
  const elements = document.querySelectorAll('[data-replace-background-with]');

  elements.forEach((element) => {
    /* eslint-disable no-param-reassign */
    let dummyImage = new Image();

    const { nodeName, dataset } = element;
    const { replaceBackgroundWith: targetUrl } = dataset;

    dummyImage.src = targetUrl;
    dummyImage.style.width = '100%';
    dummyImage.style.height = '100%';
    dummyImage.style.position = 'absolute';
    dummyImage.style.left = '0px';
    dummyImage.style.top = '50%';
    dummyImage.style.zIndex = '999';
    dummyImage.style.visibility = 'hidden';

    document.body.appendChild(dummyImage);

    dummyImage.addEventListener('load', () => {
      setTimeout(() => {
        if (element.style.transition) {
          element.style.transition += ', background-image 20ms linear';
        } else {
          element.style.transition = 'background-image 20ms linear';
        }

        if (nodeName === 'IMG') {
          element.src = targetUrl;
        } else {
          element.style.backgroundImage = `url('${targetUrl}')`;
        }
        document.body.removeChild(dummyImage);
        dummyImage = null;
      }, 0);
    });
    /* eslint-enable no-param-reassign */
  });
};

const useImageReplacing = () => useEffect(replace, []);

export default useImageReplacing;
