سامانه صابر بسیج — بسته آماده GitHub Pages

فایل‌ها:
- index.html : نسخه کامل سامانه
- manifest.json : تنظیمات PWA
- sw.js : Service Worker برای حالت آفلاین در HTTPS
- saber-app-icon.png : آیکن برنامه
- .nojekyll : غیرفعال‌کردن Jekyll

راه‌اندازی روی GitHub Pages:
1) این فایل‌ها را در ریشه Repository قرار دهید.
2) GitHub > Settings > Pages
3) Source = Deploy from a branch
4) Branch = main و Folder = / (root)
5) Save
6) پس از انتشار، نشانی https://USERNAME.github.io/REPOSITORY/ را باز کنید.
7) در صورت وجود گزینه Enforce HTTPS آن را فعال کنید.

پشتیبان‌گیری داخل سامانه:
مرکز داده > دانلود بسته کامل صابر
یک ZIP ساخته می‌شود که داخل آن JSON کامل شامل داده‌های برنامه و کلیدهای LocalStorage قرار دارد. بازیابی ZIP یا JSON از همان بخش انجام می‌شود و در حالت بازیابی، اطلاعات با داده‌های موجود ادغام می‌شوند. پیش از ادغام نیز یک نسخه احتیاطی خودکار دانلود می‌شود.
