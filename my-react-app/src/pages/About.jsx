import Header from "../components/Header";  
import Heading from "../components/Heading";
import Footer from "../components/Footer";
import Button from "../components/Button";
function About() {
 return (
  <div className="px-6 md:px-20 py-16 max-w-5xl mx-auto font-sans">

 
    <div className="text-center mb-16">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
        Khám Phá Cùng Chúng Tôi
      </h1>
      <p className="text-lg text-gray-600 mt-3">
        Hành trình du lịch đáng nhớ đang chờ bạn. Khám phá thế giới, trải nghiệm văn hóa và tận hưởng kỳ nghỉ tuyệt vời nhất.
      </p>
    </div>


    <div className="grid md:grid-cols-2 gap-10">

      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition duration-300">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Tour Trong Nước
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Trải nghiệm vẻ đẹp của Việt Nam qua các chuyến đi hấp dẫn, từ biển xanh cát trắng đến núi rừng hùng vĩ, khám phá văn hóa địa phương đặc sắc.
        </p>
      </div>

      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition duration-300">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Tour Quốc Tế
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Chinh phục những điểm đến nổi tiếng thế giới. Hành trình trọn gói, hướng dẫn viên chuyên nghiệp và những trải nghiệm khó quên.
        </p>
      </div>

      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition duration-300">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Dịch Vụ Đặt Vé & Khách Sạn
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Đặt vé máy bay, khách sạn, và các tiện ích đi kèm nhanh chóng, an toàn. Chúng tôi giúp bạn chuẩn bị mọi thứ cho chuyến đi hoàn hảo.
        </p>
      </div>

      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition duration-300">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Trải Nghiệm Đặc Biệt
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Tham gia các hoạt động độc đáo: khám phá ẩm thực, trải nghiệm văn hóa, tham quan địa điểm nổi tiếng và tạo kỷ niệm đáng nhớ.
        </p>
      </div>

    </div>
  </div>
);

}

export default About;
