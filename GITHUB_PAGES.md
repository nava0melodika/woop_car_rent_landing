Развертывание на GitHub Pages

1. Создайте репозиторий и загрузите файлы.
2. В Settings → Pages выберите Source = GitHub Actions.
3. Запушьте ветку main.
4. Workflow автоматически соберёт проект и опубликует папку dist/spa.

Если сайт будет размещён НЕ в корне домена, а по адресу:
https://USERNAME.github.io/REPOSITORY/

то в vite.config.ts добавьте:

base: "/REPOSITORY/",

внутрь defineConfig(...).
