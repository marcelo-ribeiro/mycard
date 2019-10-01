/* eslint-disable no-undef */
(function() {
  'use strict';

  const baseUrl = 'https://api.whatsapp.com/send?phone=';
  const form = document.forms[0];
  const inputCode = document.getElementById('input-code');
  const codeList = document.getElementById('input-code-list');
  const inputPhone = document.getElementById('input-phone');

  const formatPhone = function(phone) {
    const _phone = phone;
    _phone.replace(/\s/g, '');
    _phone.replace('-', '');
    _phone.replace('(', '');
    _phone.replace(')', '');
    return _phone;
  };

  codeList.addEventListener('change', function() {
    inputCode.value = this.value;
    inputPhone.focus();
  });

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const phone = formatPhone(inputPhone.value);
    const url = baseUrl + inputCode.value + phone;

    window.location.href = url;
    inputPhone.value = '';
  });
})();
