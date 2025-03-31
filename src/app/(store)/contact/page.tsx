import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa'

function ContactPage() {
    return (
        <div className='pt-[120px]'>
            <div className="max-w-4xl mx-auto p-6">
                <h1 className="text-center text-orange-400 text-2xl font-bold mb-6">LIÊN HỆ VÀ TRỢ GIÚP</h1>
                <div className="flex flex-col md:flex-row justify-between items-start">
                    <div className="bg-white border border-blue-200 rounded-lg p-6 mb-6 md:mb-0 md:mr-6 w-full md:w-1/2">
                        <h2 className="text-blue-500 text-lg font-bold mb-4">THÔNG TIN LIÊN HỆ CHUNG</h2>
                        <p className="mb-2"><i className="fas fa-phone-alt"></i> (+84) 1234567890</p>
                        <p className="mb-2"><i className="fas fa-envelope"></i> asaigon123@gmail.com</p>
                        <p className="mb-2"><i className="fas fa-map-marker-alt"></i> Ho Chi Minh City - Viet Nam</p>
                        <div className="flex space-x-4 mt-4">
                            <Link href="#" className="text-gray-600 hover:text-blue-600">
                                <FaFacebookF size={20} />
                            </Link>
                            <Link href="#" className="text-gray-600 hover:text-pink-500">
                                <FaInstagram size={20} />
                            </Link>
                            <Link href="#" className="text-gray-600 hover:text-red-600">
                                <FaYoutube size={20} />
                            </Link>
                            <Link href="#" className="text-gray-600 hover:text-black">
                                <FaTiktok size={20} />
                            </Link>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 space-y-4">
                        <Button className="w-full bg-blue-500 text-white py-3 rounded-lg">Bạn có phải là khách du lịch đang cần trợ giúp?</Button>
                        <Button className="w-full bg-blue-500 text-white py-3 rounded-lg">Bạn có câu hỏi về đánh giá?</Button>
                        <Button className="w-full bg-blue-500 text-white py-3 rounded-lg">Bạn cần liên hệ bộ phận hỗ trợ khách hàng?</Button>
                        <Button className="w-full bg-blue-500 text-white py-3 rounded-lg">Bạn muốn đổi trả/hoàn tiền đơn hàng?</Button>
                    </div>
                </div>
                <div className="mt-6">
                    <p className="mb-4">Bạn cần hỗ trợ? Hãy liên hệ qua thông tin liên hệ của chúng tôi và một thành viên nhóm hỗ trợ khách hàng của À Sài Gòn sẽ trả lời bạn sớm nhất có thể!</p>
                    <p>Nếu bạn có câu hỏi về bán hàng liên quan đến bán hàng quảng cáo hoặc kinh doanh trưng bày, vui lòng <a href="#" className="text-blue-500">liên hệ với À Sài Gòn tại đây</a>.</p>
                </div>
            </div>
        </div>
    )
}

export default ContactPage