document.getElementById('convert-btn').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      let activeTab = tabs[0];
      chrome.scripting.executeScript({
        target: { tabId: activeTab.id },
        files: ['libs/html2pdf.bundle.min.js', 'contentScript.js']
      });
    });
  });
  