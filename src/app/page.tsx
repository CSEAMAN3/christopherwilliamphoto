import Image from 'next/image'
import Tman from "../../public/images/tman.jpg"
import Fee from "../../public/images/fee.jpg"
import Lou from "../../public/images/louise.jpg"


export default function Home() {
  return (
    <main className="min-h-screen bg-stone-300">
      <div className="h-[500px] flex overflow-x-scroll gap-2 py-2 mb-24">
         <div className="min-w-[100px] h-[500px] relative">
            <Image 
              src={Lou}
              alt="anime"
              fill={true}
              className="object-cover h-full"
            />
          </div>
         
          <div className="min-w-[300px] h-[500px] relative"> 
            <Image 
              src={Tman}
              alt="anime"
              fill={true}
              className="object-cover h-full"
            />
          </div> 

          <div className="min-w-[300px] h-[500px] relative">
            <Image 
              src={Fee}
              alt="anime"
              fill={true}
              className="object-cover h-full"
            />
          </div>

          <div className="min-w-[300px] h-[500px] relative">
            <Image 
              src={Lou}
              alt="anime"
              fill={true}
              className="object-cover h-full"
            />
          </div>

          <div className="min-w-[300px] h-[500px] relative">
            <Image 
              src={Tman}
              alt="anime"
              fill={true}
              className="object-cover h-full"
            />
          </div>
      </div>

      <section className="px-8 pb-24 max-w-[60ch]">
        <h4 className="font-bold font-mont tracking-wide text-2xl text-slate-600 mb-4">What We Do...</h4>
        <p className="text-slate-600 mb-4">We specialise in commercial photography and videography for businesses throughout Norfolk, Cambridge and Suffolk.</p>
        <p className="text-slate-600 mb-4">However, we&#39;re not just photographers and videographers; we&#39;re storytellers committed to capturing the essence of your business.</p>
        <p className="text-slate-600">Our services are tailored to your requirements. We offer one off shoots to monthly retainers designed to help businesses build regular professional social media content.</p>
      </section>
    </main>
  );
}
