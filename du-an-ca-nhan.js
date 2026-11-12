/* =====================================================================
   DU AN CA NHAN - co so du lieu cua muc "07 - Du an ca nhan"
   ---------------------------------------------------------------------
   File nay la NGUON DUY NHAT cua muc do. Muon them / sua / an mot du an
   thi sua o day roi mo lai trang, KHONG sua truc tiep trong portfolio.

   Cach them mot du an: copy mot khoi { ... } trong danh sach "duAn",
   dan xuong duoi, doi noi dung. Nho dau phay giua cac khoi.
   Cach an tam thoi (khong xoa): them  an: true  vao khoi do.
   Anh: bo file vao thu muc  anh_port_quynh/du-an-ca-nhan/
        roi ghi dung ten file o truong  file.

   The duoc phep dung trong chuoi chu:
     <b class="num">so lieu</b>          -> so mau cam, in dam
     <span class="hl">cau nhan</span>    -> boi vang
     <span class="hl warm">...</span>    -> boi cam nhat
     <b>...</b>  <i>...</i>
   ===================================================================== */

window.DU_AN_CA_NHAN = {

  /* Doan mo dau cua ca muc */
  moDau: 'Ngoài công việc ở công ty, em tự chạy vài kênh nội dung của riêng mình. Đây là chỗ em thử trọn một vòng marketing nhỏ: chọn ngách, dựng nội dung bằng agent, rồi tìm cách kiếm tiền từ nó.',

  /* Doan ket cua ca muc. De '' neu khong muon hien */
  ketLuan: 'Hai kênh này em làm ngoài giờ, tự bỏ tiền và tự chịu kết quả. Chúng không phải sản phẩm thương mại, em để ở đây vì chúng cho thấy cách em học: gặp việc lặp lại thì tìm cách để máy làm, rồi ghi lại để lần sau dùng tiếp.',

  duAn: [

    {
      ma: 'tieng-trung',
      ten: 'Kênh chia sẻ tips học tiếng Trung',
      boiCanh: 'Tự chạy một kênh nội dung ngách từ đầu: làm nội dung chia sẻ cách học tiếng Trung, rồi bán tài liệu học tập và gắn affiliate trên chính tệp người theo dõi đó.',
      y: [
        'Làm nội dung theo tuyến: lộ trình học, bộ thủ, giáo trình HSK, mẹo nhớ mặt chữ. Mỗi bài là một bước trong lộ trình nên người theo dõi có lý do quay lại',
        'Agent chạy trên máy cá nhân lo phần nặng: nghiên cứu từ khoá, soạn nháp theo nhóm chủ đề và xếp lịch đăng, em duyệt lại trước khi đăng',
        'Kiếm tiền bằng <span class="hl">bán file học tập và affiliate</span>, bài hướng dẫn tốt nhất đạt <b class="num">1.900 lượt thích</b>'
      ],
      anh: [
        {
          file: 'ca-nhan-tiengtrung.jpg',
          alt: 'Bài chia sẻ lộ trình học tiếng Trung trên kênh cá nhân',
          chuThich: '<b>Bài lộ trình học tiếng Trung</b> · 1.9K lượt thích, đã che tên tài khoản',
          link: ''
        }
      ],
      ketQua: ''
    },

    {
      ma: 'fact-tam-ly',
      ten: 'Fact tâm lý học có nguồn kiểm chứng',
      boiCanh: 'Mỗi ngày một fact tâm lý, nhưng phải dẫn được nghiên cứu gốc. Làm tay thì không thể đều, nên em để agent lo phần tìm và dựng bài.',
      y: [
        'Agent tự tìm nghiên cứu, rút fact và <span class="hl">dựng sẵn bài kèm nguồn kiểm chứng</span> (tên tác giả, năm, tạp chí), em kiểm lại nguồn trước khi đăng',
        'Chạy đều mỗi ngày theo dạng chuỗi đánh số, nên kênh có nhịp và người đọc theo dõi được tới ngày thứ bao nhiêu',
        'Doanh thu đến từ <span class="hl warm">affiliate</span> gắn vào các bài liên quan tới chủ đề đang nói'
      ],
      anh: [
        {
          file: 'ca-nhan-fact-tamly.jpg',
          alt: 'Bài fact tâm lý kèm nguồn nghiên cứu và bài affiliate',
          chuThich: '<b>Fact tâm lý kèm nguồn</b> · và bài affiliate đi kèm, đã che tên tài khoản',
          link: ''
        }
      ],
      ketQua: ''
    }

  ]
};
