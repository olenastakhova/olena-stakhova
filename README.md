# Olena Stakhova — psycholog · сайт-портфолио

Лендинг психолога (Краков): PL — основной язык, версии UA / EN / RU.
Стек: **Astro 5**, чистый CSS, без тяжёлых библиотек. Хостинг: **GitHub Pages**. 

**Прод:** https://olenastakhova.github.io/

## Структура

- `src/pages/` — 4 страницы: `/` (PL), `/uk/`, `/en/`, `/ru/`
- `src/i18n/*.json` — тексты всех языков (110 ключей на язык)
- `src/components/Landing.astro` — весь лендинг
- `src/layouts/Base.astro` — head (SEO, hreflang, OG, JSON-LD) + скрипты (анимации, форма)
- `src/config.ts` — **контакты и endpoint формы** (менять здесь)
- `src/styles/global.css` — дизайн-система
- `temp/` — локальные исходники и концепты для ревью; папка игнорируется Git и не публикуется

## Деплой

1. `git add . && git commit -m "Site v1" && git push`
2. На GitHub: **Settings → Pages → Source: GitHub Actions** (один раз)
3. Workflow `.github/workflows/deploy.yml` собирает и публикует сайт при каждом push в `main`

## Форма записи (Web3Forms)

Форма шлёт письма на настроенный в Web3Forms адрес без собственного бэкенда.
Endpoint и access key находятся в `src/config.ts`. Скрытое поле `botcheck`
отсекает автоматические спам-отправки.
