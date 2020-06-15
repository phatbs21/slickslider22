$('.slider-for').slick({//khung ảnh trên
    slidesToShow: 1, // ảnh hiển thị là ảnh ở slide nào (1,2,3)
    slidesToScroll: 1,// khi cuộn 1 lần nó sẽ qua bao nhiêu ảnh
    arrows: false,// Có kích hoạt mũi tên chuyển đổi ảnh không (trên ảnh trên á)
    fade: true, // ảnh trên sẽ trượt hay chớp nháy (hiệu ứng chuyển đổi của ảnh)
});
$('.slider-nav').slick({// khung ảnh dưới 
    slidesToShow: 3,//  số ảnh hiển thị (bảng nhỏ)
    slidesToScroll: 1,// khi cuộn thì nó sẽ qua bao nhiêu ảnh
    asNavFor: '.slider-for',// cái này để truyền tham số về hàm  trả về vị trí của ảnh
    dots: true,//cái thanh dấu chấm ở dưới để chọn 
    focusOnSelect: true // có cho nhấn vào ảnh để chuyển ảnh không
});