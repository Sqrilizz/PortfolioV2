# Sqrilizz Portfolio

Современное портфолио на React + Vite + Tailwind CSS + Framer Motion.

## Установка зависимостей

```bash
npm install framer-motion howler react-i18next i18next
npm install -D tailwindcss postcss autoprefixer
```

## Что нужно настроить

### 1. Видео страницы
- Отредактируйте `src/config/videos.js` для добавления своих видео
- Поддерживаются YouTube, Vimeo, MP4 файлы и другие
- Доступ по URL: `yoursite.com/Important`, `yoursite.com/Secret` и т.д.
- Для локальных видео поместите файлы в `public/videos/`

Пример настройки:
```javascript
export const VIDEO_CONFIG = {
  'Important': 'https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1',
  'Secret': '/videos/secret-video.mp4',
  'Special': 'https://player.vimeo.com/video/YOUR_VIMEO_ID'
}
```

### 2. Аватар и Favicon
- **Аватар:** Добавьте изображение в `public/avatar.png`
- **Favicon:** Добавьте иконку сайта в `public/favicon.png` (32x32px или 64x64px)
- Favicon отображается во вкладке браузера и закладках

### 3. Баннер
- Добавьте фоновое изображение в `public/banner.jpg`
- Красивый баннер внизу страницы с туманным эффектом
- Поддерживаются форматы: JPG, PNG, WebP

### 3. Музыка и обложки
- Добавьте MP3 файлы в папку `public/music/`
- Добавьте обложки треков в папку `public/music/covers/`
- В `HomePage.jsx` настройте плейлист с обложками

Пример добавления трека с обложкой:
```javascript
const playlist = [
  { 
    title: 'Название трека', 
    src: '/music/track.mp3',
    cover: '/music/covers/track.jpg' // Обложка для фона плеера
  }
]
```

**Поддерживаемые форматы обложек:** JPG, PNG, WebP

### 3. Ссылки на соцсети
В `App.jsx` обновите объект `USER.socials`:
- Discord: https://discord.com/users/sqrilizzy
- Telegram: https://t.me/sqrilizz
- Instagram: https://instagram.com/Matve1m0k1
- GitHub: https://github.com/sqrilizz
- Modrinth: https://modrinth.com/user/Sqrilizz

### 4. Проекты
В `App.jsx` обновите массив проектов:
- QuantumKit - Discord & Network Tool
- Learnly - AI-powered learning app
- VERLUM ARG - Deep ARG project
- Minecraft Dev - Fabric & Paper mods

### 5. Персональная информация
В `TerminalCard.jsx` обновите:
- Описание навыков
- Статус "Open to new projects!"
- Локацию (страна/город)

## Запуск

```bash
npm run dev
```

## Структура проекта

```
src/
├── components/          # React компоненты
├── context/            # React контексты
├── hooks/              # Кастомные хуки
├── locales/            # Файлы переводов
├── utils/              # Утилиты
├── assets/             # Статические ресурсы
├── App.jsx             # Главный компонент
├── main.jsx            # Точка входа
├── index.css           # Стили
└── i18n.js             # Настройка интернационализации

public/
└── music/              # Музыкальные файлы
```

## Особенности

- **Темная тема** с градиентами
- **Анимации** на Framer Motion
- **Музыкальный плеер** с Howler.js
- **Интернационализация** (RU/EN)
- **Адаптивный дизайн** на Tailwind CSS
- **Терминальный интерфейс** в стиле VS Code

## Lint предупреждения

Предупреждения о `@tailwind` и `@apply` в CSS - это нормально. Они исчезнут после установки и настройки Tailwind CSS.
