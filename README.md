Thứ nhất là về cái này ...
Nghĩa là mình sẽ clone ra một mảng mới chứa các phần tử của mảng cũ
VD: A = [1,2,3]
Muốn tạo ra cái B giống A
Ngta gọi là clone
B = A
=> B = [1,2,3]
Nhưng lúc này
B không phải mảng mới
Mà B chỉ bằng địa chỉ của A
Nên khi A thay đổi thì B cũng thay đổi theo
Nên ngta sẽ làm cách khác 
B = [...A]
Thì lúc này nghĩa là tạo ra cho mình 1 mãng mới rỗng [], rồi push hết nội dung của thằng A vào mảng mới B này

Thứ 2 là về Array(12)
Array là hàm tạo mảng
12 là số lượng phần tử mình muốn tạo
Array(12) => mảng có độ dài length là 12
Từ 2 thứ trên suy ra mục đích của mình muốn tạo 12 tháng thì mình clone ra 1 MẢNG RỔNG chứ 12 phần tử 
Chính là cái này [...Array(12)]
Hiểu tới bước này bạn Dân hãy qua mục thứ 3 

Thứ 3 là qua map
Map là 1 hàm cung cấp 1 callback function
Trong đó 2 thứ thường dùng là e = element và i = index của element đó
Map cơ bản là vòng lặp
For loop
element là mỗi phần tử khi nó lặp qua
còn index là vị trí của element hiện tại trong cái mảng mà mình đang dùng hàm map
Hiểu tui nói ko ?
Nên h để ý nè 
Array(12) là nó tạo ra 1 mảng rỗng có độ dài 12
=> mảng có 12 cái index nhưng mỗi index đều k chứa element nào
Nên Dân để ý là e bên trong map nó mờ (nó k sử dụng đến)
Vì mỗi lần lặp qua index thì ko có giá trị nên khi Dân console.log ra e nó sẽ bằng unfifined
Cách này ngta lợi dụng vị trí của element (còn gọi là chỉ mục index) để trả về danh sách tháng
Mà vị trí thì bắt đầu là 0 nên phải +1
Để chạy vòng lặp thành từ 1 tới 12
Xong return về <option key={i}>{i + 1}</option>
Nó sẽ show 12 cái option tương đương cái mảng mình gọi
key={i} là nó sẽ phân biệt option này với option khác
Ví dụ: i = 0 thì nó sẽ in ra 1 tương đương tháng 1

Thứ 4 có phải là ở trên nói e không sử dụng nhưng tại sao mình vẫn để nó trong hàm map
Tại vì mặc định của hàm map là element đứng vị trí đầu tiên và i đứng vị trí thứ 2
Nên khi bỏ e ra thì mặc định nó sẽ hiểu thành i là 1 element, nhưng mà mảng của mình là mảng rổng, k có element nên để v là vô nghĩa
E với I chỉ là tên thôi nên đặt sao cũng được
Nhưng mình muốn sử dụng thằng nào thì mình phải ghi những thằng trước thằng đó để cho hàm MAP nó hiểu "À rồi t biết m đang muốn sử dụng thằng này"
Nó hơi cực v đó nhưng để dễ hiểu hơn thì nó giống mixin trong scss
Dân muốn thay đổi thuộc tính cuối cùng thì Dân phải ghi lại hết mấy thằng trước nó
Còn cái nữa là về hàm year
Nó ngược lại thôi
const moonLanding = new Date('July 20, 2017 00:20:18');

console.log(moonLanding.getFullYear());
// expected output: 2017

Tân đã gửi Hôm nay lúc 01:28
let today = new Date();
let year = today.getFullYear();

console.log(today);

console.log(year);

/ expected output: Sun May 30 2021 01:22:08 GMT+0700 (+07)

/ expected output: 2021
{year - i}
Thì nó chạy ngược lại thôi
Nó in ra mảng đủ 100 phần tử
Tình từ năm hiện tại trở về trước
