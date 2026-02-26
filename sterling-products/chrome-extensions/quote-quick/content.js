// QuoteQuick - Content Script
// Extracts customer info from job lead pages

(function() {
  'use strict';

  // Listen for messages from popup
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'getVariables') {
      const variables = extractVariables();
      sendResponse(variables);
    }
    return true;
  });

  // Extract variables based on current site
  function extractVariables() {
    const url = window.location.href;
    
    if (url.includes('mybuilder.com')) {
      return extractMyBuilder();
    } else if (url.includes('checkatrade.com')) {
      return extractCheckatrade();
    } else if (url.includes('ratedpeople.com')) {
      return extractRatedPeople();
    } else if (url.includes('trustatrader.com')) {
      return extractTrustATrader();
    } else if (url.includes('myjobquote.co.uk')) {
      return extractMyJobQuote();
    }
    
    return { name: '', jobType: '', location: '' };
  }

  // MyBuilder extraction
  function extractMyBuilder() {
    const variables = { name: '', jobType: '', location: '' };
    
    // Try to find job title/type
    const jobTitle = document.querySelector('h1')?.textContent?.trim();
    if (jobTitle) {
      variables.jobType = jobTitle;
    }
    
    // Try to find location
    const locationEl = document.querySelector('[data-testid="job-location"], .job-location, .location');
    if (locationEl) {
      variables.location = locationEl.textContent?.trim();
    }
    
    // Try alternative location patterns
    if (!variables.location) {
      const locationText = document.body.innerText.match(/in\s+([A-Z][a-z]+(?:\s+[A-Z][a-z]+)*,?\s*[A-Z]{1,2}\d{1,2}\s*\d?[A-Z]{0,2})/i);
      if (locationText) {
        variables.location = locationText[1];
      }
    }
    
    // Customer name is usually not shown until quote is accepted
    // But we can check for any name patterns
    const nameEl = document.querySelector('.customer-name, [data-testid="customer-name"]');
    if (nameEl) {
      variables.name = nameEl.textContent?.trim();
    }
    
    return variables;
  }

  // Checkatrade extraction
  function extractCheckatrade() {
    const variables = { name: '', jobType: '', location: '' };
    
    // Job title
    const jobTitle = document.querySelector('h1, .job-title');
    if (jobTitle) {
      variables.jobType = jobTitle.textContent?.trim();
    }
    
    // Location
    const locationEl = document.querySelector('.location, [data-location]');
    if (locationEl) {
      variables.location = locationEl.textContent?.trim();
    }
    
    return variables;
  }

  // RatedPeople extraction
  function extractRatedPeople() {
    const variables = { name: '', jobType: '', location: '' };
    
    const jobTitle = document.querySelector('h1, .job-details h2');
    if (jobTitle) {
      variables.jobType = jobTitle.textContent?.trim();
    }
    
    const locationEl = document.querySelector('.job-location, .postcode');
    if (locationEl) {
      variables.location = locationEl.textContent?.trim();
    }
    
    return variables;
  }

  // TrustATrader extraction
  function extractTrustATrader() {
    const variables = { name: '', jobType: '', location: '' };
    
    const jobTitle = document.querySelector('h1, .job-title');
    if (jobTitle) {
      variables.jobType = jobTitle.textContent?.trim();
    }
    
    const locationEl = document.querySelector('.location, .town');
    if (locationEl) {
      variables.location = locationEl.textContent?.trim();
    }
    
    return variables;
  }

  // MyJobQuote extraction
  function extractMyJobQuote() {
    const variables = { name: '', jobType: '', location: '' };
    
    const jobTitle = document.querySelector('h1, .job-title');
    if (jobTitle) {
      variables.jobType = jobTitle.textContent?.trim();
    }
    
    const locationEl = document.querySelector('.location, .job-location');
    if (locationEl) {
      variables.location = locationEl.textContent?.trim();
    }
    
    return variables;
  }

})();
