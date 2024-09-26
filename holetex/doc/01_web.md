Khi mà người dùng muốn truy cập vào web - nguời dùng cần phải thông qua 1 phần mềm duyệt web - hay còn gọi trình duyệt web "Google, Firefox, Cốc Cốc, safari "

Để truy cập đến 1 trang web người dùng sẽ nhập url vào thanh địa chỉ của trình duyệt web - hoặc nhấn vào 1 đường link có sẵn để truy cập vào trang web

cấu tạo url:

https://google.com.vn

https hay còn gọi là protocol - schema - giao thức protocol

google.com.vn hay còn là domain - chia ra: subdomain và rootdomain

sau khi tìm kiếm nó sẽ xuất hiện thêm cái khái niệm "path"

https://academy.holetex.com/courses/

protocal: https - subdomain: academy - rootdomain: holetex.com - path: "courses"

Trình duyệt sẽ không biết trang web của bạn ở đâu trên không gian internet

Trong mạng máy tính có cái gọi là địa chỉ IP để xác định được đâu là máy tính của bạn trên internet - hay còn gọi cái địa chỉ đó là internet protocol - thế là mỗi máy tính sẽ liên lạc với nhau

Lúc này trình duyệt sẽ gửi subdomain và rootdomain - tới 1 domain name system DNS Server

Danh bạ: tên dễ nhớ gán cho domain - công việc dns server chuyển domain thành địa chỉ thực server rồi trả lại trình duyệt

Sau khi có được địa chỉ IP thực tế - trình duyệt gửi yêu cầu đến server - để tải nội dung trang web về (thông qua giao thức http hoặc https: đây là giao thức nền tảng dùng truyền tải dữ liệu trên internet) nó cũng là cách thức giao tiếp giữa các máy tính

Khi server nhận được yêu cầu trả về index.html

Parsing: Là bước trình duyệt phân tích và chuyển dữ liệu nhận được từ server trở thành cây DOM (Document Object Model) và cây CSSOM (CSS Object Model)

Render: Là bước trình duyệt dựa trên cây DOM và CSSOM để xây dựng thành 1 cây render và dựa trên cây render và vẽ các elements lên màn hình.

Parsing 2 bước nhỏ:
xây dựng 1 cây DOM từ html sau đó parsing thành 1 cây DOM - mô tả nội dung 1 cái document, trong quá trình này gặp phải thẻ img và link trình duyệt sẽ gửi thêm các request để lấy ra nội dung các files này về song song quá trình html parsing

Đối với các element script mà không sử dụng các thuộc tính như async hay defer thì nó sẽ làm quá trình bị dừng lại.

Thường các script hay đặt cuối tránh làm cho quá trình parsing gián đoạn

trường hợp đang parsing thì gặp các css link thì nó sẽ tải về sau mới tiếp tục xây dựng cây DOM

Sau khi xong hết chuyển qua bước render

Style - layout - paint

Interactivity: là các tương tác của người dùng với các element
