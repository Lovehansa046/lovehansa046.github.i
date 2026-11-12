"use strict";
(() => {
  const form = document.querySelector('#service-request-form');
  if (!form) return;
  const submit = document.querySelector('#booking-submit');
  const submitLabel = submit.querySelector('span');
  const feedback = document.querySelector('#booking-feedback');
  const date = document.querySelector('#booking-date');
  const language = document.querySelector('#booking-language');
  let sending = false;
  let resultKey = null;

  function t(key) {
    return window.HanmI18n ? window.HanmI18n.t(key) : key;
  }
  function showFeedback(key, isError = false) {
    resultKey = key;
    feedback.textContent = t(key);
    feedback.hidden = false;
    feedback.classList.toggle('is-error', isError);
    feedback.classList.toggle('is-success', !isError);
    feedback.setAttribute('role', isError ? 'alert' : 'status');
  }
  function updateLanguage() {
    language.value = window.HanmI18n ? window.HanmI18n.getLang() : document.documentElement.lang || 'ru';
    submitLabel.textContent = t(sending ? 'booking.sending' : 'booking.send');
    if (resultKey) feedback.textContent = t(resultKey);
  }
  document.addEventListener('hanmotors:languagechange', updateLanguage);
  updateLanguage();

  // Date local to visitor; does not claim a date is available for booking.
  const d = new Date();
  const dStr = [d.getFullYear(), String(d.getMonth() + 1).padStart(2, '0'), String(d.getDate()).padStart(2, '0')].join('-');
  date.min = dStr;

  form.addEventListener('submit', async event => {
    // With JS, keep the visitor on the site and show a localized result.
    event.preventDefault();
    if (sending || !form.reportValidity()) return;
    sending = true;
    resultKey = null;
    feedback.hidden = true;
    language.value = window.HanmI18n ? window.HanmI18n.getLang() : 'ru';
    submit.disabled = true;
    submitLabel.textContent = t('booking.sending');
    submit.setAttribute('aria-busy', 'true');
    try {
      const data = Object.fromEntries(new FormData(form).entries());
      const response = await fetch(form.action, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(data)
      });
      const json = await response.json();
      if (!response.ok || !json.success) throw new Error('Request not accepted');
      form.reset();
      showFeedback('booking.success');
    } catch (error) {
      showFeedback('booking.error', true);
    } finally {
      sending = false;
      submit.disabled = false;
      submit.removeAttribute('aria-busy');
      updateLanguage();
    }
  });
})();
