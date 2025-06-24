import MaxWidthWrapper from '../layout/MaxWidthWrapper'
import Button from '../Button'

const TheOneSection = () => {
    return (
        <section className="min-h-screen w-full overflow-hidden rounded-md py-14">
            <MaxWidthWrapper>
                <div className="flex flex-col gap-10">
                    <div className="flex flex-col items-start justify-start gap-3 h-full">
                        <h1 className="uppercase">The One</h1>
                        <h1 className="text-2xl md:text-4xl leading-relaxed font-bold">
                            Community base creative <br />
                            agency
                        </h1>
                    </div>
                    <div className="relative">
                        <div className="rounded-4xl overflow-hidden shadow-sm border border-gray-200 h-[550px] md:h-fit md:aspect-video relative">
                            <img src="https://ik.imagekit.io/anubhavmaithil/MindsClub/TheOne.png" alt="" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-black/20 w-full h-full flex items-center justify-center hover:bg-black/50 transition-all duration-300 ease-in-out">
                                <Button title="Explore The One" className="text-black font-medium text-base" />
                            </div>
                        </div>
                    </div>
                </div>
            </MaxWidthWrapper>

        </section>
    )
}

export default TheOneSection