import { Post } from '@/validationSchemas/post.schema'

export const POSTS: Post[] = [
    {
        id: '1',
        title: 'Hướng dẫn sử dụng AutoCAD cho người mới bắt đầu',
        slug: 'huong-dan-su-dung-autocad-cho-nguoi-moi-bat-dau',
        shortDescription:
            'Phần mềm AutoCAD đã quá quen thuộc trong ngành CAD CAM, với độ sử dụng phổ biến hàng đầu trên toàn thế giới. Trải qua 60 năm phát triển, giờ đây AutoCAD được sử dụng cho nhiều ứng dụng, bao gồm các kế hoạch kiến trúc, bố cục và bản vẽ sản xuất sản phẩm. Nhờ vào tính ứng dụng linh hoạt  này đã khiến AutoCAD đã và đang trở thành tiêu chuẩn cần có cho một số ngành công nghiệp.',
        keywords: ['autocad', 'tutorial', 'newbie', 'huong-dan'],
        thumbnailUrl:
            'https://res.cloudinary.com/dqx1guyc0/image/upload/v1754559976/Cadsquad/posts/huong-dan-su-dung-autocad-cho-nguoi-moi-bat-dau_xaesjd.png',
        bgCoverUrl:
            'https://lagrandeourse.design/wp-content/uploads/2024/04/Techniques-de-prototypage-rapide-en-product-design.jpg',
        content: `
Phần mềm AutoCAD đã quá quen thuộc trong ngành CAD CAM, với độ sử dụng phổ biến hàng đầu trên toàn thế giới. Trải qua 60 năm phát triển, giờ đây AutoCAD được sử dụng cho nhiều ứng dụng, bao gồm các kế hoạch kiến trúc, bố cục và bản vẽ sản xuất sản phẩm. Nhờ vào tính ứng dụng linh hoạt  này đã khiến AutoCAD đã và đang trở thành tiêu chuẩn cần có cho một số ngành công nghiệp.

Đầu tiên chúng ta sẽ tìm hiểu cách di chuyển và sau đó chuyển ngay sang phần phác thảo 2D. Sau đó, chúng ta sẽ tiếp tục khám phá các công cụ vẽ kỹ thuật và mô hình 3D của nó. Cuối cùng nhưng không kém phần quan trọng, hãy tìm hiểu cách làm việc với các tệp lưới, bao gồm xuất các mô hình STL để in 3D.

# 1. Tổng quan về AutoCAD
AutoCAD được phát triển và duy trì bởi hãng Autodesk, gã khổng lồ phần mềm cũng cung cấp các chương trình mô hình CAD và 3D khác như Inventor , Revit , Maya , 3ds Max , Tinkercad và Fusion 360 .

AutoCAD là phần mềm thiết kế chuyên nghiệp, với mức giá niêm yết $1,775 mỗi năm cho người dùng phổ thông. Bên cạnh đó, AutoCAD hỗ trợ sử dụng miễn phí không giới hạn trong tối đa một năm, đối với khối giáo dục như sinh viên và giáo viên. Ngoài ra, Autodesk cung cấp bản dùng thử miễn phí 30 ngày cho người dùng mới sử dụng. Bạn hãy thử làm theo hướng dẫn dưới đây, 6 bước để thành công với AutoCAD dành cho người mới bắt đầu.

# 2. Hướng dân sử dụng AutoCAD cho người mới bắt đầu
## Bước 1: Biết giao diện người dùng
<img src="https://res.cloudinary.com/dqx1guyc0/image/upload/v1754560271/Cadsquad/posts/huong-dan-su-dung-auto-cad/autocad-tip-1_a6cjnd.png"/>

Trong bước đầu tiên của hướng dẫn này, chúng ta sẽ làm quen với giao diện người dùng và tìm hiểu cách tương tác cũng như thiết lập không gian làm việc.

Để bắt đầu một dự án mới trong AutoCAD, hãy nhấp vào “New” trên bảng điều khiển bên trái. Đây là màn hình làm việc chính của AutoCAD, nơi diễn ra toàn bộ quá trình thiết kế 2D và 3D. Những điều cơ bản chúng ta cần xem xét bao gồm:

• Quick Access Toolbar – Thanh công cụ Truy cập Nhanh: với tất cả các biểu tượng cơ bản cho các hành động như tạo, mở và lưu dự án. Người dùng có thể dễ dàng điều chỉnh các công cụ truy cập nhanh cần hiển thị theo thói quen sử dụng của mình.
• Ribbon – Dài ruy băng: chứa các công cụ và lệnh khác nhau được sắp xếp trong các tab. Thanh công cụ kiểu ruy băng phổ biến trong phần mềm CAD vì nó chứa một số lượng lớn công cụ trong một giao diện nhỏ gọn.
• Command Bar – Thanh lệnh , nơi người dùng có thể nhập lệnh thủ công bằng cách nhập chúng vào đây. Thanh lệnh cũng liệt kê thứ tự các bước cần thiết để thực hiện bất kỳ lệnh nào và cộng với một số mẹo bổ sung.
• Orientation tools – Các công cụ định hướng, như View Cube và NavBar, sẽ được mô tả chi tiết hơn trong phần tiếp theo.

### 1.1. Định hướng cơ bản
<img src="https://res.cloudinary.com/dqx1guyc0/image/upload/v1754560335/Cadsquad/posts/huong-dan-su-dung-auto-cad/autocad-tip-2_jazkiw.png"/>

View Cube, ở góc trên bên phải, được đặt ở chế độ xem trên cùng theo mặc định. Nếu bạn di chuột qua nó, một biểu tượng ngôi nhà nhỏ sẽ xuất hiện. Nhấp vào nó để vào chế độ xem mô tả hình ảnh các đối tượng 3D trong không gian 2 chiều.

Bây giờ, bạn sẽ thấy một hệ tọa độ 3D Descartes ở giữa không gian vẽ của mình, với ba trục và View Cube đã thay đổi vị trí. Bạn có thể nhấp vào các mặt, cạnh và góc của nó để đi đến chế độ xem mong muốn.

NavBar chứa các công cụ định hướng khác, nhưng thông thường đối với phần mềm CAD, phím tắt chuột được ưu tiên hơn. Để xoay quanh không gian vẽ, chỉ cần giữ nút bánh xe (chuột giữa) và di chuyển chuột xung quanh. Ngoài ra, nhấp vào biểu tượng “bàn tay” (pan) trên NavBar.

Giữ phím Shift và con lăn chuột cùng lúc, thay vì xoay, bạn sẽ quay quanh không gian vẽ xung quanh tâm của hệ tọa độ. Cũng có một nút Orbit trên NavBar (nếu bạn không muốn dùng phím tắt).

Các thông tin chia sẻ phía trên bao gồm những điều cơ bản về định hướng không gian vẽ. Tiếp theo, chúng ta sẽ hoàn tất việc thiết lập không gian làm việc để có thể bắt đầu phác thảo 2D.

### 1.2. Thiết lập không gian làm việc
<img src="https://res.cloudinary.com/dqx1guyc0/image/upload/v1754561639/Cadsquad/posts/huong-dan-su-dung-auto-cad/autocad-tip-3_gsenxp.png"/>

Trước tiên, hãy đưa ra tất cả các công cụ tạo mô hình 3D cần thiết để hoàn thành hướng dẫn này.

Nhìn vào Quick Access Toolbar, nhấp vào mũi tên kéo dài xuống dưới để tùy chỉnh thanh công cụ này. Một menu thả xuống sẽ bật lên; nhấp vào “Workspace” để bật tính năng này.

Lúc này Quick Access Toolbar sẽ hiển thị một nút mới. Theo mặc định, đó là “Drafting & Annotation”, nhưng hãy thay đổi nó thành “3D Modeling” bằng cách nhấp vào nó và chọn lựa chọn này từ menu thả xuống. Điều này sẽ cho phép bạn sử dụng tất cả các công cụ 2D và 3D cần thiết cho hướng dẫn tiếp theo.

Cuối cùng, để thay đổi đơn vị, hãy nhấp vào biểu tượng AutoCAD ở góc trên cùng bên trái. Thao tác này sẽ mở menu AutoCAD. Chuyển đến “Drawing Utilities > Units”. Trong hướng dẫn này, chúng ta sẽ sử dụng hệ mét, vì vậy hãy thay đổi “Insertion Scale” thành milimét.

Bây giờ chúng ta đã sẵn sàng để bắt đầu thiết kế.

## Bước 2: Phác thảo 2D
<img src="https://res.cloudinary.com/dqx1guyc0/image/upload/v1754561637/Cadsquad/posts/huong-dan-su-dung-auto-cad/autocad-tip-4_bfgp05.png"/>

Trước khi đi sâu vào các đối tượng ba chiều, trước tiên chúng ta hãy xem bản phác thảo 2D. AutoCAD được biết đến và sử dụng nhiều nhất nhờ khả năng vẽ của nó, ví dụ như phác thảo sơ đồ tầng và bố cục.
### 2.1. Chụp nhanh
<img src="https://res.cloudinary.com/dqx1guyc0/image/upload/v1754561635/Cadsquad/posts/huong-dan-su-dung-auto-cad/autocad-tip-5_odc7t5.png"/>

Grip snapping là một tính năng tuyệt vời để phác thảo với AutoCAD. Để bật Grid Snap, chỉ cần nhấn F9 trên bàn phím của bạn hoặc nhấp vào bật “Snap to Drawing Grid” ở góc dưới cùng bên phải.

Nhấp vào mũi tên mở rộng bên cạnh “nút Snap to Drawing Grid” và chọn “Snap Settings…”. Cửa sổ này cho phép bạn điều chỉnh lưới cũng như độ chính xác của việc bắt lưới. Chuyển đến tab “Object Snap” và kích hoạt nó.

Sau đó, bằng cách nhấn F3, chúng ta có thể kích hoạt chụp nhanh các góc, đường thẳng, điểm và điểm giữa, trong số nhiều tùy chọn. Để chọn các ràng buộc chụp đối tượng, nhấp vào mũi tên mở rộng như được hiển thị. Nhấp vào “Tangent” để kích hoạt nó, như hình trên.

Nếu bạn gặp sự cố khi nhập tọa độ hoặc phác thảo, hãy thử bật hoặc tắt “Snapping” và cố gắng không sử dụng Grid và Object Snap đồng thời. Công cụ này rất hữu ích để vẽ các bản phác thảo nhanh chóng và ngăn ngừa các lỗ hổng trong bản phác thảo của bạn.

### 2.2. Vẽ đường
<img src="https://res.cloudinary.com/dqx1guyc0/image/upload/v1754561632/Cadsquad/posts/huong-dan-su-dung-auto-cad/autocad-tip-6_xlbhfe.png"/>

Để tạo bản phác thảo đầu tiên của bạn, hãy chọn chế độ xem trên cùng bằng cách nhấp vào View Cube và tắt Grid Snap bằng F9.

Bây giờ, hãy chọn lệnh dòng trên Ribbon hoặc nhập “line”. Với AutoCAD, bạn có thể chỉ cần nhập các chữ cái đầu tiên của bất kỳ lệnh nào và phần mềm sẽ tự động hoàn thành và hiển thị mọi lệnh có sẵn.

Khi bạn đã nhập lệnh dòng, nó sẽ yêu cầu bạn chỉ định điểm đầu tiên. Bạn có thể nhấp vào một điểm ngẫu nhiên trong không gian vẽ của mình hoặc nhập tọa độ theo cách thủ công.

Nhập 0 cho tọa độ X, thay đổi trường nhập tọa độ Y bằng cách nhấn Tab và nhập cả 0 vào đó. Nhấn Enter để xác nhận.

Bây giờ bạn đã chọn tâm của hệ tọa độ làm điểm bắt đầu của đường thẳng, còn được gọi là CenterPoint, nằm ở tọa độ (0,0).

<img src="https://res.cloudinary.com/dqx1guyc0/image/upload/v1754561622/Cadsquad/posts/huong-dan-su-dung-auto-cad/autocad-tip-7_eeridz.png"/>

Bây giờ di chuyển chuột của bạn dọc theo trục Y. Lưu ý rằng đầu vào tọa độ sẽ thay đổi từ tọa độ Descartes sang tọa độ cực.

Nhập 25 cho chiều dài của đường và bằng cách nhấn Tab, nhập giá trị góc là 0. Nhấn Enter: Bạn đã vẽ được một đường.

Hãy thử phác thảo một hình vuông hoàn chỉnh ngay bây giờ. Lưu ý rằng giá trị góc luôn liên quan đến gốc tọa độ, vì vậy bạn sẽ phải nhập các giá trị góc tương ứng. Khi muốn quay lại trung tâm, hãy nhấn Esc để thoát lệnh dòng.
### 2.3. Chọn đối tượng
<img src="https://res.cloudinary.com/dqx1guyc0/image/upload/v1754561620/Cadsquad/posts/huong-dan-su-dung-auto-cad/autocad-tip-8_n3ie93.png"/>


Để chọn các đối tượng đã vẽ, chỉ cần nhấp chuột trái vào chúng. Bỏ chọn bằng cách giữ phím Shift và nhấp lại.

Chọn nhiều đối tượng bằng cách nhấp chuột trái (không giữ) và di chuyển chuột từ trái sang phải. Thao tác này sẽ chọn tất cả các đối tượng nằm trong hình chữ nhật màu xanh lam. Bây giờ, khi bạn kéo từ phải sang trái, bạn sẽ chọn tất cả các đối tượng được chạm vào bởi hình chữ nhật màu lục. Nhấp một lần nữa để xác nhận lựa chọn.

Nhấp và giữ nút chuột trái sẽ kích hoạt thòng lọng, cho phép bạn chọn một hình dạng ngẫu nhiên. Cùng với đó, hãy thực hành một chút bằng cách chọn hình vuông của bạn theo một số cách khác nhau. Khi bạn đã hoàn tất, hãy chọn nó một lần nữa và nhấn phím Delete hoặc gõ “delete” để xóa nó.

### 2.4. Vẽ hình
<img src="https://res.cloudinary.com/dqx1guyc0/image/upload/v1754561620/Cadsquad/posts/huong-dan-su-dung-auto-cad/autocad-tip-9_t1njrt.png"/>

Ngoài ra, AutoCAD cung cấp những cách dễ dàng hơn để vẽ các hình đơn giản. Nhấp vào biểu tượng “Rectangle” trên ruy-băng hoặc nhập biểu tượng đó vào thanh lệnh. Bây giờ, hãy nhập gốc hình chữ nhật là (0,0), giống như chúng ta đã làm cho dòng này và nhấn Enter.

Sau đó, lệnh Rectangle sẽ hỏi tọa độ góc đối diện. Nhập các giá trị của (10,60) và nhấn Enter. (Lưu ý rằng, đối với lệnh này, tọa độ Descartes được giữ nguyên và tính năng Object Snap phải được tắt để đường thẳng chặn vòng tròn đúng cách.)

<img src="https://res.cloudinary.com/dqx1guyc0/image/upload/v1754561620/Cadsquad/posts/huong-dan-su-dung-auto-cad/autocad-tip-10_fefdio.png"/>

Tiếp theo, hãy tạo một hình tròn có tâm là (0,50). Xác nhận tọa độ bằng cách nhấn Enter. Sau đó, đặt bán kính thành 8 mm.

Nếu bạn mắc lỗi, chỉ cần nhấp đúp vào bản phác thảo mà bạn muốn chỉnh sửa. Chỉnh sửa các giá trị trong cửa sổ bật lên.

Tiếp theo, tạo một hình elip có tâm là (0,30). Đặt bán kính chính (song song với trục X) thành 70 mm và bán kính phụ thành 30 mm, giống như hình bên dưới.

<img src="https://res.cloudinary.com/dqx1guyc0/image/upload/v1754561620/Cadsquad/posts/huong-dan-su-dung-auto-cad/autocad-tip-11_ydctvl.png"/>

Bây giờ, vẽ một vòng tròn thứ hai có tâm là (25,50) và bật Object Snap bằng cách nhấn F3. Không nhập bất kỳ giá trị nào, hướng bán kính của hình tròn đến trục Y cho đến khi nó giao với hình elip và nhấp chuột trái khi bạn nhìn thấy dấu thập màu lục.

<img src="https://res.cloudinary.com/dqx1guyc0/image/upload/v1754561621/Cadsquad/posts/huong-dan-su-dung-auto-cad/autocad-tip-12_wdgfea.png"/>

Hãy tạo thêm một vài dòng nữa. Vẽ một đường thẳng bắt đầu từ (10,55) và kết thúc nó tiếp xúc với đường tròn thứ hai. Nhấp để xác nhận điểm cuối cùng của đường thẳng khi biểu tượng tiếp tuyến nhỏ màu xanh lá cây xuất hiện.

<img src="https://res.cloudinary.com/dqx1guyc0/image/upload/v1754561621/Cadsquad/posts/huong-dan-su-dung-auto-cad/autocad-tip-13_xrt3w2.png"/>

Bắt đầu một dòng thứ hai ở góc trên cùng bên phải của hình chữ nhật (10,60). Sau đó, nhập một góc 135° và cắt đường tròn đầu tiên bằng đường thẳng. Bạn sẽ tạo được một hình giống như hình trên.

### 2.5. Tạo nếp gấp
<img src="https://res.cloudinary.com/dqx1guyc0/image/upload/v1754561621/Cadsquad/posts/huong-dan-su-dung-auto-cad/autocad-tip-14_gunrow.png"/>

Tiếp theo, hãy vẽ một nếp gấp. Với công cụ Spline, bạn có thể tạo các đường cong liên tục giữa các điểm kết nối. Tạo một spline bắt đầu từ điểm trung tâm (0,0). Đầu tiên, bạn thêm một khoảng cách, tiếp theo là một góc. Sau đó nhấn Enter để đi đến điểm tiếp theo.

Nhập các tọa độ cực sau: (20,30°), (5,300°), (5,55°), (10,30°) và (5,320°). Đối với điểm cuối cùng, hãy để trống cả hai giá trị và chặn hình elip theo cách thủ công như được hiển thị ở trên. Bây giờ hãy nhập ‘T’ và nhấn Enter để kết thúc tiếp tuyến. Nhấn Enter một lần nữa.

### 2.6. Cắt
<img src="https://res.cloudinary.com/dqx1guyc0/image/upload/v1754561621/Cadsquad/posts/huong-dan-su-dung-auto-cad/autocad-tip-15_xuy0oy.png"/>

Lệnh Trim được sử dụng để loại bỏ các dòng thừa cho đến nút giao. Bắt đầu bằng cách gõ “trim” và nhấp vào một đoạn đường để xóa nó. Bạn nên kết thúc với hình ảnh trên. Nếu bạn vô tình xóa một dòng, hãy nhấp vào “Undo” trên Quick Access Toolbar – Thanh công cụ truy cập nhanh.

Đảm bảo xem kỹ bất kỳ đường nào bị mắc kẹt giữa các cạnh nhỏ. Những thứ đó có thể sẽ trở thành một vấn đề nếu chúng ta định mô hình 3D cho nó. Nhấn Enter để xác nhận việc cắt sau khi bạn hoàn thành.

### 2.7. Tạo hình ảnh phản chiếu
<img src="https://res.cloudinary.com/dqx1guyc0/image/upload/v1754561621/Cadsquad/posts/huong-dan-su-dung-auto-cad/autocad-tip-16_wma9bt.png"/>

Đối với bước cuối cùng này, chúng ta sẽ sử dụng một công cụ phác thảo quan trọng: Mirror. Khi vẽ các bản phác thảo đối xứng, sẽ rất hữu ích nếu bạn chỉ cần vẽ một nửa bản phác thảo và sau đó phản chiếu nó.

Nhập “mirror” và sau đó chọn toàn bộ bản phác thảo và xác nhận bằng “enter”. Chọn CenterPoint (0,0) làm điểm đầu tiên của đường gương và cho điểm thứ hai là tọa độ dương dọc theo trục Y.

Nhấp vào “No” trên câu hỏi để xóa đối tượng nguồn. Bây giờ bạn đã phác thảo thành công bản nháp 2D trong AutoCAD.

## Bước 3: Thiết lập mô hình 3D
<img src="https://res.cloudinary.com/dqx1guyc0/image/upload/v1754561636/Cadsquad/posts/huong-dan-su-dung-auto-cad/autocad-tip-17_i067bm.png"/>

Mô hình 3D có thể là một trong những phần thú vị nhất của hướng dẫn này. Sử dụng 3D sẽ cho phép bạn thiết kế các mô hình của riêng mình để in 3D.

### 3.1: Tạo các hình cơ bản
<img src="https://res.cloudinary.com/dqx1guyc0/image/upload/v1754561625/Cadsquad/posts/huong-dan-su-dung-auto-cad/autocad-tip-18_xewrqd.png"/>


Hãy bắt đầu với một số công cụ mô hình hóa trực tiếp. Chúng ta sẽ sử dụng các hình dạng được xác định trước như hình cầu và hình khối để tạo các đối tượng thông qua các phép toán Boolean (hợp, trừ và giao nhau).

Đầu tiên, chuyển sang chế độ xem đẳng cự thông qua View Cube bằng cách nhấp vào biểu tượng ngôi nhà nhỏ. Sau đó,  hãy bắt đầu bằng cách tạo một hình cầu. Nhập “sphere” và căn giữa tại (0,0). Khi đã được thiết lập, hãy di chuyển chuột xung quanh nó để đạt được hình thức mong muốn. Ngoài ra, hãy nhập một giá trị cho bán kính, trong trường hợp này là 10 mm.

### 3.2. Thay đổi hình ảnh
<img src="https://res.cloudinary.com/dqx1guyc0/image/upload/v1754561629/Cadsquad/posts/huong-dan-su-dung-auto-cad/autocad-tip-19_jxupmy.png"/>


Nếu bạn muốn thay đổi hiệu ứng hình ảnh khi hiển thị các đối tượng 3D, bạn có thể thực hiện bằng cách nhập “visualstyles”. Một cửa sổ mới sẽ mở ra nơi bạn có thể chọn kiểu trực quan mà mình mong muốn.

Hãy thay đổi phong cách hình ảnh từ “2D Wireframe” thành “Shades of Grey”. Sau đó, hãy thử một số thao tác Boolean đã đề cập trước đây. Đầu tiên, hãy tạo một hình trụ chồng lên hình cầu mà chúng ta vừa tạo.

Để làm điều đó, hãy nhập “cylinder” và vẽ đáy của hình trụ giống như bạn vẽ một hình tròn đơn giản. Chọn CenterPoint (0,0) làm gốc và chọn bán kính 10 mm. Tiếp theo, tương tự với khối cầu, di chuyển chuột xuống phía dưới để thấy nó extrude. Đặt chiều cao của nó thành 25 mm và xác nhận bằng cách nhấn Enter. Chúng ta sẽ hoàn thành một kết quả giống như hình bên dưới.

<img src="https://res.cloudinary.com/dqx1guyc0/image/upload/v1754561625/Cadsquad/posts/huong-dan-su-dung-auto-cad/autocad-tip-20_ylrb5u.png"/>

Hoạt động đầu tiên là hợp nhất, nơi các đối tượng được hợp nhất. Khi đã tạo được 2 phần riêng biệt của hình cầu và hình trụ (trong ví dụ trên).  Để nối chúng, gõ “union” và chọn cả hai hình dạng. Xác nhận hoạt động bằng cách nhấn Enter và bây giờ bạn sẽ có một thể hợp nhất các hình đã chọn.

Ngoài ra, bạn sẽ quan tâm thêm cách tách rời và xóa các phần của khối đã tạo. Hãy nhấp vào “Undo” trên Thanh công cụ truy cập nhanh.

Sau đó, gõ “subtract” và nhập lệnh. Đầu tiên, chúng ta cần chọn đối tượng để tách rời Chọn hình trụ và xác nhận bằng cách nhấn Enter. Sau đó, chọn quả cầu làm đối tượng xóa và xác nhận.

<img src="https://res.cloudinary.com/dqx1guyc0/image/upload/v1754561622/Cadsquad/posts/huong-dan-su-dung-auto-cad/autocad-tip-21_gshoip.png"/>

Thao tác Boolean cuối cùng là cắt các đối tượng. Điều này sẽ chỉ giữ lại các khu vực có hai hoặc nhiều đối tượng chồng lên nhau.

Nhập “intersect” và chọn hình cầu và hình trụ. Bằng cách xác nhận hoạt động, bạn sẽ thấy kết quả dưới dạng bán cầu. Điều này là do hình trụ chỉ chồng lên nửa dưới của hình cầu.

Với các hình dạng cơ bản và ba thao tác đơn giản này, chúng ta có thể thiết kế rất nhiều bộ phận rồi. Tiếp theo, chúng ta sẽ xem mô hình khối hoạt động như thế nào trong AutoCAD.
### 3.3. Mô hình khối
<img src="https://res.cloudinary.com/dqx1guyc0/image/upload/v1754561627/Cadsquad/posts/huong-dan-su-dung-auto-cad/autocad-tip-22_qxwrvv.png"/>


Thay vì thiết kế các hình dạng cơ bản để xây dựng một đối tượng, các mô hình phức tạp hơn đòi hỏi một cách tiếp cận hoàn toàn khác. Ở bước này, hãy tạo một bản vẽ mới hoặc xóa bất kỳ thứ gì hiện có trong không gian vẽ của bạn.

Các công cụ chúng ta sẽ thấy tiếp theo là phổ biến trong thế giới CAD 3D. Hãy bắt đầu bằng cách tạo một đa giác 3D đơn giản với một trong những tính năng hữu ích nhất: Extrude.

### 3.4. Extrude
<img src="https://res.cloudinary.com/dqx1guyc0/image/upload/v1754561627/Cadsquad/posts/huong-dan-su-dung-auto-cad/autocad-tip-23_edmqgg.png"/>

Bắt đầu bằng cách tạo một bản phác thảo 2D của một hình bát giác. Nhập “polygon” và nhấn Enter. Đầu tiên, đặt số cạnh là 8, sau đó chọn CenterPoint (0,0) làm tâm và nhấp vào “Circumulated about circle”.

Nhập bán kính 80 mm và xác nhận. Bây giờ đến phần thú vị. Đầu tiên, gõ “extrude” và nhấn Enter. Chọn hình bát giác 2D mà chúng ta vừa vẽ và nhấn Enter một lần nữa để tạo đối tượng 3D.

Nếu bạn di chuyển chuột lên trên, bạn sẽ thấy phần đùn đa giác. Đặt chiều cao thành 25 mm và xác nhận bằng phím Enter. Hoạt động đùn có thể được thực hiện với bất kỳ bản phác thảo nào miễn là đó là hình dạng khép kín.

### 3.5. Xoay vòng
<img src="https://res.cloudinary.com/dqx1guyc0/image/upload/v1754561624/Cadsquad/posts/huong-dan-su-dung-auto-cad/autocad-tip-24_imkorh.png"/>

Tính năng tiếp theo trong hướng dẫn của chúng tôi được gọi là Revolve, để thiết kế trục hoặc đối tượng với đường đối xứng. Hãy bắt đầu bằng cách phác thảo đối tượng. Bắt đầu một đường tại CenterPoint và đi theo hình chữ ‘E’, như được hiển thị ở trên, tạo các đường cho đến khi hình được đóng lại.

<img src="https://res.cloudinary.com/dqx1guyc0/image/upload/v1754561628/Cadsquad/posts/huong-dan-su-dung-auto-cad/autocad-tip-25_zzlmng.png"/>

Để tạo khối, hãy nhập “revolve”, chọn các phần cần tạo và xác nhận. Sau đó, đối với trục quay, hãy nhập ‘Y’ và nhấn Enter. (Bạn sẽ thấy hình xoay quanh trục Y.)

Đặt góc thành 360° để xoay hoàn toàn và xác nhận. Từ đó sẽ tạo ra một khối hợp nhất mà bạn cần.

### 3.6. Loft
<img src="https://res.cloudinary.com/dqx1guyc0/image/upload/v1754561628/Cadsquad/posts/huong-dan-su-dung-auto-cad/autocad-tip-26_cyoqhy.png"/>

Bây giờ, hãy tìm hiểu một số tính năng khác để tạo khối. Chúng ta sẽ bắt đầu với “Loft”. Vẽ một đường tròn trên CenterPoint với bán kính 100 mm. Sau đó, tạo một hình lục giác ở mặt phẳng cao hơn. Để làm điều đó, hãy nhập “polygon” và chọn 6 cạnh. Trước khi nhập tọa độ cho tâm của nó, hãy nhấp vào thanh lệnh và nhập “0,0,50”.

Điều này sẽ yêu cầu AutoCAD tạo bản phác thảo trên mặt phẳng song song với XY nhưng ở độ cao 50 mm. Kết thúc đa giác bằng cách nhập bán kính 80 mm.

Gõ “Loft” để bắt đầu tính năng này. Chọn cả hình tròn và hình lục giác, rồi nhấn Enter. Chọn “Chỉ các mặt cắt ngang” để hoàn thiện công cụ. Điều này sẽ kết nối cả hai hình dạng và tạo ra một khối vững chắc bên trong. Đó là một cách tuyệt vời để kết hợp các hình dạng không khớp với nhau như hình tròn và hình đa giác.

### 3.7. Sweep
<img src="https://res.cloudinary.com/dqx1guyc0/image/upload/v1754561635/Cadsquad/posts/huong-dan-su-dung-auto-cad/autocad-tip-27_f2ijzx.png"/>

Tính năng Sweep rất hữu ích khi thiết kế các cấu trúc cong. Để thực hiện, trước tiên bạn cần phác thảo hình học cơ sở. Vẽ bất kỳ đa giác nào bạn thích trên CenterPoint.

Tiếp theo, chúng ta cần thay đổi hệ tọa độ để vẽ trên một mặt phẳng khác ngoài XY. Để thực hiện việc này, hãy chuyển đến Chế độ xem phía trước (Front view), nhập “ucs” và sau đó “v” để biến chế độ này thành Chế độ xem hàng đầu (Top view).

Bây giờ, vẽ một cung tại gốc tọa độ (0,0) bằng cách gõ “arc”. Đây sẽ là con đường quét. Vẽ một vòng cung rộng, không cắt ngang chính nó, tương tự như hình trên.

Cuối cùng, nhập “sweep”, trước tiên chọn cung đã vẽ và xác nhận. Sau đó chọn cơ sở và một lần nữa nhấn Enter.

<img src="https://res.cloudinary.com/dqx1guyc0/image/upload/v1754561630/Cadsquad/posts/huong-dan-su-dung-auto-cad/autocad-tip-28_poqza6.png"/>


Mặc dù tính năng này có vẻ đơn giản, nhưng nó cho phép bạn tạo các đối tượng có độ phức tạp cao. Vậy là, các nội dung chia sẻ tren đã cho chúng ta những thông tin hữu ích về công cụ quan trọng nhất cho mô hình 3D, từ việc xử lý các hình dạng cơ bản đến các tính năng CAD truyền thống hơn. Tiếp theo, chúng ta sẽ xem cách thao tác với các đối tượng này.

## Bước 4: Di chuyển & Căn chỉnh Đối tượng
<img src="https://res.cloudinary.com/dqx1guyc0/image/upload/v1754561631/Cadsquad/posts/huong-dan-su-dung-auto-cad/autocad-tip-29_nzuujs.png"/>

Chúng ta có thể thiết kế 3D hầu hết mọi phần trong AutoCAD với các tính năng và kỹ thuật đã chia sẻ ở bước trước. Tuy nhiên, các đối tượng cũng có thể bao gồm nhiều phần cần được lắp ráp lại với nhau. Hãy cùng tìm hiểu cách di chuyển và lắp ráp các mô hình 3D khác nhau.

Điều cơ bản đầu tiên. Di chuyển một đối tượng là một hoạt động rất đơn giản có thể được thực hiện theo nhiều cách. Bắt đầu bằng cách tạo một hình trụ có tâm ở (0,0), đường kính 100 mm và chiều cao 500 mm.

### 4.1. Di chuyển 3D
<img src="https://res.cloudinary.com/dqx1guyc0/image/upload/v1754561631/Cadsquad/posts/huong-dan-su-dung-auto-cad/autocad-tip-30_tprxam.png"/>

Điều đầu tiên cần làm là chọn các bộ phận để di chuyển. Nhập “3D move” và xác nhận lệnh để di chuyển. Trong trường hợp dưới đây, chọn hình trụ và nhấn Enter.

Tiếp theo, chúng ta cần chọn một điểm cơ sở để di chuyển. Với con chuột của bạn, chọn điểm trung tâm của cơ sở của hình trụ. Nhấn Enter để xác nhận.

Khi đã xác nhận những gì chúng mình muốn di chuyển, có nhiều cách khác nhau để di chuyển hình trụ xung quanh: bằng chuột qua mặt phẳng XY hoặc bằng cách nhập khoảng cách và hướng để di chuyển qua các tọa độ cực.

Chúng ta cũng có thể thực hiện các bản dịch tuyến tính thông qua các trục XZY. Lưu ý hình mũi tên ba trục ở tâm của hình trụ. Nhấp vào màu xanh (Z) để di chuyển nó theo chiều dọc bằng chuột hoặc bằng cách nhập khoảng cách.

Thao tác di chuyển cuối cùng này có thể được thực hiện bằng cách chọn đối tượng. Lưu ý rằng trục mũi tên sẽ được hiển thị.

### 4.2. Xoay 3D
<img src="https://res.cloudinary.com/dqx1guyc0/image/upload/v1754561636/Cadsquad/posts/huong-dan-su-dung-auto-cad/autocad-tip-31_vggtog.png"/>

Chúng ta cũng có thể thao tác với các đối tượng thông qua phép quay đơn giản. Điều này đặc biệt hữu ích cho các đối tượng được phác thảo trong mặt phẳng XY nhưng yêu cầu định vị lại.

Nhập “3D rotate”, chọn đối tượng và nhấn Enter. Lưu ý ba vòng tròn bao quanh hình trụ. Mỗi cái tương ứng với một trục quay và được tô màu tương ứng.

Ví dụ: nếu chúng ta muốn xoay một đối tượng qua trục Z của nó, chúng ta sẽ sử dụng tay cầm màu xanh lam, là màu của trục Z.

Bây giờ, hãy cho hình trụ của chúng ta quay 90° qua trục X. Nhấp vào vòng tròn màu đỏ. Lưu ý rằng hình trụ sẽ xoay quanh trục này khi bạn di chuyển chuột. Xoay nó đến 90° hoặc nhập giá trị và xác nhận.

### 4.3. Căn chỉnh
<img src="https://res.cloudinary.com/dqx1guyc0/image/upload/v1754561631/Cadsquad/posts/huong-dan-su-dung-auto-cad/autocad-tip-32_lkqc3d.png"/>

Cả hai công cụ 3D Move và 3D Rotate đều cho phép chúng ta thao tác hoàn toàn với các đối tượng trong không gian. Tuy nhiên, đôi khi chúng ta cần thứ gì đó nhanh hơn và thậm chí có thể trực quan hơn để di chuyển và đặt các vật thể.

Đây là lúc tính năng 3D Align – Căn chỉnh 3D phát huy tác dụng. Với điều này, chúng ta có thể nhanh chóng định vị hai hoặc nhiều đối tượng trong mối quan hệ với nhau, vì vậy đừng xóa hình trụ của bạn. Hãy tạo một hình cầu có đường kính 30 mm ở giữa (0,0).

<img src="https://res.cloudinary.com/dqx1guyc0/image/upload/v1754561632/Cadsquad/posts/huong-dan-su-dung-auto-cad/autocad-tip-33_zmnsgb.png"/>

Gõ “align” và xác nhận lệnh. Chỉ chọn hình cầu và nhấn Enter. Bây giờ, chọn tâm của hình cầu làm điểm cơ sở và sau đó chọn tâm của một mặt.

Một đường thẳng sẽ được vẽ, biểu thị chuyển động của quả cầu. Xác nhận bằng Enter và bạn sẽ thấy cả hai hình thẳng hàng.  Điều này có thể khá hữu ích khi sử dụng các hình cơ bản và phép toán Boolean, như bạn mong muốn.

## Bước 5: Làm việc với Bản vẽ kỹ thuật (Technical Drawings)
<img src="https://res.cloudinary.com/dqx1guyc0/image/upload/v1754561634/Cadsquad/posts/huong-dan-su-dung-auto-cad/autocad-tip-34_t0xobt.png"/>

AutoCAD là một công cụ tuyệt vời để tạo các bản vẽ kỹ thuật của các mô hình được tạo ở dạng 3D. Trước tiên, chúng ta sẽ cần một mô hình và trang mẫu cho bản vẽ của mình. Ví dụ dưới đây đang sử dụng kết quả mà chúng ta đã tạo ở bước 3 bằng cách sử dụng tính năng Revolve, với sự khác biệt duy nhất là lỗ 40 mm trên trục trung tâm.

Đối với mẫu, hiện tại chúng ta sẽ sử dụng một mẫu từ AutoCAD nhưng bạn có thể tìm thấy nhiều mẫu khác trực tuyến hoặc thậm chí tự thiết kế một mẫu cho chính mình.

Đảm bảo rằng chỉ có phần mà chúng ta muốn chi tiết nằm trong không gian vẽ. Sau đó nhấp chuột phải vào dấu “+” ở góc dưới cùng bên trái và nhấp vào “From Template…”. Chọn mẫu “Tutorial-mMfg” đi kèm với AutoCAD.

Thao tác này sẽ mở một cửa sổ mới với trang mẫu mà chúng ta đã chọn. Bạn có thể đặt tên của mình và tên của dự án trong khối tiêu đề ở dưới cùng bên phải của trang tính bằng cách nhấp đúp vào nó.

### 5.1: Chèn chế độ xem mô hình
<img src="https://res.cloudinary.com/dqx1guyc0/image/upload/v1754561628/Cadsquad/posts/huong-dan-su-dung-auto-cad/autocad-tip-35_v1qfrx.png"/>

Chuyển đến tab “Layout” trên Dải băng, sau đó nhấp vào “Base > From Model Space”. Bấm để đặt chế độ xem đầu tiên, theo mặc định là Front, ở giữa trang tính. Bạn sẽ nhận thấy một cửa sổ tùy chọn nhỏ sẽ bật lên.

Tại đây, bạn có thể chuyển chế độ xem sang chế độ xem khác bằng cách nhấp vào “Orientation”. Nếu mô hình quá lớn hoặc quá nhỏ, hãy nhấp vào “Scale” và thay đổi hệ số tỷ lệ. Đối với mô hình của chúng tôi, hãy đặt tỷ lệ thành 1:2.

Nhấp vào “Exit” từ cửa sổ tùy chọn để xác nhận chế độ xem đó. Bây giờ bạn có thể tiếp tục đặt các khung nhìn khác bằng cách kéo chuột theo chiều ngang hoặc chiều dọc.

Tạo một Top view dưới view thứ nhất như hình. Sau đó, di chuyển chế độ xem từ góc 45° để tạo chế độ xem đẳng cự ở góc dưới bên phải. Nhập ‘X’ và nhấn Enter để hoàn tất.

### 5.2. Thêm kích thước
<img src="https://res.cloudinary.com/dqx1guyc0/image/upload/v1754561623/Cadsquad/posts/huong-dan-su-dung-auto-cad/autocad-tip-36_xnrvxg.png"/>

Kích thước là phần thông tin quan trọng nhất trong bản vẽ kỹ thuật. Đôi khi số lượng thứ nguyên có thể khá áp đảo, vì vậy hãy cố gắng tuân theo ba quy tắc cơ bản sau:

• Bắt đầu từ chi tiết nhỏ nhất
• Chú thích một chi tiết chỉ một lần
• Chú thích từng chi tiết
Hãy thêm một số kích thước vào bản vẽ này. Đầu tiên, chuyển sang tab “Annotate” trên Ribbon và chọn lệnh “Dimension”. Đây là một lệnh thông minh thích ứng với tính năng bạn muốn chú thích.

Bây giờ hãy nhấp vào một dòng hoặc hai điểm để chú thích khoảng cách của nó. Sau đó, bạn sẽ thấy chiều dài hoặc bán kính và bạn có thể đặt các kích thước tương ứng.

<img src="https://res.cloudinary.com/dqx1guyc0/image/upload/v1754561626/Cadsquad/posts/huong-dan-su-dung-auto-cad/autocad-tip-37_m3aiut.png"/>


Định vị từng chú thích sao cho không chặn các dòng hoặc số khác và đảm bảo rằng chú thích không quá gần với chế độ xem. Đối với mô hình của chúng ta, nó sẽ trông giống như những hình ảnh trên.

Nếu bạn muốn thêm kích thước cho hình tròn hoặc lỗ, trước tiên hãy di chuột qua tính năng đó. Bạn có thể chuyển đổi giữa bán kính và đường kính bằng cách gõ ‘R’ hoặc ‘D’ trên bàn phím.

### 5.3. Chế độ xem mặt cắt
<img src="https://res.cloudinary.com/dqx1guyc0/image/upload/v1754561632/Cadsquad/posts/huong-dan-su-dung-auto-cad/autocad-tip-38_mgdqp9.png"/>

Hình chiếu mặt cắt rất phổ biến trong các bản vẽ kỹ thuật vì chúng có thể hiển thị các chi tiết và hình học bên trong mà nếu không thì sẽ bị bỏ sót.

Để tạo chế độ xem mặt cắt, hãy chuyển đến “Layout > Create View > Section View”. Chọn chế độ xem bạn muốn tạo một phần từ đó, sau đó nhấp vào hai điểm cho dòng phần.

Xác nhận bằng cách nhấn Enter và đặt chế độ xem phần giống như chúng tôi đã làm trước đây.

## Bước 6: Làm việc với lưới
<img src="https://res.cloudinary.com/dqx1guyc0/image/upload/v1754561622/Cadsquad/posts/huong-dan-su-dung-auto-cad/autocad-tip-39_cbrqqy.png"/>

Làm việc với mắt lưới rất quan trọng đối với những người quan tâm đến in 3D. Nếu bạn muốn in 3D hoặc chia sẻ sáng tạo của mình với người khác, bạn sẽ cần tạo hoặc thậm chí chỉnh sửa tệp lưới.

Các định dạng như STL và OBJ là định dạng của mô hình học 3D. Tuy nhiên, có rất nhiều phần mềm không hỗ trợ 2 loại định dạng này.  AutoCAD có thể xuất sang STL và OBJ tốt, nhưng để nhập các định dạng này, hãy làm theo hướng dẫn dưới đây.

### 6.1. Nhập STL và các Lưới khác
<img src="https://res.cloudinary.com/dqx1guyc0/image/upload/v1754561625/Cadsquad/posts/huong-dan-su-dung-auto-cad/autocad-tip-40_urbo3t.png"/>

Mặc dù không thể hoạt động tự nhiên với các tệp lưới, AutoCAD xử lý các định dạng tiêu chuẩn hóa khác như STEP và các định dạng trao đổi của Autodesk DWG và DXF .

Có rất nhiều tùy chọn để chuyển đổi mắt lưới sang các định dạng tệp như vậy. Có lẽ cách dễ nhất là sử dụng công cụ chuyển đổi trực tuyến do CAD-Forum cung cấp . Chúng ta chỉ cần tải lên STL và ứng dụng sẽ chuyển đổi nó thành DWG hoặc DXF.

Ngoài ra, bạn có thể sử dụng các chương trình CAD khác như Fusion 360 hoặc phần mềm miễn phí như FreeCAD để thực hiện chuyển đổi.

Để mở tệp DXF hoặc DWG ở chế độ 3D, hãy tạo một dự án mới. Sau đó vào “AutoCAD logo > Open > Drawing” và chọn tệp. Khi mô hình được nhập, bạn có thể thay đổi hình ảnh giống như chúng ta đã làm ở bước 3.

### 6.2. Xuất tệp STL
<img src="https://res.cloudinary.com/dqx1guyc0/image/upload/v1754561639/Cadsquad/posts/huong-dan-su-dung-auto-cad/autocad-tip-41_xdpp6e.png"/>

Việc xuất các tệp STL rất đơn giản với AutoCAD. Chỉ cần nhấp vào “AutoCAD logo > Export > Other File Formats” và chọn “Lithography (*.stl)” làm loại tệp trong trình duyệt tệp.

AutoCAD là một phần mềm CAD mạnh mẽ với một trong những hộp công cụ và tính năng tốt nhất để hỗ trợ các bản vẽ 2D. Khi nói đến thiết kế 3D, nó vẫn được đánh giá rất cao, đặc biệt là đối với dựng hình 3D .

Tuy nhiên, AutoCAD không phải là một ứng dụng dễ dàng và trực quan. Nếu bạn cảm thấy AutoCAD không phải là công cụ phù hợp với mình, hãy thử kiểm tra các tùy chọn mô hình 3D khác như <a href="https://sketchup.trimble.com/en">SketchUp</a>.
`.trim(),
        tags: ['autocad', 'tutorial', 'newbie', 'huong-dan'],
        countView: 1,
        createdAt: '2025-08-01T10:00:00Z',
        updatedAt: '2025-08-03T15:30:00Z',
    },
    {
        id: '2',
        title: 'Khám phá SketchUp 2022 - Công cụ thiết kế 3D mạnh mẽ cho kiến trúc sư',
        slug: 'sketchup-2022-danh-cho-kien-truc-su',
        shortDescription:
            'SketchUp 2022 là gì mà những người trong lĩnh vực thiết kế, kiến trúc, xây dựng lại quan tâm đến như vậy? Phần mềm này cung cấp các công cụ mới và cập nhật thường xuyên để tối ưu hóa quy trình làm việc của người dùng.',
        keywords: ['sketchup', 'kien-truc-su', 'thiet-ke'],
        thumbnailUrl:
            'https://res.cloudinary.com/dqx1guyc0/image/upload/v1754586524/Cadsquad/posts/sketchup-2022-danh-cho-kien-truc-su_y9jqbh.jpg',
        content: `
SketchUp 2022 là gì? Phần mềm này mang lại tiện lợi như thế nào nếu ngành bạn thuộc một trong những lĩnh vực thiết kế, kiến trúc, xây dựng và nội thất? Với giao diện đơn giản và dễ sử dụng, SketchUp đã trở thành công cụ không thể thiếu cho các kỹ sư và nhà thiết kế trên toàn thế giới.

# Giới thiệu SketchUp 2022

SketchUp là một phần mềm vẽ 3D được phát triển bởi công ty @Last Software, có trụ sở tại Boulder, Colorado, Mỹ. Phần mềm này qua 3 đời chủ sở hữu từ @Last Software, Google và hiện là Trimble đã mua lại SketchUp. Nó được sử dụng rộng rãi trong các lĩnh vực như kiến trúc, thiết kế nội thất, cảnh quan, kỹ thuật dân dụng, xây dựng, cơ khí, thiết kế phim và trò chơi điện tử. 

Có 4 phiên bản chính của SketchUp là SketchUp Free, SketchUp Shop thuộc nền tảng web, SketchUp Viewer và SketchUp Pro miễn phí tháng đầu, phiên bản trả phí với nhiều tính năng bổ sung và mới mẻ. 

![Giới thiệu SketchUp 2022](https://cdn2.fptshop.com.vn/unsafe/Uploads/images/tin-tuc/179760/Originals/sketchup-2022-1-(1).jpg)

SketchUp cung cấp 3D Warehouse, nơi người dùng có thể tìm và tải về các mô hình miễn phí như cửa sổ, cửa ra vào, ô tô. Ngoài ra, người dùng cũng có thể sử dụng các plugin từ Extension Warehouse để mở rộng tính năng của SketchUp 2022 và tích hợp các mô hình vào Google Earth.

# Thông tin cài đặt phần mềm

Để sử dụng SketchUp 2022 một cách mượt mà, bạn hãy đảm bảo rằng cấu hình máy của bạn đáp ứng đủ các yêu cầu sau:

- Bộ vi xử lý: Tối thiểu 2 GHz
- Bộ nhớ RAM: Ít nhất 2 GB
- Dung lượng ổ cứng: Tối thiểu 500MB
- Card đồ họa 3D: Bộ nhớ tối thiểu 512MB

Ngoài ra, SketchUp cũng hỗ trợ chạy trên cả các thiết bị Mac sử dụng chip M1 và các thiết bị Mac có bộ xử lý Intel, giúp đơn giản hóa quá trình cài đặt phần mềm của bạn.

# Các tính năng độc đáo trên Sketup

### Định dạng file đa dạng

![Định dạng file đa dạng](https://cdn2.fptshop.com.vn/unsafe/Uploads/images/tin-tuc/179760/Originals/sketchup-2022-2.jpg)

SketchUp cho nhập dữ liệu từ nhiều định dạng phổ biến khác nhau như là 3DS, DWG, KM, TGA, PNG, PSD,… Với SketchUp Pro, bạn có thể in hoặc xuất sản phẩm ra các định dạng như 3DS, DWG, OBJ, PDF, WRL, EPS, JPG và nhiều định dạng khác. Ngoài ra, phần mềm này cung cấp tính năng tạo báo cáo dưới dạng HTML hoặc CSV, bao gồm tất cả các thuộc tính của sản phẩm mẫu hoặc chỉ những thuộc tính bạn chọn.

### Tìm kiếm trong SketchUp dễ dàng

![Tìm kiếm trong SketchUp dễ dàng](https://cdn2.fptshop.com.vn/unsafe/Uploads/images/tin-tuc/179760/Originals/sketchup-2022-3.jpg)

Công cụ tìm kiếm trong SketchUp cho phép người dùng dễ dàng tìm và sử dụng các lệnh hay các tiện ích mở rộng đã được cài. Thay vì phải tìm kiếm trên thanh công cụ, bạn có thể nhập từ khóa liên quan đến công việc cần thực hiện như 'elevation', 'hide', 'boolean' hoặc 'chamfer'. Điều này giúp tiết kiệm thời gian và tập trung hơn vào việc thiết kế. 

Đối với người dùng mới, tính năng này giúp bạn làm quen dễ dàng hơn với giao diện và bộ công cụ của SketchUp. Đối với người dùng có kinh nghiệm, nó giúp tiết kiệm không gian màn hình và tạo ra trải nghiệm làm việc hiệu quả hơn. Tính năng này cũng hỗ trợ đa ngôn ngữ, giúp người dùng trên toàn thế giới sử dụng SketchUp một cách thuận tiện nhất.

### Chuyển file sang Google Earth

Một tính năng nổi bật của SketchUp 2022 là khả năng xuất sản phẩm sang Google Earth. Bạn có thể chia sẻ mô hình 3D của mình qua gmail hoặc tải lên Google mang tên 3D Web Warehouse. Đặc biệt, SketchUp Pro cho phép gắn nhãn địa lý (geo-tag) bằng ứng dụng Google Maps. Điều này giúp người dùng dễ dàng thêm vị trí địa lý cho mô hình của mình.

### Tìm và thay thế văn bản tiện lợi

![Tìm và thay thế văn bản tiện lợi](https://cdn2.fptshop.com.vn/unsafe/Uploads/images/tin-tuc/179760/Originals/sketchup-2022-4.jpg)

Ở các Layout, việc tìm và thay thế văn bản trên nhiều trang có thể trở nên phức tạp. Tuy nhiên, tính năng tìm và thay thế sẽ giúp bạn giải quyết vấn đề này một cách nhanh chóng và hiệu quả. Với chức năng này, bạn có thể thực hiện các thay đổi đối với văn bản trên một trang hoặc toàn bộ tài liệu một cách dễ dàng và tiện lợi. 

Việc này không chỉ giúp tăng tốc quá trình kiểm tra chất lượng mà còn giúp bạn cập nhật tiêu đề, số trang, thông tin vật liệu xây dựng và sửa lỗi chính tả một cách hiệu quả. Tính năng này cũng có thể được kích hoạt bằng cách sử dụng phím tắt hoặc từ menu Text trong Layout.

### Thiết kế slide trên SketchUp

![](https://cdn2.fptshop.com.vn/unsafe/Uploads/images/tin-tuc/179760/Originals/sketchup-2022-5.jpg)

Tạo bài thuyết trình cho sản phẩm 3D không còn nhàm chán nữa khi bạn sử dụng SketchUp 2022 Pro. Phần mềm này cung cấp một giao diện bố trí linh hoạt, dễ sử dụng giúp bạn xây dựng bài thuyết trình về mẫu sản phẩm 3D một cách hiệu quả và tiện lợi. Bạn có thể sắp xếp các tiêu đề, ghi chú, chèn ảnh và tùy chỉnh văn bản dễ dàng. 

Ở mục Styles cung cấp nhiều hiệu ứng hình ảnh và mục Planes giúp tạo ra các hình ảnh mặt cắt để hiển thị các góc nhìn cụ thể hơn về sản phẩm. Điều này giúp bài thuyết trình của bạn trở nên sống động và hấp dẫn hơn, đồng thời mang lại trải nghiệm tương tác thú vị cho người xem.

### Công cụ Stamp trong SketchUp

Công cụ Stamp trong SketchUp 2022 giúp bạn dễ dàng tạo ra nhiều bản sao của một đối tượng chỉ với một cú nhấp chuột. Điều này mang lại sự tiện lợi khi phân phối các đối tượng một cách tự nhiên trên khu vực bạn mong muốn. Ví dụ, bạn có thể sử dụng công cụ này để đặt các số liệu tỷ lệ hoặc tùy chọn khác trong thiết kế cảnh quan một cách nhanh chóng. 

### Công cụ Freehand

![Công cụ Freehand](https://cdn2.fptshop.com.vn/unsafe/Uploads/images/tin-tuc/179760/Originals/sketchup-2022-6.jpg)

Với khả năng tạo ra các đường cong mềm mại và linh hoạt hơn bao giờ hết, tính năng Freehand giúp người dùng mang lại trải nghiệm vẽ trơn tru hơn, Sau khi vẽ một đường cong, bạn có thể dễ dàng điều chỉnh mức độ chi tiết của nó. SketchUp cung cấp hình ảnh trực quan của mỗi lần thay đổi, giúp bạn đưa ra quyết định chính xác.

Bên cạnh đó, tính năng Freehand hỗ trợ khóa trục để xác định một mặt phẳng vẽ, giúp bạn vẽ liền mạch qua các mặt liền kề trên các mặt phẳng khác nhau. Công cụ này tạo điều kiện thuận lợi cho quá trình vẽ của bạn và giúp cho công việc của bạn trở nên linh hoạt và hiệu quả hơn.

### Công cụ vẽ 3D tuyệt vời

SketchUp 2022 là một phần mềm lý tưởng dành cho người thiết kế, nó cho phép người dùng thực hiện nhiều thao tác trên sản phẩm thiết kế của mình một cách dễ dàng và hiệu quả. Công cụ Push/Pull (trước đây được gọi là Extrude) là một ví dụ điển hình, hỗ trợ thêm hoặc bớt mẫu, di chuyển, sao chép và biến đổi hình dạng một cách tiện lợi.

![Công cụ vẽ 3D tuyệt vời](https://cdn2.fptshop.com.vn/unsafe/Uploads/images/tin-tuc/179760/Originals/sketchup-2022-7.jpg)

Trong SketchUp, người dùng có thể sử dụng các công cụ vẽ tự do, tạo hình cung, đường thẳng, và các hình dạng cơ bản khác, cũng như tận dụng các tính năng hữu dụng như tẩy. Các công cụ trong phần mềm này cho phép bạn thay đổi kích thước, tỷ lệ hình học, màu sắc và xoay sản phẩm 3D một cách linh hoạt.

Ngoài ra, công cụ Style Builder cung cấp các tính năng sáng tạo để bạn tạo ra các cảnh vẽ tay độc đáo. Người dùng cũng có thể chỉ định màu sắc cho mẫu sản phẩm của mình, tạo ra một diện mạo độc đáo và chuyên nghiệp.

### Auto-Text dựa trên khung nhìn

![Auto-Text dựa trên khung nhìn](https://cdn2.fptshop.com.vn/unsafe/Uploads/images/tin-tuc/179760/Originals/sketchup-2022-8.jpg)

Auto-Text dựa trên khung nhìn trong SketchUp Pro là một tính năng mới giúp tự động tạo nhãn trong Layout. Bạn có thể chọn các thẻ văn bản tự động như &lt;SceneName&gt;, &lt;SceneDescription&gt;, &lt;Scale&gt;, &lt;Ratio&gt;, và &lt;Coferences()&gt; từ menu Auto-Text để chèn thông tin như tên cảnh, mô tả cảnh, tỷ lệ hiện tại và các thông số khác từ mô hình SketchUp vào tài liệu của bạn.

Ví dụ, bạn có thể tự động chèn tiêu đề của bản vẽ bằng cách sử dụng thẻ &lt;SceneName&gt;, và sử dụng thẻ &lt;Scale&gt; để hiển thị tỷ lệ của khung nhìn hiện tại. Lệnh này giúp bạn tạo ra các mẫu thiết kế phù hợp và tự động cập nhật thông tin khi khung nhìn thay đổi.

### Tính năng Scene Search

![Tính năng Scene Search](https://cdn2.fptshop.com.vn/unsafe/Uploads/images/tin-tuc/179760/Originals/sketchup-2022-9.jpg)

Trong quá trình tạo mẫu trực quan về kiến trúc hoặc xây dựng, việc tạo nhiều cảnh khác nhau để hiển thị các chi tiết phức tạp là điều tất yếu. Đồng thời, khi bạn quản lý danh sách các cảnh với các tên mã hóa có thể mất khá nhiều thời gian quý báu để xem lại. 

Biết được điều đó, SketchUp 2022 đã cho ra tính năng Scene Search giúp người dùng có thể dễ dàng tìm kiếm và truy cập các cảnh một cách nhanh chóng hơn bằng cách sử dụng bộ lọc tìm kiếm được tích hợp ngay bên cạnh tab Scenes. Điều này giúp tiết kiệm thời gian và tăng cường hiệu suất làm việc khi tạo và quản lý các cảnh trong SketchUp.

### Tính năng Sequence Auto-Text

![Tính năng Sequence Auto-Text](https://cdn2.fptshop.com.vn/unsafe/Uploads/images/tin-tuc/179760/Originals/sketchup-2022-10.jpg)

Sequence Auto-Text trong SketchUp 2022 là một tính năng mới giúp tự động tăng số thứ tự của văn bản khi bạn sao chép nó. Tính năng này hữu ích cho việc chú thích bản vẽ, số liệu, tạo tiêu đề có số thứ tự, ghi chú và nhiều mục đích sử dụng khác mà trước đây phải thao tác chỉnh sửa văn bản mỗi khi sao chép, một quá trình tốn thời gian và công sức. 

Tương tự như thẻ &lt;PageNumber&gt; Auto-Text, bạn có thể sao chép và sử dụng lại thẻ Sequence nhiều lần theo ý muốn. Khi bạn xóa một thẻ trình tự, bạn có thể nhanh chóng và dễ dàng đánh số lại các hộp văn bản tương ứng trên toàn bộ tài liệu chỉ với một lệnh duy nhất - Renumber Sequence.

### Tính năng Zoom Selection

![Tính năng Zoom Selection](https://cdn2.fptshop.com.vn/unsafe/Uploads/images/tin-tuc/179760/Originals/sketchup-2022-11.jpg)

Zoom Selection là một tính năng mới trong SketchUp 2022 giúp bạn không còn phải chờ đợi độ trễ khi thu phóng. Nó cực kỳ hữu ích khi bạn làm việc với các trang Layout phức tạp, tính năng này cho phép bạn nhanh chóng di chuyển đến mức thu phóng mong muốn trong một vùng cụ thể của Layout. Điều này giúp giảm bớt các trở ngại khi phóng to hoặc thu nhỏ và tạo điều kiện cho trải nghiệm làm việc mượt mà và dễ thao tác hơn.

# Kết luận

Qua bài viết trên, CADSQUAD đã giới thiệu SketchUp 2022 là một phần mềm vẽ 3D hiệu quả và tiện ích. Với bộ công cụ đa năng, phần mềm này trở thành trợ thủ đắc lực của các nhà thiết kế trong mọi lĩnh vực. Bạn có thể đăng ký dùng thử SketchUp Pro để trải nghiệm nhiều tính năng hay hơn, giúp bạn xử lý công việc một cách thuận tiện và nhanh chóng. Hy vọng những thông tin được đề cập sẽ hữu ích với bạn. Chúc bạn thành công!
    `.trim(),
        tags: ['sketchup', 'kien-truc-su', 'thiet-ke'],
        countView: 678,
        createdAt: '2025-07-15T09:00:00Z',
        updatedAt: '2025-07-20T12:45:00Z',
    },
    {
        id: '3',
        title: '7 cách SketchUp giúp quy trình làm việc của bạn hiệu quả hơn',
        slug: '7-cach-sketchup-giup-quy-trinh-lam-viec-cua-ban-hieu-qua-hon',
        shortDescription:
            'Sau đây là bảy cách sử dụng SketchUp trong quy trình tạo mô hình 3D của bạn để mang lại các dự án tốt hơn —nhanh hơn — cho khách hàng.',
        keywords: ['tips', 'sketchup', 'thiet-ke'],
        thumbnailUrl:
            'https://res.cloudinary.com/uf-554203/image/upload/v1722962201/Arch_Daily_Highlight_Image_1_karykm.webp',
        content: `
## Sau đây là bảy cách sử dụng SketchUp trong quy trình tạo mô hình 3D của bạn để mang lại các dự án tốt hơn —nhanh hơn — cho khách hàng.

![Rendering in SketchUp of a commercial office building and surrounding courtyard.](https://res.cloudinary.com/uf-554203/image/upload/v1722962202/Arch_daily_hero_cqzlnm.jpg "7 cách SketchUp giúp quy trình làm việc của bạn hiệu quả hơn")

_Hình ảnh render trong SketchUp của một tòa nhà văn phòng thương mại và sân vườn xung quanh_

Trong thế giới thiết kế phát triển nhanh chóng, hiệu quả là yếu tố cốt lõi. Dù bạn là kiến trúc sư hay nhà thiết kế nội thất, việc sở hữu những công cụ phù hợp có thể tạo ra sự khác biệt trong việc tinh giản quy trình làm việc và hiện thực hóa các ý tưởng sáng tạo với ít rào cản nhất. SketchUp, một phần mềm thiết kế và mô hình 3D hàng đầu, sở hữu những công cụ mạnh mẽ giúp hàng triệu chuyên gia đẩy nhanh tiến độ phát triển dự án. Dưới đây là bảy cách mà SketchUp có thể giúp bạn đạt được mục tiêu của mình.

# 1. Phần mềm mô hình 3D trực quan và dễ sử dụng

Giao diện thân thiện với người dùng của SketchUp phù hợp cho cả người mới bắt đầu và các chuyên gia dày dạn kinh nghiệm. Sự đơn giản của các công cụ cho phép người dùng bắt đầu mô hình hóa nhanh chóng mà không cần thời gian học hỏi lâu dài. Giao diện trực quan này giúp giảm thời gian học cách sử dụng phần mềm, cho phép bạn tập trung nhiều hơn vào các dự án thiết kế của mình.

Trên trang đánh giá độc lập [G2](https://www.g2.com/products/sketchup/reviews?utf8=%E2%9C%93&filters%5Bsentiment_snippet%5D=506440), khách hàng đánh giá mức độ dễ sử dụng của SketchUp đạt 92%, cao hơn hẳn so với mức trung bình trong ngành công cụ vẽ kiến trúc.

> “Điều làm nên sự khác biệt của SketchUp là tính trực quan đáng kinh ngạc của nó. Là một người gặp khó khăn trong việc hình dung các khái niệm trong đầu, SketchUp cho phép tôi khám phá các ý tưởng một cách tự do.”
> 
> Brad Holley, Giám đốc Thiết kế

Brad Holley, một nhà thiết kế chuyên nghiệp sử dụng SketchUp hàng ngày, tạo ra các thiết kế hồ bơi tùy chỉnh cho những ngôi nhà cao cấp. Ông yêu thích cách các công cụ dễ sử dụng cho phép ông thiết kế mà không bị gò bó, để trí tưởng tượng bay xa.

![SketchUp model of Brad Holley’s Million Dollar Pool 2023 Miami Vice design.](https://res.cloudinary.com/uf-554203/image/upload/v1722962201/Arch_Daily_Highlight_Image_1_karykm.webp "7 cách SketchUp giúp quy trình làm việc của bạn hiệu quả hơn")

_Mô hình SketchUp của thiết kế Hồ bơi Triệu đô 2023 Miami Vice của Brad Holley_

# 2. Công cụ hình ảnh hóa 3D mạnh mẽ

Hình ảnh hóa không chỉ đơn thuần là những bức ảnh đẹp—chúng đóng vai trò quan trọng trong quy trình thiết kế và xây dựng. Những nhà thiết kế có khả năng trình bày hình ảnh mạnh mẽ có thể minh họa rõ ràng cách các thiết kế của họ trở nên sống động và cải thiện khả năng hiểu không gian của khách hàng. Sử dụng phối cảnh 3D giúp nhận diện các vấn đề thiết kế tiềm ẩn sớm, tiết kiệm thời gian và tài nguyên.

Hãy khám phá [những lợi ích hàng đầu](https://blog.sketchup.com/home/top-10-benefits-of-visualization-for-architects-and-designers) của việc sử dụng hình ảnh mạnh mẽ cho kiến trúc sư và nhà thiết kế.

![SketchUp rendering of building using Diffusion](https://res.cloudinary.com/uf-554203/image/upload/v1722962202/Arch_Daily_Highlight__Gif_2_pgx6pg.gif "SketchUp Diffusion rendering")

_Hình ảnh render SketchUp của tòa nhà sử dụng Diffusion_

Một thách thức mà các nhà thiết kế thường gặp phải là muốn tạo ra những hình ảnh chất lượng cao nhưng lại phải đối mặt với các thời hạn gấp gáp và thiếu thời gian để thêm các chi tiết thực tế. Đó là lý do tại sao việc lựa chọn phần mềm render dễ sử dụng và nhanh chóng là rất quan trọng.

Các kỹ sư phần mềm của SketchUp đã tích hợp các công cụ AI mạnh mẽ trong giao diện để giúp các kiến trúc sư và nhà thiết kế tạo ra hình ảnh một cách nhanh chóng. Ví dụ, Diffusion mang lại trải nghiệm AI sinh tạo dễ sử dụng trong SketchUp, cung cấp một cách thức mới lạ để tạo ra những hình ảnh kích thích sự sáng tạo và hỗ trợ trong việc xây dựng câu chuyện thiết kế.

# 3. Dễ dàng hợp tác và chia sẻ

Các dự án thiết kế thường yêu cầu sự hợp tác giữa nhiều bên liên quan. Dự án càng lớn, càng có nhiều bên tham gia, và việc duy trì sự nhất quán về mong đợi giữa các nhóm có thể trở nên thách thức đối với các kiến trúc sư và chuyên gia xây dựng. SketchUp có nhiều công cụ để hỗ trợ giao tiếp, từ chế độ thuyết trình trên iPad đến trải nghiệm VR không dây với Meta Quest.  
Chia sẻ mô hình với khách hàng và đồng nghiệp trở nên dễ dàng thông qua Trimble Connect, một nền tảng cộng tác dựa trên đám mây được thiết kế riêng cho ngành xây dựng. Trimble Connect đảm bảo rằng tất cả những người liên quan đều có quyền truy cập vào phiên bản mới nhất của mô hình, giúp việc cộng tác và phản hồi theo thời gian thực trở nên dễ dàng.

SketchUp giúp dễ dàng hợp tác giữa các phần mềm khác nhau trong ngành AEC, do đó các nhà thiết kế không phải lựa chọn giữa các chương trình phần mềm kiến trúc. Quy trình làm việc từ Revit đến SketchUp là một quy trình làm việc nổi tiếng và được sử dụng rộng rãi, được tối ưu hóa với Revit Importer. Tuy nhiên, cũng có các quy trình cộng tác dành cho các kỹ sư kết cấu, chuyên gia xây dựng, và người khảo sát, những quy trình này có thể tận dụng các công nghệ khác của Trimble như Tekla, Site Vision và Trimble Business Center.

# 4. Thư viện mở rộng các mô hình 3D miễn phí, sẵn sàng sử dụng

Một trong những điểm thu hút của SketchUp là thư viện mô hình 3D, 3D Warehouse, nơi bạn có thể tải xuống các sản phẩm từ nhà sản xuất hoặc mô hình trang trí mà không cần phải xây dựng từng chi tiết từ đầu.

> “Một trong những điểm nổi bật của SketchUp là 3D Warehouse, nơi lưu trữ hàng triệu mô hình có sẵn. Với nó, chúng tôi có thể tiếp cận bất cứ thứ gì; nếu tôi cần đưa khoai tây chiên vào một dự án, tôi sẽ tìm thấy chúng ở đó.”
> 
> Thiago Rodrigues, Đối tác

Công cụ tìm kiếm sử dụng AI giúp bạn lọc qua hàng triệu mô hình có sẵn trên 3D Warehouse, để bạn có thể tìm thấy những gì mình cần một cách nhanh chóng. Bạn cũng có thể sử dụng tính năng tìm kiếm bằng hình ảnh để tìm các kết cấu thực tế và các đối tượng sẵn sàng sử dụng.
    `.trim(),
        tags: ['tips', 'sketchup', 'thiet-ke'],
        countView: 845,
        createdAt: '2025-06-10T11:30:00Z',
        updatedAt: '2025-06-11T14:20:00Z',
    },
    {
        id: '4',
        title: 'AutoCAD là gì? Những ứng dụng của AutoCAD trong các lĩnh vực',
        slug: 'autocad-la-gi-ung-dung-trong-cac-linh-vuc',
        shortDescription:
            'AutoCAD là ứng dụng có lẽ không quá xa lạ đối với dân kỹ thuật, thiết kế. Nhưng nếu bạn chưa biết về phần mềm này là gì và những ứng dụng của AutoCAD trong các lĩnh vực là như thế nào thì hãy theo dõi hết bài viết này để hiểu rõ hơn nhé.',
        keywords: ['AutoCAD là gì', 'Ứng dụng của AutoCAD', 'Phần mềm AutoCAD'],
        thumbnailUrl:
            'https://cdn-media.sforum.vn/storage/app/media/wp-content/uploads/2021/08/autocad-home-of-engineerings-200811-e1682247805270.jpg',
        content: `
# AutoCAD là gì?

AutoCAD được viết tắt của **Automatic Computer Aided Design**, dịch từ tiếng Anh có nghĩa là “**Thiết kế hỗ trợ máy tính tự động**”. Đây là phần mềm được sử dụng để tạo ra các bản vẽ kỹ thuật bằng vector 2D hoặc các bản vẽ bề mặt khối 3D. AutoCAD được phát triển bởi tập đoàn **Autodesk** và ra mắt lần đầu vào tháng 12 năm 1982.

AutoCAD hỗ trợ nhiều **API** (**Application Programming Interface**, dịch: giao diện lập trình ứng dụng) để dựng các vật thể đặc chế và tự động hóa như **AutoLISP, Visual LIPS, [VBA](https://fptshop.com.vn/tin-tuc/danh-gia/vba-la-gi-nhung-ung-dung-huu-ich-cua-vba-cho-mot-vai-linh-vuc-cong-viec-146813), .NET**,… Không những vậy, AutoCAD còn là chương trình kỹ thuật duy nhất có thể chạy trên máy tính cá nhân.

AutoCAD được sử dụng rất nhiều và là ứng dụng gần như không thể thiếu cho những người làm việc trong các lĩnh vực kiến trúc, xây dựng, công nghiệp, kỹ thuật bởi khả năng tạo bản vẽ chi tiết và có độ chính xác cao. Những lĩnh vực này không chỉ đòi hỏi khả năng thiết kế để có thể hình dung vật thể trong không gian 3D mà còn cần độ chính xác tỷ lệ trong thực tế để thi công.

![AutoCAD là gì?](https://cdn2.fptshop.com.vn/unsafe/Uploads/images/tin-tuc/150701/Originals/autocad-la-gi-1.jpg)

# Tính năng của AutoCAD

- Các công cụ hỗ trợ vẽ vector 2D và bề mặt khối chủ thể 3D
- Tạo bản vẽ thiết kế theo tỷ lệ chính xác trong thực tế
- Hỗ trợ các công cụ điều chỉnh kích thước
- Có thể tính toán số lượng vật liệu cần thiết để thi công
- Hỗ trợ API với nhiều ngôn ngữ: VBA, .NET, AutoLISP,…

![Tính năng của AutoCAD](https://cdn2.fptshop.com.vn/unsafe/Uploads/images/tin-tuc/150701/Originals/autocad-la-gi-3.jpg)

# Lợi ích khi sử dụng AutoCAD

### Đo lường và vẽ theo tỷ lệ chính xác

AutoCAD mang lại cho người dùng khả năng đo lường, tính toán chính xác để có thể vẽ tỷ lệ đúng với sản phẩm thực tế

### Tính toán vật liệu chi tiết

Ngoài cho phép người dùng vẽ theo tỷ lệ, AutoCAD còn có thể tính toán chi tiết diện tích, khối lượng thể tích, trọng tâm bản vẽ và đặc biệt là số lượng vật liệu cần thiết để sản xuất sản phẩm hoặc thi công dự án. Nhờ vào đó, bạn có thể quản lý và điều chỉnh các thông số và chi phí của dự án.

### Dễ dàng làm quen và sử dụng

Khả năng dễ sử dụng là một ưu điểm của AutoCAD. Phần mềm này có giao diện thân thiện, trực quan giúp cho người dùng có thể tiếp cận, làm quen và sử dụng nhanh chóng.

### Nâng cao năng suất

AutoCAD là công cụ hỗ trợ đắc lực cho các nhà thiết kế và chuyên gia kỹ thuật với các công cụ giúp đơn giản hóa công việc. Ứng dụng giúp tăng năng suất làm việc, tạo ra các quy trình hiệu quả. Từ đó tiết kiệm về thời gian, chi phí và hạn chế các rủi ro sai sót.

### Nhập xuất tệp tin dễ dàng

Chương trình này hỗ trợ người dùng có thể nhập các bản thiết kế, mô hình có sẵn vào dễ dàng. Cung cấp khả năng quản lý các dự án của bản thân. Ngoài ra, việc chia sẻ công việc giữa các thành viên, đối tác và những người khác cũng đơn giản.

![Lợi ích khi sử dụng AutoCAD](https://cdn2.fptshop.com.vn/unsafe/Uploads/images/tin-tuc/150701/Originals/autocad-la-gi-4.jpg)

# Những ứng dụng của AutoCAD trong các lĩnh vực

### Lĩnh vực kiến trúc

Kiến trúc có lẽ là lĩnh vực ứng dụng AutoCAD phổ biến nhất. Đây là công cụ gần như bắt buộc phải có những kiến thức nhất định đối với những người làm trong ngành này. Các bản vẽ công trình xây dựng, tòa nhà, cầu đường,… dưới dạng 2D và 3D hầu hết đều được tạo ra từ AutoCAD. Tính năng về tính toán vật liệu sử dụng rất hữu ích cho lĩnh vực kiến trúc.

### Lĩnh vực thiết kế nội thất

Lĩnh vực nội thất đề cập đến cách sắp xếp, bày trí và tạo ra các không gian nội thất hợp lý cho một căn nhà hay văn phòng. AutoCAD giúp các chuyên gia trong lĩnh vực nội thất tạo bản vẽ, hình dung cách sắp xếp phù hợp với công năng của từng món đồ. Ngoài ra AutoCAD còn đưa ra các bản thiết kế demo để trình bày cho khách hàng.

### Lĩnh vực kỹ thuật, cơ khí

AutoCAD được sử dụng rất nhiều trong các dự án xây dựng, thi công các cơ sở hạ tầng kỹ thuật công nghiệp và dân dụng như khu quy hoạch, phức hợp, khu công nghiệp hay các công trình cầu đường, tòa văn phòng.

### Lĩnh vực kỹ thuật ô tô

Trong lĩnh vực kỹ thuật ô tô, AutoCAD được sử dụng để thiết kế và mô phỏng các chi tiết, bộ phận cụ thể để sản xuất ra một chiếc xe.

### Lĩnh vực hàng không vũ trụ

Ngành hàng không vũ trụ đòi hỏi độ chính xác gần như tuyệt đối vì bất kỳ sai sót nào cũng có thể gây ra hậu quả lớn và tiêu tốn khoản chi phí khổng lồ. Vậy nên AutoCAD đã giúp mô phỏng chi tiết và chính xác các thiết bị, máy móc. Ứng dụng còn được sử dụng để thiết kế vệ tinh, tên lửa, máy bay,…

![Những ứng dụng của AutoCAD trong các lĩnh vực](https://cdn2.fptshop.com.vn/unsafe/Uploads/images/tin-tuc/150701/Originals/autocad-la-gi-5.jpg)

Trên đây là tất cả những gì bạn cần biết về phần mềm AutoCAD về AutoCAD là gì, các tính năng, lợi ích và những ứng dụng của nó trong các lĩnh vực khác nhau. Hy vọng là qua bài viết bạn đã có thể hiểu rõ hơn về công cụ này. Cám ơn các bạn đã theo dõi bài viết.
    `.trim(),
        tags: ['nodejs', 'fs', 'backend'],
        countView: 390,
        createdAt: '2025-08-01T13:00:00Z',
        updatedAt: '2025-08-01T13:30:00Z',
    },
    {
        id: '5',
        title: 'Tổng hợp các lệnh cơ bản và ứng dụng thực tế trong thiết kế kỹ thuật',
        slug: 'autocad-la-gi-lenh-co-ban-va-ung-dung',
        shortDescription:
            'AutoCAD là phần mềm ứng dụng CAD để vẽ (tạo) bản vẽ kỹ thuật bằng vectơ 2D hay bề mặt 3D, được phát triển bởi tập đoàn Autodesk. Với phiên bản đầu tiên được phát hành vào cuối năm 1982, AutoCAD là một trong những chương trình vẽ kĩ thuật đầu tiên chạy được trên máy tính cá nhân, nhất là máy tính IBM',
        keywords: [
            // 🔑 Từ khóa chính
            'AutoCAD là gì',
            'Lệnh AutoCAD cơ bản',
            'Ứng dụng AutoCAD',

            // 🔍 Từ khóa phụ
            'Học AutoCAD cho người mới',
            'AutoCAD trong thiết kế kỹ thuật',
            'Lệnh tắt trong AutoCAD',
            'Cách sử dụng AutoCAD',
            'AutoCAD cho kỹ sư và kiến trúc sư',

            // 📈 Từ khóa mở rộng
            'Tổng hợp lệnh AutoCAD thường dùng',
            'AutoCAD là gì và dùng để làm gì',
            'AutoCAD ứng dụng trong xây dựng và cơ khí',
            'Cách tạo phím tắt trong AutoCAD',
            'Lệnh AutoCAD 2D và 3D cơ bản',
        ],
        thumbnailUrl:
            'https://cdn-media.sforum.vn/storage/app/media/giakhanh/autocad/autocad-6.jpg',
        content: `
# AutoCAD là gì?

AutoCAD là phần mềm ứng dụng CAD để vẽ (tạo) bản vẽ kỹ thuật bằng vectơ 2D hay bề mặt 3D, được phát triển bởi tập đoàn Autodesk.
Với phiên bản đầu tiên được phát hành vào cuối năm 1982, AutoCAD là một trong những chương trình vẽ kĩ thuật đầu tiên chạy được trên máy tính cá nhân, nhất là máy tính IBM.

Ngược lại, phần nhiều phần mềm vẽ kĩ thuật thời này được sử dụng trên thiết bị đầu cuối đồ họa (graphics terminal) nối với máy tính lớn hay máy trạm.

# Các lệnh cơ bản nhất trong Auto CAD 3

1. 3A ­- 3DARRAY: Sao chép thành dãy trong 3D  
2. 3DO – ­3DORBIT: Xoay đối tượng trong không gian 3D  
3. 3F – 3DFACE: Tạo mặt 3D  
4. 3P ­- 3DPOLY: Vẽ đường PLine không gian 3 chiều  
5. A ­- ARC: Vẽ cung tròn  
6. AA -­ AREA: Tính diện tích và chu vi 1  
7. AL ­- ALIGN: Di chuyển, xoay, scale  
8. AR -­ ARRAY: Sao chép đối tượng thành dãy trong 2D  
9. ATT -­ ATTDEF: Định nghĩa thuộc tính  
10. ATE ­- ATTEDIT: Hiệu chỉnh thuộc tính của Block  
11. B ­- BLOCK :Tạo Block  
12. BO -­ BOUNDARY: Tạo đa tuyến kín  
13. BR ­- BREAK: Xén 1 phần đoạn thẳng giữa 2 điểm chọn  
14. C ­- CIRCLE: Vẽ đường tròn  
15. CH -­ PROPERTIES: Hiệu chỉnh tính chất của đối tượng  
16. CHA -­ ChaMFER: Vát mép các cạnh  
17. CO, CP -­ COPY: Sao chép đối tượng  
18. D -­ DIMSTYLE: Tạo kiểu kích thước  
19. DAL ­- DIMALIGNED: Ghi kích thước xiên  
20. DAN ­- DIMANGULAR: Ghi kích thước góc  
21. DBA -­ DIMBASELINE: Ghi kích thước song song  
22. DCO ­- DIMCONTINUE: Ghi kích thước nối tiếp  
23. DDI ­- DIMDIAMETER: Ghi kích thước đường kính  
24. DED ­- DIMEDIT: Chỉnh sửa kích thước  
25. DI ­- DIST: Đo khoảng cách và góc giữa 2 điểm  
26. DIV -­ DIVIDE: Chia đối tượng thành các phần bằng nhau  
27. DLI ­- DIMLINEAR: Ghi kích thước thẳng đứng hay nằm ngang  
28. DO ­- DONUT: Vẽ hình vành khăn  
29. DOR -­ DIMORDINATE: Tọa độ điểm  
30. DRA ­- DIMRADIU: Ghi kích thước bán kính  
31. DT ­- DTEXT: Ghi văn bản  
32. E ­- ERASE: Xoá đối tượng  
33. ED -­ DDEDIT: Hiệu chỉnh kích thước  
34. EL ­- ELLIPSE: Vẽ elip  
35. EX ­- EXTEND: Kéo dài đối tượng  
36. EXIT -­ QUIT: Thoát khỏi chương trình  
37. EXT ­- EXTRUDE: Tạo khối từ hình 2D F  
38. F ­- FILLET: Tạo góc lượn/ Bo tròn góc  
39. FI -­ FILTER: Chọn lọc đối tượng theo thuộc tính  
40. H -­ BHATCH: Vẽ mặt cắt  
41. H -­ HATCH: Vẽ mặt cắt  
42. HE -­ HATCHEDIT: Hiệu chỉnh mặt cắt  
43. HI -­ HIDE: Tạo lại mô hình 3D với các đường bị khuất  
44. I -­ INSERT: Chèn khối trong auto Cad  
45. I – ­INSERT: Chỉnh sửa khối được chèn  
46. IN ­- INTERSECT: Tạo ra phần giao của 2 đối tượng  
47. L­ – LINE: Vẽ đường thẳng  
48. LA ­- LAYER: Tạo lớp và các thuộc tính  
49. LA -­ LAYER: Hiệu chỉnh thuộc tính của layer  
50. LE ­- LEADER: Tạo đường dẫn chú thích  
51. LEN -­ LENGTHEN: Kéo dài/ thu ngắn đối tượng với chiều dài cho trước  
52. LW ­- LWEIGHT: Khai báo hay thay đổi chiều dày nét vẽ  
53. LO – LAYOUT: Tạo layout  
54. LT -­ LINETYPE: Hiển thị hộp thoại tạo và xác lập các kiểu đường  
55. LTS ­- LTSCALE: Xác lập tỉ lệ đường nét  
56. M ­- MOVE: Di chuyển đối tượng được chọn  
57. MA -­ MATCHPROP: Sao chép các thuộc tính từ 1 đối tượng này sang 1 hay nhiều đối t­ượng khác  
58. MI ­- MIRROR: Lấy đối xứng quanh 1 trục  
59. ML -­ MLINE: Tạo ra các đường song song  
60. MO – PROPERTIES: Hiệu chỉnh các thuộc tính  
61. MS – MSPACE: Chuyển từ không gian giấy sang không gian mô hình  
62. MT – MTEXT: Tạo ra 1 đoạn văn bản  
63. MV – MVIEW: Tạo ra cửa sổ động  
64. O – OFFSET: Sao chép song song  
65. P – PAN: Di chuyển cả bản vẽ  
66. P – PAN: Di chuyển cả bản vẽ từ điểm 1 sang điểm thứ 2  
67. PE – PEDIT: Chỉnh sửa các đa tuyến  
68. PL – PLINE: Vẽ đa tuyến  
69. PO – POINT: Vẽ điểm  
70. POL – POLYGON: Vẽ đa giác đều khép kín  
71. PS – PSPACE: Chuyển từ không gian mô hình sang không gian giấy  
72. R – REDRAW: Làm tươi lại màn hình  
73. REC – RECTANGLE: Vẽ hình chữ nhật  
74. REG­ – REGION: Tạo miền  
75. REV -­ REVOLVE: Tạo khối 3D tròn xoay  
76. RO ­- ROTATE: Xoay các đối tượng được chọn xung quanh 1 điểm  
77. RR – RENDER: Hiển thị vật liệu, cây cảnh, đèn,… đối tượng  
78. S -­ StrETCH: Kéo dài/ thu ngắn/ tập hợp đối tượng  
79. SC -­ SCALE: Phóng to, thu nhỏ theo tỷ lệ  
80. SHA -­ SHADE: Tô bóng đối tượng 3D  
81. SL -­ SLICE: Cắt khối 3D  
82. SO -­ SOLID: Tạo ra các đa tuyến bố thể được tô đầy  
83. SPL ­- SPLINE: Vẽ đường cong bất kỳ  
84. SPE -­ SPLINEDIT: Hiệu chỉnh spline  
85. ST -­ STYLE: Tạo các kiểu ghi văn bản  
86. SU -­ SUBTRACT: Phép trừ khối  
87. T – MTEXT: Tạo ra 1 đoạn văn bản  
88. TH -­ THICKNESS: Tạo độ dày cho đối tượng  
89. TOR ­- TORUS: Vẽ Xuyến  
90. TR ­- TRIM: Cắt xén đối tượng  
91. UN ­- UNITS: Định đơn vị bản vẽ  
92. UNI -­ UNION: Phép cộng khối  
93. VP -­ DDVPOINT: Xác lập hướng xem 3 chiều  
94. WE ­ WEDGE: Vẽ hình nêm/chêm  
95. X­ – EXPLODE: Phân rã đối tượng  
96. XR – XREF: Tham chiếu ngoại vào các File bản vẽ  
97. Z – ZOOM: Phóng to,­ Thu nhỏ

Để tạo ra phím tắt cho 1 lệnh cad nào đó ta thực hiện như sau:

Vào menu Tool chọn Customize Edit program parameters (tới đây thì các bạn cũng sẽ thấy danh sách lệnh tắt).

VD: Lệnh COPY: lệnh tắt là CO/CP bây giờ muốn đổi chữ khác: OC/PC chẳng hạn (lưu ý là không được trùng với các lệnh đã có)­ thì tìm dòng lệnh COPY trong danh sách ­ xóa CO/CP­ thay bằng OP/PC sau đó Save ở dòng lệnh Command: gõ lệnh REINIT ­CHỌN pgp FILE ­OK

Lúc này bạn gõ OC/PC là lệnh copy.

# Kết luận

Hy vọng bài viết trên đây cung cấp cho bạn lệnh AutoCAD cơ bản nhất
    `.trim(),
        tags: ['commands', 'autocad'],
        countView: 1540,
        createdAt: '2025-05-05T08:00:00Z',
        updatedAt: '2025-05-05T08:10:00Z',
    },
    {
        id: '6',
        title: 'AutoCAD Layers: Cách thiết lập và quản lý lớp bản vẽ hiệu quả',
        slug: 'layers-trong-autocad-cach-quan-ly-lop-ban-ve',
        shortDescription:
            'Learn the basics of React Hooks like useState and useEffect.',
        keywords: [
            'Layers trong AutoCAD',
            'Quản lý lớp bản vẽ AutoCAD',
            'Thiết lập lớp trong AutoCAD',
            'Cách tạo layers trong AutoCAD',
            'Lệnh LA AutoCAD',
            'Layer Properties Manager',
            'AutoCAD ẩn lớp',
            'Khóa và đóng băng lớp AutoCAD',
            'Hướng dẫn sử dụng Layer trong AutoCAD chi tiết',
            'Cách kiểm soát layer trong bản vẽ kỹ thuật AutoCAD',
            'Làm thế nào để tạo và quản lý lớp hiệu quả trong AutoCAD',
            'Layer AutoCAD là gì và cách dùng',
            'Cách ẩn hiện đối tượng bằng lớp trong AutoCAD',
        ],
        thumbnailUrl:
            'https://kkhouse.com.vn/wp-content/uploads/2023/02/go-lenh-tat-goi-layer.png',
        content: `
Layers – Thiết lập và quản lý đường nét trong bản vẽ là yếu tố rất quan trọng đối với bất cứ người dùng CAD nào. Khi một bản vẽ sử dụng tới rất nhiều layer, các chi tiết trở nên rối và phức tạp, bạn có thể ẩn bớt các đối tượng mà bạn tạm thời chưa dùng tớ nhằm quan sát và thao tác được dễ dàng hơn.

![Layers](https://lamcokhi.vn/Attachs/Articles/4473/layers-1.png)

Trong bản vẽ dưới đây, các cửa ra vào và dây điện đã được tạm ẩn bằng cách tắt các lớp của chúng (Layoff).

![Layers](https://lamcokhi.vn/Attachs/Articles/4473/tao-layers.png)

Với lớp – Layers, bạn có thể:

– Liên kết các đối tượng theo chức năng hoặc vị trí của chúng

– Hiển thị hoặc ẩn tất cả các đối tượng liên quan trong một thao tác đơn giản

– Thực thi gán các thuộc tính như chủng loại, màu sắc và một số các thuộc tính khác cho mỗi lớp.

![Layers](https://lamcokhi.vn/Attachs/Articles/4473/quan-ly-layers.png)

Lưu ý: Hạn chế hoặc tuyệt đối không thay đổi thuộc tính lớp đã tạo lúc ban đầu, điều này sẽ không gây sự nhầm lẫn, sự rối loạn trong công đoạn quản lý đối tượng theo lớp.

# Điều khiển lớp

 Để xem một bản vẽ được tổ chức như thế nào, hãy sử dụng lệnh **LAYER (LA)** để mở Trình Quản lý Thuộc tính. Bạn có thể nhập **LAYER** hoặc **LA** trong cửa sổ Command, hoặc bạn có thể nhấp vào công cụ Layer Properties trên ribbon.

 ![Layers](https://lamcokhi.vn/Attachs/Articles/4473/layers-2.png)

Dưới đây là những gì mà Trình Quản lý Thuộc tính lớp – Layers cho phép hiển thị trong bản vẽ này.

![Layers](https://lamcokhi.vn/Attachs/Articles/4473/quan-ly-layers-1.png)

Như đã nêu, lớp 10 WALLS là lớp hiện tại. Tất cả các đối tượng mới (Tức là đối tượng sắp vẽ) sẽ được tự động đặt trên lớp đó. Trong danh sách các lớp, kiểm tra dấu V màu lục bên cạnh lớp 10 WALLS xác nhận rằng đó là lớp hiện tại được dùng.

Trong cột có gắn nhãn **Bật**, chú ý rằng các biểu tượng bóng đèn cho hai lớp màu tối. Các lớp này đã được tắt để ẩn các cửa ra vào và dây điện trong mặt bằng sàn.

Lưu ý: Mỗi tên lớp nên bắt đầu với một số có hai chữ số. Quy ước này giúp bạn dễ dàng kiểm soát thứ tự của các lớp bởi vì thứ tự của chúng không phụ thuộc vào bảng chữ cái. Còn nếu bạn không cần thiết các lớp phải sắp xếp theo một thứ tự nào đó thì tốt nhất chúng ta nên đặt tên lớp theo sự quản lý của các bộ môn.

**Khuyến nghị thực hành**

Lớp **0** là lớp mặc định tồn tại trong tất cả các bản vẽ và có một số thuộc tính riêng. Thay vì sử dụng lớp này, tốt nhất là tạo các lớp của riêng bạn với tên có ý nghĩa riêng.

Bất kỳ bản vẽ nào chứa ít nhất một đối tượng kích thước bản vẽ đó sẽ tự động xuất hiện một lớp riêng có tên là **Defpoints**.

# Cài đặt Lớp

Sau đây là các cài đặt lớp phổ biến nhất được sử dụng trong Trình Quản lý Thuộc tính.

**Tắt các lớp:** Bạn tạm thời tắt các lớp để giảm độ phức tạp trực quan của bản vẽ trong khi làm việc.

![Layers](https://lamcokhi.vn/Attachs/Articles/4473/tao-layers-1.png)

**Đóng băng các lớp:** Bạn đóng băng các lớp mà bạn không dùng đến trong một thời gian. Các lớp đóng băng cũng tương tự như việc tắt chúng.

![Layers](https://lamcokhi.vn/Attachs/Articles/4473/layers-3.png)

**Khóa các lớp:** Bạn khóa các lớp khi bạn muốn ngăn sự thay đổi ngẫu nhiên đối với các đối tượng trên các lớp đó. Ngoài ra, các đối tượng trên các lớp bị khóa xuất hiện nhạt màu, giúp giảm sự phức tạp về hình ảnh của bản vẽ, nhưng vẫn cho phép bạn nhìn thấy các đối tượng.

![Layers](https://lamcokhi.vn/Attachs/Articles/4473/quan-ly-layers-2.png)

**Đặt thuộc tính mặc định:** Bạn đặt các thuộc tính mặc định cho mỗi lớp, bao gồm màu sắc, kiểu đường, độ dày và độ trong suốt. Các đối tượng mới mà bạn tạo sẽ sử dụng các thuộc tính này trừ khi bạn ghi đè lớp khác lên chúng.

# Kiểm soát trong Trình Quản lý Thuộc tính Lớp

Để tạo một lớp mới, nhấp vào nút create a new layer và nhập tên của lớp mới

![Layers](https://lamcokhi.vn/Attachs/Articles/4473/tao-layers-2.png)

# Truy cập nhanh vào Cài đặt Lớp

Để truy cập nhanh vào các điều khiển lớp, bạn có thể sử dụng các điều khiển sẵn có trên ribbon.

![Layers](https://lamcokhi.vn/Attachs/Articles/4473/layers-4.png)

Thỉnh thoảng, kiểm tra để chắc chắn rằng các đối tượng bạn tạo sẽ nằm trên đúng lớp. Nhấp vào mũi tên thả xuống để hiển thị một danh sách các lớp, và sau đó nhấp vào một lớp trên danh sách để thay đổi sang lớp mới nếu muốn.

![Layers](https://lamcokhi.vn/Attachs/Articles/4473/quan-ly-layers-3.png)

# Duy trì quy tắc quản lý lớp – Layers của bạn

Nó rất quan trọng nếu bạn muốn các bản vẽ của mình được vẽ theo một tiêu chuẩn riêng biệt, như tiêu chuẩn của một công ty chẳng hạn. Nên có một tiêu chuẩn lớp, việc tổ chức vẽ sẽ hợp lý hơn, nhất quán, đồng nhất giữa các phòng ban. Các tiêu chuẩn lớp là rất cần thiết cho các dự án nhóm.

Nếu bạn tạo một tập hợp các lớp – Layers chuẩn và lưu chúng vào một tệp mẫu bản vẽ, các lớp đó sẽ có sẵn khi bạn bắt đầu một bản vẽ mới và bạn có thể bắt đầu làm việc ngay lập tức, tiết kiệm thời gian làm việc.
    `.trim(),
        tags: ['autocad', 'thietke', 'layer'],
        countView: 1987,
        createdAt: '2025-08-05T07:00:00Z',
        updatedAt: '2025-08-05T09:15:00Z',
    },
    {
        id: '7',
        title: 'Deploying with Vercel',
        slug: 'deploying-with-vercel',
        shortDescription: 'Step-by-step guide to deploying your app on Vercel.',
        keywords: ['Vercel', 'Deployment', 'Next.js'],
        thumbnailUrl:
            'https://img.freepik.com/free-photo/beautiful-landscape-mother-nature_23-2148992406.jpg?t=st=1754551747~exp=1754555347~hmac=a81cc5a779b6e889d8b481fe4c239fc2f57fdb9550529f9109f1a7fe61b18689&w=1480',
        content: `
# Deploying to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Connect your repo
4. Done 🎉
    `.trim(),
        tags: ['vercel', 'deployment', 'nextjs'],
        countView: 1230,
        createdAt: '2025-04-21T10:00:00Z',
        updatedAt: '2025-04-21T10:30:00Z',
    },
    {
        id: '8',
        title: 'TypeScript vs JavaScript',
        slug: 'typescript-vs-javascript',
        shortDescription: 'A comparison between JavaScript and TypeScript.',
        keywords: ['TypeScript', 'JavaScript', 'Comparison'],
        thumbnailUrl:
            'https://img.freepik.com/free-photo/beautiful-landscape-mother-nature_23-2148992406.jpg?t=st=1754551747~exp=1754555347~hmac=a81cc5a779b6e889d8b481fe4c239fc2f57fdb9550529f9109f1a7fe61b18689&w=1480',
        content: `
# TypeScript vs JavaScript

| Feature | JavaScript | TypeScript |
|--------|------------|------------|
| Types  | Dynamic    | Static     |
| Tooling | Basic     | Advanced   |

Use TypeScript for better scalability.
    `.trim(),
        tags: ['typescript', 'javascript', 'comparison'],
        countView: 2120,
        createdAt: '2025-03-15T14:00:00Z',
        updatedAt: '2025-03-16T09:00:00Z',
    },
    {
        id: '9',
        title: 'Dark Mode in Tailwind CSS',
        slug: 'dark-mode-tailwind',
        shortDescription: 'Enable dark mode easily using Tailwind CSS.',
        keywords: ['Tailwind', 'Dark Mode', 'CSS'],
        thumbnailUrl:
            'https://img.freepik.com/free-photo/beautiful-landscape-mother-nature_23-2148992406.jpg?t=st=1754551747~exp=1754555347~hmac=a81cc5a779b6e889d8b481fe4c239fc2f57fdb9550529f9109f1a7fe61b18689&w=1480',
        content: `
# Dark Mode

Add this to your config:

\`\`\`js
module.exports = {
  darkMode: 'class',
}
\`\`\`

Use like:

\`\`\`html
<body class="dark:bg-gray-800">
\`\`\`
    `.trim(),
        tags: ['tailwind', 'css', 'darkmode'],
        countView: 864,
        createdAt: '2025-07-29T18:00:00Z',
        updatedAt: '2025-07-30T08:00:00Z',
    },
    {
        id: '10',
        title: 'How to Write a Good README',
        slug: 'how-to-write-readme',
        shortDescription:
            'Tips for writing effective and readable README files.',
        keywords: ['README', 'Docs', 'Writing'],
        thumbnailUrl:
            'https://img.freepik.com/free-photo/beautiful-landscape-mother-nature_23-2148992406.jpg?t=st=1754551747~exp=1754555347~hmac=a81cc5a779b6e889d8b481fe4c239fc2f57fdb9550529f9109f1a7fe61b18689&w=1480',
        content: `
# Writing a Good README

## Checklist

- Project description
- Installation instructions
- Usage examples
- License

\`\`\`md
## Installation

\`\`\`bash
npm install
\`\`\`
    `.trim(),
        tags: ['docs', 'readme', 'writing'],
        countView: 432,
        createdAt: '2025-08-01T12:00:00Z',
        updatedAt: '2025-08-01T12:10:00Z',
    },
]
