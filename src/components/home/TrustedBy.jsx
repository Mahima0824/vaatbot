import React from 'react';
import ScrollVelocity from '../ui/Marquee';
import Section from '../../layout/Section';
import BoldCopy from '../ui/bold-copy';
import data from '../../data/mockdata.json';

const TrustedBy = () => {
    const velocity = 50;
    const logos = data.logos;

    return (
        <Section container={false}>
            <BoldCopy className="text-center" text="Trusted by Leading Companies" />
            <div className="relative">
                <ScrollVelocity
                    className="flex items-center gap-12 px-8 py-4"
                    items={logos}
                    velocity={velocity}
                    parallaxClassName="relative"
                    renderItem={(logo) => (
                        <div key={logo.id} className="flex-shrink-0">
                            <img
                                src={logo.src}
                                alt={logo.alt}
                                className="w-[100px] h-[100px] object-contain grayscale-100 brightness-150 hover:grayscale-0 hover:opacity-100 transition-opacity duration-300"
                                loading="lazy"
                            />
                        </div>
                    )}
                />
            </div>
        </Section>
    );
};

export default TrustedBy;
