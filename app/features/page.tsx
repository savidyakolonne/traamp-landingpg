
export default function page(){
    return(
        <>
            <div className="bg-[url(/sigiriya.jpg)] bg-cover w-full h-[800px] text-[30px] font-mono text-center p-[100px] text-white font-bold md:text-[40px] flex items-center justify-center">
                <div>
                    <p>Traamp brings together every part of the travel experience into one smart platform. 
                        From verified tour guides to local hospitality and intelligent navigation, we make 
                        traveling in Sri Lanka easier, safer, and more enjoyable.</p>
                </div>
            </div>
            
            <div className="mx-[20%] mt-20 flex-row items-center justify-center">
                <div className="bg-gradient-to-r from-black to-green-500 h-auto rounded-[24px] mb-20 ml-[200px] flex shadow-xl/30">
                    <div className="w-[50%] h-99 rounded-[24px] bg-[url(/guide.png)] bg-center bg-cover" />
                    <div className="text-center w-[50%] p-5">
                        <h1 className="text-5xl mb-[10%]">Guides</h1>
                        <p className="text-2xl text-justify my-[20%]">Connect with verified, professional tour 
                            guides across Sri Lanka. View their experience, 
                            languages, specialties, and tour packages, all 
                            in one place.</p>
                    </div>      
                </div>

                <div className="bg-gradient-to-r from-black to-yellow-400 h-auto rounded-[24px] mb-20 mr-[200px] flex shadow-xl/30">
                    <div className="w-[50%] h-107 rounded-[24px] bg-[url(/tourists.jpg)] bg-center bg-cover" />
                    <div className="text-center w-[50%] p-5">
                        <h1 className="text-5xl mb-[10%]">Tourists</h1>
                        <p className="text-2xl text-justify my-[20%]">Travelers can explore, compare, and select 
                            guides and travel experiences easily. Personalized 
                            discovery makes planning trips simple and stress-free.</p>
                    </div>      
                </div>

                <div className="bg-gradient-to-r from-black to-green-500 h-auto rounded-[24px] mb-20 ml-[200px] flex shadow-xl/30">
                    <div className="w-[50%] h-99 rounded-[24px] bg-[url(/hotel.jpg)] bg-center bg-cover" />
                    <div className="text-center w-[50%] p-5">
                        <h1 className="text-5xl mb-[10%]">Hotels</h1>
                        <p className="text-2xl text-justify my-[20%]">Find trusted hotels with transparent details, real 
                            reviews, and verified listings ensuring comfort and confidence during your stay.</p>
                    </div>      
                </div>

                <div className="bg-gradient-to-r from-black to-yellow-400 h-auto rounded-[24px] mb-20 mr-[200px] flex shadow-xl/30">
                    <div className="w-[50%] h-99 rounded-[24px] bg-[url(/food.png)] bg-center bg-cover" />
                    <div className="text-center w-[50%] p-5">
                        <h1 className="text-5xl mb-[10%]">Resturants</h1>
                        <p className="text-2xl text-justify my-[20%]">Discover recommended dining spots, local flavors, and must-try 
                            food experiences near your travel location.</p>
                    </div>      
                </div>

                <div className="bg-gradient-to-r from-black to-green-500 h-auto rounded-[24px] mb-20 ml-[200px] flex shadow-xl/30">
                    <div className="w-[50%] h-99 rounded-[24px] bg-[url(/map.jpg)] bg-center bg-cover" />
                    <div className="text-center w-[50%] p-5">
                        <h1 className="text-5xl mb-[10%]">AI Map</h1>
                        <p className="text-2xl text-justify my-[20%]">Our AI-powered map suggests travel routes, hidden gems, 
                            and activity points based on your preferences and location.</p>
                    </div>      
                </div>

                <div className="bg-gradient-to-r from-black to-yellow-400 h-auto rounded-[24px] mb-20 mr-[200px] flex shadow-xl/30">
                    <div className="w-[50%] h-99 rounded-[24px] bg-[url(/emerg.png)] bg-center bg-cover" />
                    <div className="text-center w-[50%] p-5">
                        <h1 className="text-5xl mb-[10%]">Emergency Contact</h1>
                        <p className="text-2xl text-justify my-[20%]">Quick access to verified emergency numbers, medical support, 
                            and tourism safety services for a secure travel experience.</p>
                    </div>      
                </div>

                
            </div>
        </>
    );
}