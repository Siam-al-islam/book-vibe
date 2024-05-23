const KidsZone = () => {
    return (
        <div className="flex flex-col md:flex-row items-center py-10 px-6 lg:py-20 lg:px-28 bg-[#1313130c] rounded-3xl md:mt-12 mt-8 md:mb-20 mb-10">
            <div className="max-w-[620px]">
                <h1 className="text-4xl md:text-5xl font-bold">Explore Books For <span className="text-[#23BE0A]">Kids</span></h1>
                <p className="mt-6">Discover the magic of reading with 'Explore Kids Book' – a delightful collection of stories and adventures that inspire young minds and nurture imagination.</p>
                <button className="btn mt-12 bg-[#23BE0A] text-white px-7 font-worksans">Explore Now</button>
            </div>
            <div className="flex justify-center lg:mt-0 mt-8">
                <img className="w-3/4" src="https://media1.popsugar-assets.com/files/thumbor/TAl3ppJPztqD8zoPnh-QFw3ePSw=/fit-in/525x800/filters:format_auto():upscale()/2013/01/05/1/192/1922664/70e2c08b0cb9ff8a_charlottes_web.JPG" alt="" />
            </div>
        </div>
    );
};

export default KidsZone;