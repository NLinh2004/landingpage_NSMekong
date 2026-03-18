# Mekong Agri – Landing Page

Sàn giao dịch nông sản B2B Đồng bằng sông Cửu Long.

## Công nghệ sử dụng

| Công nghệ | Phiên bản | Vai trò |
|---|---|---|
| **Vite** | 6.x | Build tool & Dev server |
| **React** | 19.x | Giao diện người dùng (UI) |
| **Tailwind CSS** | 4.x | Styling (qua `@tailwindcss/postcss`) |
| **Framer Motion** | 12.x | Hiệu ứng animation |

## Cài đặt & Chạy dự án

### Yêu cầu hệ thống
- [Node.js](https://nodejs.org/) phiên bản **18** trở lên
- npm (đi kèm Node.js) hoặc yarn

### Các bước thực hiện

```bash
# 1. Clone repo về máy
git clone <URL_REPO_CỦA_BẠN>
cd mekong-landing

# 2. Cài đặt thư viện
npm install

# 3. Chạy server phát triển (dev)
npm run dev

# 4. Mở trình duyệt tại http://localhost:5173
```

### Build bản production

```bash
npm run build
# File kết quả nằm trong thư mục dist/
```

## Cấu trúc thư mục

```
mekong-landing/
├── public/              # File tĩnh (favicon, icons)
├── src/
│   ├── assets/          # Hình ảnh, tài nguyên
│   ├── components/      # Các React components
│   │   ├── Navbar.jsx       # Thanh điều hướng (sticky, glassmorphism)
│   │   ├── Hero.jsx         # Banner chính (Headline & USP)
│   │   ├── Stats.jsx        # Số liệu thống kê nổi bật
│   │   ├── TargetAudience.jsx # Giá trị Seller & Buyer
│   │   ├── Features.jsx     # Tính năng cốt lõi (RFQ, Verified, Bảo mật)
│   │   ├── CTA.jsx          # Kêu gọi hành động
│   │   └── Footer.jsx       # Chân trang
│   ├── App.jsx          # Điểm lắp ghép các component
│   ├── main.jsx         # Entry point React
│   └── index.css        # CSS gốc + Tailwind theme
├── index.html           # HTML shell
├── vite.config.js       # Cấu hình Vite
├── postcss.config.js    # Cấu hình PostCSS + Tailwind
├── package.json         # Danh sách thư viện
└── .gitignore           # Bỏ qua node_modules, dist...
```

## Hướng dẫn chỉnh sửa cho người mới

1. Mở dự án bằng **Visual Studio Code** (khuyên dùng).
2. Cài extension: **ES7+ React/Redux/React-Native snippets**, **Tailwind CSS IntelliSense**.
3. Chạy `npm run dev` – trình duyệt tự cập nhật khi bạn sửa code (Hot Reload).
4. Muốn sửa nội dung? → Mở file trong `src/components/` tương ứng.
5. Muốn sửa màu sắc/font? → Mở `src/index.css`, chỉnh biến trong `@theme`.

## License
MIT
