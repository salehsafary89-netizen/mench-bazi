سامانه صابر — Windows — بسته آماده GitHub Pages

این بسته بر اساس فایل «Saber Management Site Windows.html» ساخته شده است.
محتوای HTML اصلی بدون ویرایش نگه داشته شده و فقط نام فایل برای GitHub Pages به index.html تغییر داده شده است.

ساختار:
- index.html                 صفحه اصلی سایت
- manifest.json              فایل معرفی وب‌اپ/PWA
- sw.js                      Service Worker آماده برای HTTPS/GitHub Pages
- assets/saber-app-icon.png  لوگوی سامانه
- .nojekyll                  جلوگیری از پردازش Jekyll
- GITHUB-UPLOAD.txt          راهنمای آپلود

آپلود در GitHub Pages:
1. ZIP را استخراج کنید.
2. محتویات پوشه را در ریشه Repository قرار دهید؛ یعنی index.html مستقیماً در ریشه باشد.
3. Commit changes را بزنید.
4. در GitHub وارد Settings → Pages شوید.
5. Source را روی Deploy from a branch بگذارید.
6. Branch را روی main و Folder را روی / (root) قرار دهید و Save کنید.
7. چند لحظه صبر کنید و آدرس GitHub Pages مخزن را باز کنید.

نکته مهم:
- برای اینکه GitHub Pages سایت را باز کند، وجود index.html در ریشه ضروری است.
- فایل HTML دستکاری یا بازنویسی نشده است.
- manifest و sw به‌عنوان فایل‌های همراه آماده شده‌اند؛ خود HTML فعلی اگر Service Worker را ثبت نکند، sw.js به‌تنهایی اجرا نمی‌شود.
- اطلاعات LocalStorage با GitHub بین دستگاه‌ها همگام نمی‌شود؛ GitHub Pages به‌تنهایی سرور پایگاه داده نیست.
