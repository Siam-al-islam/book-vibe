const BestDeals = () => {
    return (
        <div className="flex flex-col md:flex-row items-center py-10 px-6 lg:py-20 lg:px-28 bg-[#1313130c] rounded-3xl md:mt-12 mt-8 md:mb-20 mb-10">
            <div>
                <h1 className="font-bold font-playfair text-4xl md:text-6xl text-[#131313]">Find Out The Best Deals Of Book Vibe</h1>
                <button className="btn mt-12 bg-[#23BE0A] text-white px-7 font-worksans">Click For Discount</button>
            </div>
            <div className="mt-6 md:mt-0">
                <img className="w-full" src="https://i.postimg.cc/bJrZCBX1/sale-offer-label-banner-discount-offer-promotion-157027-1250.jpg" alt="" />
            </div>
        </div>
    );
};

export default BestDeals;