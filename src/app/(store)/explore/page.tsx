import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaCalendarAlt } from 'react-icons/fa'
import { Button } from '@/components/ui/button'

function ExplorePage() {
    return (
        <div className='pt-[120px] min-h-screen w-full bg-gray-100'>
            <div className="container mx-auto p-4">
                <div className="flex flex-col md:flex-row gap-8 justify-center">
                    <div className='md:w-1/2'>
                        <h1 className="text-orange-500 text-3xl font-bold">
                            ĐỊA ĐIỂM
                        </h1>
                        <h2 className="text-blue-600 text-xl font-bold mt-2">
                            Lý tưởng dành cho mùa hè 2025
                        </h2>
                        <p className="mt-4 text-justify">
                            Giữa cái nóng oi ả của mùa hè Sài Gòn, Công viên Bến Bạch Đằng là một điểm đến lý tưởng để tận hưởng không gian mát mẻ và làn gió sông Sài Gòn trong lành. Nằm ngay trung tâm thành phố, công viên không chỉ là nơi thư giãn mà còn mang đến nhiều trải nghiệm thú vị như đi dạo ven sông, đạp xe, hay nghỉ chân tại các quán cà phê ngoài trời với view cực đẹp. Đặc biệt, vào buổi chiều tối, bạn có thể thưởng thức hoàng hôn lãng mạn trên sông hoặc tham gia các tour du thuyền ngắm nhìn thành phố rực rỡ về đêm. Mùa hè 2025, nơi đây hứa hẹn sẽ là sân chơi sôi động với các sự kiện ngoài trời, các phiên chợ và không gian nghệ thuật đường phố, biến Bến Bạch Đằng thành điểm đến không thể bỏ lỡ cho giới trẻ Sài Gòn.
                        </p>
                    </div>
                    <div className='md:w-1/2 flex justify-center items-center'>
                        <Image alt="Aerial view of a city with a river and tall buildings" className="rounded-lg w-full lg:max-h-[500px] object-center" src="https://storage.googleapis.com/a1aa/image/I87XL15Ykv4VVNGV5ZruOqfqwp8cep-TwQ3PwUQT7DY.jpg" width={400} height={300} />
                    </div>
                </div>
                <div className="flex flex-col justify-center md:flex-row-reverse gap-8 mt-8">
                    <div className='md:w-1/2'>
                        <h1 className="text-orange-500 text-3xl font-bold">
                            ẨM THỰC
                        </h1>
                        <p className="mt-4 text-justify">
                            Mùa hè Sài Gòn mà không ghé chợ Hồ Thị Kỷ thì thật là thiếu sót! Đây là một trong những thiên đường ẩm thực đường phố sôi động nhất thành phố, nơi bạn có thể thưởng thức vô vàn món ngon với giá cả phải chăng. Từ những ly trà đào mát lạnh, kem bơ béo ngậy cho đến các món hải sản nướng thơm lừng, tất cả đều là lựa chọn hoàn hảo để giải nhiệt mùa hè. Đặc biệt, chợ còn nổi tiếng với các món ăn mang phong cách Campuchia như hủ tiếu Nam Vang, chè thốt nốt, mang đến trải nghiệm ẩm thực độc đáo. Vào mùa hè 2025, dự kiến khu chợ này sẽ càng nhộn nhịp hơn với các gian hàng mới, những món ăn sáng tạo và không gian trang trí bắt mắt, trở thành điểm check-in lý tưởng cho những tín đồ ẩm thực.
                        </p>
                    </div>
                    <div className='md:w-1/2 flex justify-center items-center'>
                        <Image alt="Street view with colorful lanterns and people walking" className="rounded-lg w-full lg:max-h-[500px] object-center" src="https://storage.googleapis.com/a1aa/image/OUaLPQOGGuXsjffpU8G08KPwo1wXmiMEMGzs-zQh9Ok.jpg" width={400} height={300} />
                    </div>
                </div>
                <h3 className="text-orange-500 text-3xl font-bold my-6">
                    CÁC BÀI VIẾT
                </h3>
                <div className="flex flex-col items-center md:items-start">
                    {/* Bài viết 1 */}
                    <div className=" mb-6 rounded-lg max-w-[900px] w-full flex flex-col md:flex-row gap-6">
                        <Image
                            alt="Aerial view of a cathedral in a city"
                            className="w-full md:w-[280px] h-[180px] object-cover rounded-lg"
                            src="https://storage.googleapis.com/a1aa/image/r4IWdv5oOuAQOuMySS44GP7qJEnVdTsjnUnViU4FLRg.jpg"
                            width={200}
                            height={200}
                        />
                        <div className="flex flex-col justify-between w-full">
                            <div>
                                <p className="text-gray-500 text-sm flex items-center gap-2">
                                    <FaCalendarAlt />
                                    07/02/2023 10:26:00 -07:00
                                </p>
                                <h2 className="text-xl font-bold text-blue-700 mt-2">
                                    &quot;Nhờ đọc các bài viết trên Tuổi Trẻ, tôi càng yêu Sài Gòn - TP.HCM&quot;
                                </h2>
                                <p className="text-gray-700 mt-2">
                                    Nhờ đọc rất nhiều bài viết trên báo Tuổi Trẻ - giới thiệu về đất Sài Gòn,
                                    về đường phố Sài Gòn, để rồi tôi yêu thương thêm mảnh đất phương Nam nắng như rót mật này.
                                </p>
                            </div>
                            <Link className="text-blue-500 hover:underline mt-3 font-semibold max-w-[100px]" href="#">
                                <Button className='cursor-pointer'>
                                    Đọc thêm
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Bài viết 2 */}
                    <div className="mb-6 rounded-lg max-w-[900px] w-full flex flex-col md:flex-row gap-6">
                        <Image
                            alt="Skyline of a city with a river"
                            className="w-full md:w-[280px] h-[180px] object-cover rounded-lg"
                            src="https://storage.googleapis.com/a1aa/image/6-qRd4gA3n_wkS8eYPKk-mzgZipq4E-8ZsJMBsu9XAc.jpg"
                            width={200}
                            height={200}
                        />
                        <div className="flex flex-col justify-between w-full">
                            <div>
                                <p className="text-gray-500 text-sm flex items-center gap-2">
                                    <FaCalendarAlt />
                                    12/06/2024 12:48:00 -07:00
                                </p>
                                <h2 className="text-xl font-bold text-blue-700 mt-2">
                                    Kinh nghiệm du lịch Sài Gòn siêu chi tiết từ A - Z
                                </h2>
                                <p className="text-gray-700 mt-2">
                                    Sài Gòn được mệnh danh là &quot;thành phố không ngủ&quot; với nhịp sống sôi động, hiện đại.
                                    Nơi đây thu hút du khách bởi những di tích lịch sử, văn hóa lâu đời và các công trình
                                    kiến trúc độc đáo, khu phố sầm uất cùng nền ẩm thực phong phú.
                                </p>
                            </div>
                            <Link className="text-blue-500 hover:underline mt-3 font-semibold max-w-[100px]" href="#">
                                <Button className='cursor-pointer'>
                                    Đọc thêm
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
                <h2 className="text-xl font-bold text-blue-600 mb-4">
                    BÀI VIẾT MỚI NHẤT
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start space-x-4">
                        <Image alt="A variety of Vietnamese food dishes on a table" className="w-24 h-24 object-cover rounded" src="https://storage.googleapis.com/a1aa/image/4xbKRVVOc94gz_2i2t_Ou40dcOasVxaGF3-JnOoCSXA.jpg" width={100} height={100} />
                        <div>
                            <h3 className="text-lg font-semibold">
                                Chuyến food tour 24h ở Sài Gòn: Ăn gì, đi đâu để no căng bụng?
                            </h3>
                            <div className="text-gray-500 text-sm flex items-center space-x-2">
                                <FaCalendarAlt />
                                <span>
                                    07 Th3 2025
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-start space-x-4">
                        <Image alt="A bowl of Vietnamese noodles with chopsticks" className="w-24 h-24 object-cover rounded" src="https://storage.googleapis.com/a1aa/image/hb_5flH4h05dQrOYr_zo-hehLKl3TEJtqm0p32UzIYY.jpg" width={100} height={100} />
                        <div>
                            <h3 className="text-lg font-semibold">
                                Khu Hà Tôn Quyền – Thiên đường sủi cảo chuẩn vị!
                            </h3>
                            <div className="text-gray-500 text-sm flex items-center space-x-2">
                                <FaCalendarAlt />
                                <span>
                                    07 Th3 2025
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-start space-x-4">
                        <Image alt="A plate of Vietnamese broken rice with grilled pork" className="w-24 h-24 object-cover rounded" src="https://storage.googleapis.com/a1aa/image/5kCj8CYyH9Kdq3D-et1yxxxdICA78LQsrwn0UXnsWtg.jpg" width={100} height={100} />
                        <div>
                            <h3 className="text-lg font-semibold">
                                Nên ăn cơm tấm với nước tương hay nước mắm ?
                            </h3>
                            <div className="text-gray-500 text-sm flex items-center space-x-2">
                                <FaCalendarAlt />
                                <span>
                                    07 Th3 2025
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-start space-x-4">
                        <Image alt="A vibrant night market in Saigon" className="w-24 h-24 object-cover rounded" src="https://storage.googleapis.com/a1aa/image/VXgiwqPVKeWfZxz-STmDEsF4A9irfGKj54vZsuoO-BY.jpg" width={100} height={100} />
                        <div>
                            <h3 className="text-lg font-semibold">
                                Truy lùng 7 khu chợ đêm Sài Gòn – Thiên đường ẩm thực ngon quên lối về!
                            </h3>
                            <div className="text-gray-500 text-sm flex items-center space-x-2">
                                <FaCalendarAlt />
                                <span>
                                    07 Th3 2025
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-6 text-center">
                    <Link className="text-blue-500 hover:underline mt-3 font-semibold max-w-[100px]" href="#">
                        <Button className='cursor-pointer'>
                            Đọc thêm
                        </Button>
                    </Link>
                </div>
            </div>
        </div >
    )
}

export default ExplorePage