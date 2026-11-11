import PricingSection from '@/components/common/PricingSection';
import Carousel from "@/components/ui/carousel";
import {slideData} from '@/services/helperService'; 

export default function HomePage() {

    return (
        <>
            <div className="relative overflow-hidden w-full h-full py-20">
                <Carousel slides={slideData} />
            </div>
            <PricingSection />

        </>
    );
}