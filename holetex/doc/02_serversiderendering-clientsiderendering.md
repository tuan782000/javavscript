Có nhiều chiến lược để render 1 trang web

Server-side-rendering và Client-Side-rendering là phổ biến nhất

rendering có nghĩa là nội dung được render ra nội dung của file. HTML ở trong môi trường server hay client.

client: trên trình duyệt

server: máy tính - nằm trong data center ở 1 nơi nào đó trên thế giới. Mà đang lưu trữ code ở phía backend

Điểm chung của 2 cách render này đều render ra cả index html trên server

Điểm khác là: server-rendering sẽ render ra toàn bộ nội dung của trang html trên phía server rồi mới gửi xuống phía client - sau khi render xong gửi trả lại cho client - trình duyệt sẽ hiển thị nội dung đó lên màn hình.

ưu điểm: server-rendering

- nhanh vì nội dung html có sẵn trên server - client chỉ cần nhận html từ server tiến hành parsing và rendering để hiển thị dữ liệu
- tối ưu cho ceo
- tăng trải nghiệm người dùng - cho những người dùng thiết bị yếu vẫn có thể thao tác mượt mà

Nhược:

- có kiến thức về server
- chuyển trang mới phải load lại 1 file html hoàn toàn mới

Những cái Blogs, News thì có nhiều nội dung để hiển thị thì nên dùng server-side-rendering
vì tối ưu được seo và tốc độ load lần đầu tiên

Client-side-renderign:

Trình duyệt gửi yêu cầu lên server - server sẽ render ra index.html đơn giản có chứa thẻ div có id là app - đặc biệt không có bất kỳ 1 nội dung nào khác

Server sẽ trả ngược về client file index này lúc này phía client đảm nhận load các file js cần thiết - chẳn hạn gọi các api để lấy dữ liệu - và đương nhiên sẽ sử dụng js để tương tác trên cây DOM chẳng hạn thêm xoá sửa các cái node "Điểm khác biệt là nội dung trên màn được render ra do client đảm nhận và xử lý"

Ưu:

- mượt mà bắt mắt nhiều animation giàu tính tương tác - loading thực hiện 1 request đến server đợi kết quả trả về
- không cần load quá nhiều khi di chuyển trên cùng 1 trang - vì các routing được xử hoàn toàn bởi js

Nhược:

- không thân thiện SEO "Không hiểu nội dung của trang web"
- tải lần đầu tiên sẽ rất lâu "vì load rất nhiều js"
