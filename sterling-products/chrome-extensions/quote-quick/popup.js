// QuoteQuick - Popup Logic

// Default templates for new users
const DEFAULT_TEMPLATES = [
  {
    id: 'default-1',
    name: 'Standard Quote',
    trade: 'plumber',
    content: `Hi {name},

Thank you for your enquiry about {job_type}.

Based on the details provided, my quote is:

**Labour:** £[AMOUNT]
**Materials:** £[AMOUNT] (if needed)
**Total:** £[TOTAL]

This includes:
- [Work item 1]
- [Work item 2]
- All materials and labour
- 1 year guarantee on workmanship

I'm available to start on [DATE]. I'm fully insured with £[X]M public liability insurance.

Let me know if you have any questions or would like to discuss further.

Best regards,
[YOUR NAME]
[YOUR PHONE]
[YOUR EMAIL]`
  },
  {
    id: 'default-2',
    name: 'Quick Estimate',
    trade: 'electrician',
    content: `Hi {name},

Thanks for reaching out about your {job_type} job in {location}.

Based on what you've described, I estimate this will be:

**Estimated cost:** £[AMOUNT]

This is a rough estimate - I'll confirm the exact price once I see the job. There's no call-out fee for quotes.

I could fit you in on [DATE]. Does that work for you?

Cheers,
[YOUR NAME]
[YOUR PHONE]`
  }
];

// Initialize
document.addEventListener('DOMContentLoaded', async () => {
  await loadTemplates();
  setupTabs();
  setupForm();
});

// Tab switching
function setupTabs() {
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      
      document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
      });
      
      const targetTab = document.getElementById(`${tab.dataset.tab}-tab`);
      targetTab.classList.add('active');
    });
  });
}

// Load and display templates
async function loadTemplates() {
  const { templates } = await chrome.storage.local.get('templates');
  const allTemplates = templates || DEFAULT_TEMPLATES;
  
  const listEl = document.getElementById('template-list');
  const emptyEl = document.getElementById('no-templates');
  
  if (allTemplates.length === 0) {
    listEl.style.display = 'none';
    emptyEl.style.display = 'block';
    return;
  }
  
  listEl.style.display = 'flex';
  emptyEl.style.display = 'none';
  
  listEl.innerHTML = allTemplates.map(template => `
    <div class="template-item" data-id="${template.id}">
      <div class="template-item-header">
        <span class="template-name">${escapeHtml(template.name)}</span>
        <span class="template-trade">${template.trade}</span>
      </div>
      <div class="template-preview">${escapeHtml(template.content.substring(0, 80))}...</div>
      <div class="template-actions">
        <button class="btn-small btn-copy" data-action="copy">📋 Copy Quote</button>
        <button class="btn-small btn-delete" data-action="delete">🗑️</button>
      </div>
    </div>
  `).join('');
  
  // Add event listeners
  listEl.querySelectorAll('.template-item').forEach(item => {
    const templateId = item.dataset.id;
    const template = allTemplates.find(t => t.id === templateId);
    
    item.querySelector('[data-action="copy"]').addEventListener('click', (e) => {
      e.stopPropagation();
      copyTemplate(template);
    });
    
    item.querySelector('[data-action="delete"]').addEventListener('click', (e) => {
      e.stopPropagation();
      deleteTemplate(templateId);
    });
  });
  
  // Save defaults if first time
  if (!templates) {
    await chrome.storage.local.set({ templates: DEFAULT_TEMPLATES });
  }
}

// Setup form submission
function setupForm() {
  const form = document.getElementById('template-form');
  
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const name = document.getElementById('template-name').value.trim();
    const trade = document.getElementById('template-trade').value;
    const content = document.getElementById('template-content').value.trim();
    
    if (!name || !content) {
      showToast('Please fill in all fields');
      return;
    }
    
    const { templates = [] } = await chrome.storage.local.get('templates');
    
    const newTemplate = {
      id: `template-${Date.now()}`,
      name,
      trade,
      content
    };
    
    templates.push(newTemplate);
    await chrome.storage.local.set({ templates });
    
    // Reset form and switch to templates tab
    form.reset();
    document.querySelector('[data-tab="templates"]').click();
    
    await loadTemplates();
    showToast('Template saved!');
  });
}

// Copy template to clipboard
async function copyTemplate(template) {
  try {
    // Try to get variables from current page
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    
    let variables = {};
    
    if (tab.url && isSupportedSite(tab.url)) {
      // Request variables from content script
      try {
        variables = await chrome.tabs.sendMessage(tab.id, { action: 'getVariables' });
      } catch (e) {
        // Content script might not be loaded, use defaults
      }
    }
    
    // Replace variables in template
    let quote = template.content
      .replace(/{name}/gi, variables.name || '[CUSTOMER NAME]')
      .replace(/{job_type}/gi, variables.jobType || '[JOB TYPE]')
      .replace(/{location}/gi, variables.location || '[LOCATION]');
    
    await navigator.clipboard.writeText(quote);
    showToast('Quote copied to clipboard!');
  } catch (err) {
    console.error('Copy failed:', err);
    showToast('Copy failed - try again');
  }
}

// Delete template
async function deleteTemplate(templateId) {
  if (!confirm('Delete this template?')) return;
  
  const { templates = [] } = await chrome.storage.local.get('templates');
  const filtered = templates.filter(t => t.id !== templateId);
  
  await chrome.storage.local.set({ templates: filtered });
  await loadTemplates();
  showToast('Template deleted');
}

// Check if URL is a supported site
function isSupportedSite(url) {
  const supported = [
    'mybuilder.com',
    'checkatrade.com',
    'ratedpeople.com',
    'trustatrader.com',
    'myjobquote.co.uk'
  ];
  return supported.some(site => url.includes(site));
}

// Show toast notification
function showToast(message) {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();
  
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  document.body.appendChild(toast);
  
  setTimeout(() => toast.remove(), 2000);
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}
