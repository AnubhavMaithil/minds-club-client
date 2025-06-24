import Button from "../Button"
import MaxWidthWrapper from "../layout/MaxWidthWrapper"

const HeroSection = () => {
    return (
        <section className="h-screen overflow-hidden">
            <MaxWidthWrapper className="h-full py-10">
                <div className="h-full relative z-20 flex flex-col items-start justify-between">
                    <div className="w-full h-full flex flex-col gap-3 md:gap-5 items-center md:items-start justify-center md:px-40 -mt-20">
                        <h1 className="text-white text-2xl md:text-5xl text-center md:text-left font-semibold md:leading-[60px]">
                            Where Creative Minds <br /> Travel, Meet & Grow.
                        </h1>
                        <Button title="Start your journey" className={"capitalize font-semibold"} onClick={() => { }} />
                    </div>

                    <div className="w-full flex justify-end">
                        <div className="bg-white/30 backdrop-blur-md rounded-xl px-4 py-7 flex-col md:flex-row items-center gap-5 hidden md:flex">
                            <div className="flex items-center">
                                <div className="relative z-10">
                                    <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=776" alt="" className="w-12 h-12 rounded-full border-2 border-white object-cover" />
                                </div>
                                <div className="relative z-20 -ml-4">
                                    <img src="https://plus.unsplash.com/premium_photo-1661373447898-bed76be49ec2?q=80&w=774" alt="" className="w-12 h-12 rounded-full border-2 border-white object-cover" />
                                </div>
                                <div className="relative z-30 -ml-4">
                                    <img src="https://images.unsplash.com/photo-1702700520332-536ae21dc284?q=80&w=774" alt="" className="w-12 h-12 rounded-full border-2 border-white object-cover" />
                                </div>
                            </div>
                            <div>
                                <h2 className="text-white text-sm font-semibold leading-tight">
                                    Handpicked<br />Designers
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute inset-0 z-10 bg-black/40 h-full">
                    <video src="https://ik.imagekit.io/anubhavmaithil/MindsClub/main.mp4" autoPlay muted playsInline loop className="w-full h-full object-cover" />
                </div>
            </MaxWidthWrapper>
        </section>
    )
}

export default HeroSection