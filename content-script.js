function extractTextFromUrl(url) {
  // Split the url by "/" and get the penultimate element
  let segments = url.split("/");
  let lastSegment = segments[segments.length - 2];
  // Replace "-" with " " and capitalize the first letter
  let text = lastSegment.replace(/-/g, " ").replace(/^\w/, c => c.toUpperCase());
  // Return the text
  return text;
}

// Get all links on the webpage using document.links property
function init() {
  let links = document.links;

  // Loop through each link and replace its last child's content with its extracted text
  for (let link of links) {
    // Get the href attribute of the link
    let cls = link.className;
    // Check if the class starts with BigCard using startsWith method
    if (!cls.startsWith('Menu') || !cls.startsWith('Logo')) {
      let href = link.href;
      // Get the extracted text from the href using extractTextFromUrl function
      let text = extractTextFromUrl(href);
      // Get the last child element of the link using lastElementChild property
      let lastChild = link.lastElementChild;
      // Replace its content with text using innerHTML property
      if (lastChild) {
        let grandChild = lastChild.firstElementChild;
        if (grandChild) {
          grandChild.textContent = text;
        }
        else {
          lastChild.textContent = text;
        }

      }
    }
  }
}

window.addEventListener("load", function () {
  init();
});

setTimeout(() => init, 1000)