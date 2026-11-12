# Cách thêm / sửa / xoá dự án cá nhân trong portfolio

Mục **07 — Dự án cá nhân** trong portfolio không còn viết tay trong file HTML nữa.
Nó được dựng tự động từ một file dữ liệu. Sửa file đó, mở lại trang là thấy ngay.

## 3 thứ cần biết

| Thứ | Đường dẫn |
|---|---|
| File dữ liệu | `du-an-ca-nhan.js` |
| Thư mục ảnh | `anh_port_quynh/du-an-ca-nhan/` |
| Trang portfolio | `portfolio-tuyetquynh-2026-11-11.html` |

Cả ba nằm trong cùng thư mục `D:\2. PRODUCT\FILE LOGIC VẬN HÀNH\`. Đừng tách rời nhau,
nếu chuyển trang đi nơi khác thì mang theo cả file dữ liệu và thư mục ảnh.

## Thêm một dự án mới

1. Bỏ ảnh vào `anh_port_quynh/du-an-ca-nhan/`, đặt tên không dấu, ví dụ `kenh-sach.jpg`.
2. Mở `du-an-ca-nhan.js`, copy nguyên một khối `{ ... }` trong danh sách `duAn`, dán xuống dưới, đổi nội dung.
   Nhớ dấu phẩy ngăn giữa các khối, khối cuối cùng không cần dấu phẩy.
3. Lưu file, mở lại trang portfolio (F5).

Khung một dự án:

```js
{
  ma: 'ten-ngan-khong-dau',          // chỉ để mình phân biệt, không hiện ra trang
  ten: 'Tên dự án hiện trên trang',
  boiCanh: 'Một câu nói rõ bài toán. Để '' nếu không muốn hiện.',
  y: [
    'Gạch đầu dòng 1',
    'Gạch đầu dòng 2'
  ],
  anh: [
    {
      file: 'kenh-sach.jpg',          // tên file trong anh_port_quynh/du-an-ca-nhan/
      alt: 'Mô tả ảnh cho người không xem được ảnh',
      chuThich: '<b>Tiêu đề ảnh</b> · ghi chú thêm',
      link: ''                        // dán link vào đây thì bấm ảnh sẽ mở link
    }
  ],
  ketQua: ''                          // có chữ thì hiện ra khối "Kết quả" màu cam
}
```

## Xoá hoặc tạm ẩn

- **Tạm ẩn**, giữ lại nội dung để sau dùng: thêm dòng `an: true,` vào đầu khối đó.
- **Xoá hẳn**: xoá cả khối `{ ... }` và dấu phẩy của nó.

Số thứ tự "Dự án 01, 02, 03" tự đánh lại, dự án đang ẩn không bị tính.

## Định dạng chữ được phép dùng

Trong `ten`, `boiCanh`, các dòng `y`, `chuThich`, `ketQua` có thể dùng:

| Viết | Kết quả |
|---|---|
| `<b class="num">1.900 lượt thích</b>` | số liệu màu cam, in đậm |
| `<span class="hl">cụm cần nhấn</span>` | bôi highlight vàng |
| `<span class="hl warm">cụm cần nhấn</span>` | bôi highlight cam nhạt |
| `<b>đậm</b>` `<i>nghiêng</i>` | đậm, nghiêng |

## Mấy điều dễ sai

- **Đừng sửa mục 07 bằng nút "Sửa trực tiếp" trên trang.** Phần đó được vẽ lại mỗi lần mở trang,
  sửa tay sẽ bị ghi đè. Các mục khác thì sửa trực tiếp vẫn bình thường.
- Dấu nháy đơn trong câu phải viết `\'` hoặc đổi sang nháy kép bao ngoài, không thì file lỗi.
- Nếu mở trang mà mục 07 hiện dòng báo "Không đọc được file du-an-ca-nhan.js" thì hoặc file bị đổi tên,
  hoặc trong file có lỗi cú pháp. Mở trang, bấm F12, xem tab Console sẽ thấy dòng báo lỗi ở đâu.
- Số ảnh trong một dự án: 1 ảnh thì hiện khổ vừa canh giữa, 2 ảnh xếp 2 cột, từ 3 ảnh trở lên xếp 3 cột.
