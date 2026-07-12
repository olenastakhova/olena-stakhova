// Контакты и настройки сайта — единственное место, где они меняются.
export const CONTACT = {
  telegram: '', // добавить ссылку https://t.me/<username>, когда будет — кнопка появится автоматически
  city: 'Kraków',
};

// Контакты собираются в браузере, чтобы простые скраперы не находили их в HTML.
// Фрагменты записаны в обратном порядке и разворачиваются клиентским скриптом.
export const CONTACT_PARTS = {
  email: ['em.notorp', '@', 'avohkats'],
  phone: ['571', '633', '887', '84+'],
};

// Web3Forms: access key предназначен для использования в клиентской форме.
export const FORM_ENDPOINT = 'https://api.web3forms.com/submit';
export const FORM_ACCESS_KEY = 'ee28d954-3388-4a0e-bf08-c4999b59512d';

export const SITE = {
  url: 'https://olenastakhova.github.io',
  name: 'Olena Stakhova',
};

export const LANGS = [
  { code: 'pl', label: 'PL', path: '' },
  { code: 'uk', label: 'UA', path: 'uk/' },
  { code: 'en', label: 'EN', path: 'en/' },
  { code: 'ru', label: 'RU', path: 'ru/' },
] as const;
