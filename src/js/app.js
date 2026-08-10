/**
 * Dynamic Markdown Loader using Marked.js
 * @param {string} mdPath - Relative path to the .md file from the current HTML page
 * @param {string} containerId - ID of the HTML element where rendered content will be injected
 * @param {string} fallbackHtml - Optional default HTML to display if fetching fails
 */
function loadMarkdownContent(mdPath, containerId = 'markdown-content', fallbackHtml = '') {
  const container = document.getElementById(containerId);
  
  if (!container) {
    console.warn(`Container element with ID "${containerId}" was not found.`);
    return;
  }

  fetch(mdPath)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to load ${mdPath} (Status: ${response.status})`);
      }
      return response.text();
    })
    .then(markdownText => {
      // Check if Marked library is loaded via CDN
      if (typeof marked !== 'undefined') {
        container.innerHTML = marked.parse(markdownText);
      } else {
        // Fallback if marked CDN script failed to load
        container.innerText = markdownText;
      }
    })
    .catch(error => {
      console.error('Error fetching Markdown file:', error);
      if (fallbackHtml) {
        container.innerHTML = fallbackHtml;
      }
    });
}