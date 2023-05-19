import storage from "../util/storage.js";

const init = {
    products: [
        {
            title: "Air Jordan XXXVII PF",
            type: "Men's Basketball Shoes",
            price: 3600000,
            sold: "85",
            sales: 20,
            description:"Giày Air Jordan XXXVII PF là một sáng tạo tuyệt vời của dòng sản phẩm Air Jordan, mang đến sự kết hợp hoàn hảo giữa hiệu suất vượt trội và phong cách đẳng cấp. Được thiết kế để đáp ứng nhu cầu của những vận động viên chuyên nghiệp và những người yêu thích sneaker, đôi giày này không chỉ nổi bật về thiết kế, mà còn đem lại sự thoải mái và độ bền vượt trội.",
        },
        {
            title: "Jordan ADG 4",
            type: "Men's Golf Shoes",
            price: 5600000,
            sold: "15",
            sales: 10,
            description:"Giày Jordan ADG 4 là một sự kết hợp tuyệt vời giữa phong cách thể thao và hiệu suất vượt trội. Thiết kế độc đáo của đôi giày này mang đến sự tự tin và sự thoải mái cho những người yêu thích golf.<br>Với phần trên làm từ chất liệu da cao cấp và vật liệu lưới, giày Jordan ADG 4 cung cấp sự thoáng khí và độ bền đáng kinh ngạc. Đặc biệt, công nghệ Flywire được tích hợp vào phần trên, mang lại sự ổn định và hỗ trợ tối đa trong suốt quá trình swing và di chuyển trên sân golf.",
        },
        {
            title: "Jordan Courtside 23",
            type: "Men's Shoes",
            price: 6900000,
            sold: "120",
            sales: 30,
            description:"Giày Jordan Courtside 23 là một biểu tượng trong thế giới của giày sneaker, kết hợp giữa phong cách đường phố và di sản huyền thoại của Air Jordan. Được thiết kế với sự chú trọng đến sự thoải mái và hiệu suất, đôi giày này mang đến một trải nghiệm đỉnh cao cho những người yêu thích sneaker.",
        },
        {
            title: "Jordan Max Aura 4",
            type: "Men's Shoes",
            price: 5500000,
            sold: "120",
            sales: 30,
            description:"Giày Jordan Max Aura 4 là một sự kết hợp tuyệt vời giữa phong cách cổ điển và hiện đại của dòng sản phẩm Air Jordan. Thiết kế đẳng cấp và chi tiết tỉ mỉ của đôi giày này mang đến sự tự tin và phong cách cho những người yêu thích sneaker.",
        },
        {
            title: "Jordan Stay Loyal 2",
            type: "Men's Shoes",
            price: 4800000,
            sold: "120",
            sales: 30,
            description:"Giày Jordan Stay Loyal 2 là một phiên bản dành riêng cho nam giới, mang đến sự kết hợp tuyệt vời giữa phong cách và hiệu suất. Với thiết kế độc đáo và chi tiết tỉ mỉ, đôi giày này thể hiện sự sáng tạo và đẳng cấp của dòng sản phẩm Air Jordan.",
        },
       
        {
            title: "Jordan Stay Loyal 2",
            type: "Women's Shoes",
            price: 3700000,
            sold: "170",
            sales: 20,
            description:"Giày Jordan Stay Loyal 2 là một phiên bản dành riêng cho nữ giới, mang đến sự kết hợp tuyệt vời giữa phong cách và hiệu suất. Với thiết kế độc đáo và chi tiết tỉ mỉ, đôi giày này thể hiện sự sáng tạo và đẳng cấp của dòng sản phẩm Air Jordan.",
        },
        {
            title: "Jordan Why Not .6 PF",
            type: "Men's Shoes",
            price: 7900000,
            sold: "200",
            sales: 50,
            description:"Jordan Why Not .6 PF là một đôi giày bóng rổ đặc biệt được thiết kế để tôn vinh tinh thần không ngừng nghỉ và phong cách cá nhân của Russell Westbrook - một trong những cầu thủ hàng đầu và được công nhận trong làng bóng rổ.<br>Với phần trên bằng chất liệu da và vải lưới, giày Jordan Why Not .6 PF mang lại sự thoáng khí và độ bền đáng kinh ngạc. Thiết kế hiện đại và độc đáo với các chi tiết cắt may và logo Jumpman nổi bật tạo nên sự cá tính và phong cách đặc trưng của Russell Westbrook.",
        },
        {
            title: "Nike Air Force 1 '07 LV8",
            type: "Women's Shoes",
            price: 2900000,
            sold: "120",
            sales: 10,
            description:"Nike Air Force 1 '07 LV8 là một phiên bản đặc biệt của giày Air Force 1, mang đến sự kết hợp hoàn hảo giữa phong cách cổ điển và chi tiết độc đáo. Được ra mắt lần đầu vào những năm 1980, Air Force 1 vẫn là một biểu tượng thời trang và đã trở thành một trong những mẫu giày sneaker bán chạy nhất của Nike.",
        },
        {
            title: "Nike Air Max 90",
            type: "Men's Goft Shoes",
            price: 10000000,
            sold: "420",
            sales: 70,
            description:"Nike Air Max 90 là một biểu tượng trong ngành công nghiệp giày sneaker. Được ra mắt lần đầu vào năm 1990, đôi giày này đã trở thành một biểu tượng về thiết kế và công nghệ trong thế giới sneaker.<br> Với phần trên làm từ chất liệu da cao cấp hoặc vải lưới, Nike Air Max 90 mang đến sự kết hợp tuyệt vời giữa sự thoáng khí và độ bền. Thiết kế đặc trưng với các đường viền và góc cạnh tạo nên sự cá tính và phong cách đặc trưng của đôi giày này."
        },
        {
            title: "Jordan Stadium 90",
            type: "Men's Shoes",
            price: 3700000,
            sold: "20",
            sales: 80,
            description:"Là một người mẫu giày hư cấu, giày Jordan Stadium 90 tỏa sáng với sự kết hợp tuyệt vời giữa phong cách và hiệu suất. Với thiết kế độc đáo và đầy cá tính, đôi giày này mang trong mình tinh thần nghị lực và tinh thần chiến đấu của thương hiệu Jordan.<br>Phần trên của giày Jordan Stadium 90 được làm bằng chất liệu da cao cấp, tạo nên sự sang trọng và độ bền đáng kinh ngạc. Các chi tiết cắt may và logo Jumpman nổi bật, tạo điểm nhấn độc đáo cho đôi giày.",
        },
        {
            title: "Tatum 1 St. Louis PF",
            type: "Women's Shoes",
            price: 2600000,
            sold: "40",
            sales: 10,
            description:"Jordan Tatum 1 St. Louis PF là một phiên bản đặc biệt của giày được thiết kế dành riêng cho cầu thủ bóng rổ nổi tiếng Jayson Tatum và lấy cảm hứng từ thành phố St. Louis. Đôi giày này kết hợp giữa phong cách đẳng cấp và hiệu suất vượt trội.<br>Với phần trên được làm từ chất liệu da cao cấp và vải lưới, Jordan Tatum 1 St. Louis PF mang lại sự thoáng khí và độ bền đáng kinh ngạc. Thiết kế đặc trưng với các chi tiết đồ họa và màu sắc phản ánh tinh thần và di sản của thành phố St. Louis.",
        },
        {
            title: "Zion 2 PF",
            type: "Men's Shoes",
            price: 6900000,
            sold: "820",
            sales: 30,
            description:"Jordan Zion 2 PF là một phiên bản đặc biệt được thiết kế dành riêng cho cầu thủ bóng rổ tài năng Zion Williamson. Đôi giày này mang đến sự kết hợp hoàn hảo giữa phong cách đẳng cấp và hiệu suất vượt trội, đồng thời tôn vinh tài năng và sức mạnh của Zion.",
        },
        {
            title: "Air Jordan 1 Zoom CMFT 2",
            type: "Women's Shoes",
            price: 8900000,
            sold: "70",
            sales: 10,
            description:"Giày Air Jordan 1 Zoom CMFT 2 là phiên bản nâng cấp của biểu tượng thời trang sneaker Air Jordan 1, mang đến một sự kết hợp hoàn hảo giữa phong cách cổ điển và sự thoải mái hiện đại. Được thiết kế bởi nhà thiết kế Tinker Hatfield, đôi giày này không chỉ tôn vinh di sản và tinh thần của Air Jordan,mà còn đáp ứng nhu cầu của những người yêu thích sự thoải mái và phong cách đương đại."
        },
       
    ],
    isdetail: storage.get(),
}

const actions = {
    ABC({ isdetail }, index) {
        isdetail = index;
        storage.set(isdetail);

    }
}

export default function reducer(state = init, action, args) {
    actions[action] && actions[action](state, ...args);
    return state;
}