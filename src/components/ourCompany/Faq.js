import React, { useState } from 'react';

const AccordionBollard = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="py-4">
      <div className={`${isOpen ? 'text-[#ff8000] flex items-center gap-2 font-semibold text-lg  cursor-pointer' : 'flex items-center gap-2 text-lg  cursor-pointer'}`} onClick={toggleAccordion}>
        <svg className={`${isOpen ? 'w-4 h-4 rotate-90' : 'w-4 h-4'}`} xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
        <span>{title}</span>
      </div>
      {isOpen && (
        <div className="pl-8 space-y-2 text-lg">
          {content}
        </div>
      )}
    </div>
  );
};

const AccordionSafety = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleAccordion = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="py-4">
        <div className={`${isOpen ? 'text-[#ff8000] flex items-center gap-2 font-semibold text-lg cursor-pointer' : 'flex items-center gap-2 text-lg  cursor-pointer'}`} onClick={toggleAccordion}>
          <svg className={`${isOpen ? 'w-4 h-4 rotate-90' : 'w-4 h-4'}`} xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
          <span>{title}</span>
        </div>
        {isOpen && (
          <div className="pl-8 space-y-2 text-lg">
            {content}
          </div>
        )}
      </div>
    );
};

const AccordionConstructed = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleAccordion = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="py-4">
        <div className={`${isOpen ? 'text-[#ff8000] flex items-center gap-2 font-semibold text-lg  cursor-pointer' : 'flex items-center gap-2 text-lg cursor-pointer'}`} onClick={toggleAccordion}>
          <svg className={`${isOpen ? 'w-4 h-4 rotate-90' : 'w-4 h-4'}`} xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
          <span>{title}</span>
        </div>
        {isOpen && (
          <div className="pl-8 space-y-2 text-lg">
            {content}
          </div>
        )}
      </div>
    );
  };

const AccordionProtection = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleAccordion = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="py-4">
        <div className={`${isOpen ? 'text-[#ff8000] flex items-center gap-2 font-semibold text-lg  cursor-pointer' : 'flex items-center gap-2 text-lg cursor-pointer'}`} onClick={toggleAccordion}>
          <svg className={`${isOpen ? 'w-4 h-4 rotate-90' : 'w-4 h-4'}`} xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
          <span>{title}</span>
        </div>
        {isOpen && (
          <div className="pl-8 space-y-2 text-lg">
            {content}
          </div>
        )}
      </div>
    );
};
const AccordionBuilding = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleAccordion = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="py-4">
        <div className={`${isOpen ? 'text-[#ff8000] flex items-center gap-2 font-semibold text-lg  cursor-pointer' : 'flex items-center gap-2 text-lg cursor-pointer'}`} onClick={toggleAccordion}>
          <svg className={`${isOpen ? 'w-4 h-4 rotate-90' : 'w-4 h-4'}`} xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
          <span>{title}</span>
        </div>
        {isOpen && (
          <div className="pl-8 space-y-2 text-lg">
            {content}
          </div>
        )}
      </div>
    );
};

  
const Faq = () => {
  return (
    <div className="py-10 w-11/12 mx-auto space-y-6">
      <h1 className="text-4xl tracking-wide">Frequently Asked Questions</h1>

      <div className='divide-y divide-gray-200'>
        <p className=' py-4 text-[#ff8000] font-bold text-2xl'>
        We hope this website has been of use and answered some questions. If you have further questions or would like prices on our range, please do not hesitate to contact our friendly team.
        </p>

        <div className="divide-y divide-gray-200">
            <AccordionBollard
            title="What is a bollard?"
            content={
                <>
                <p>
                    Bollards are also known as called Security Posts; provide security, protection from vehicle ramming, traffic control, and pedestrian safety.
                    </p>
                    <p>
                    Bollard styles range from utilitarian to aesthetically - designed safety barriers that add colour, texture and architectural interest while maintaining safety, security and protection of property.
                    </p>
                    <p>
                    As designers of projects, architects, engineers require high quality security solutions that meet the strict guidelines of their requirements.
                    </p>
                    <p>
                    At Australian Bollards we strive to make this job easier when it comes to security bollards, essential to any public or private building with access to both vehicles and pedestrians.
                    </p>
                    <p>
                    Protection doesn't have to mean unattractive pipes sticking out of the ground.
                    </p>
                    <p>
                    All of our finishes are bright stainless steel; zinc coated mild steel, galvanised or powder coat colours with architecture fill that fit the most demanding environmental needs.
                    </p>
                </>
            }
            />

            <AccordionSafety
            title="Are there any accessories for safety bollards?"
            content={
                <>
                <p>
                Yes, about the only accessory available is the Bollard Sleeve. This sleeve is hollow plastic injection moulded cover that is usually capped off on the top end and designed to slide over solid steel Safety Bollards.
                </p>
                <p>
                The intended use for the Bollard Sleeve is to help reduce damage to the vehicles, and to the bollard, in the event they collide or simply make an older solid style bollard look like new and increase its visibility. These sleeves also work well with heavy steel bollards in industrial applications that are large diameter pipe filled with concrete. Sleeves are perfect in this application as they are designed to fit over just about any diameter pipe and can be trimmed to length. Once installed, the sleeve gives a plain concrete filled safety bollard an attractive cosmetic facelift that will add to the aesthetics of any building or facility.
                </p>
                    
                </>
            }
            />

            <AccordionConstructed
            title=" How is a bollard constructed?"
            content={
                <>
                <p>
                Heavy and medium duty bollards are typically constructed from heavy or thin steel pipe depending on the application. Heavier built units will come with square welded base plate that usually has pre-drilled holes for mounting it to the floor. Pre-built steel bollards usually are only available in safety yellow unless specified otherwise.
                </p>
                <p>
                Economy bollards are made of plastic and do NOT offer the protection that solid steel units do. Plastic units are more for visual safety awareness rather than impact protection and are usually available in a few more colours than steel bollards.
                </p>
                <p>
                Australian Bollards manufactures from four main material types;
                    <div className='flex flex-col space-y-2 text-lg mt-2'>
                        <label>
                        1 - Cast Aluminium
                        </label>
                        <label>
                        2 - Extruded Aluminium
                        </label>
                        <label>
                        3 - Stainless Steel
                        </label>
                        <label>
                        4 - Galvanised Metal
                        </label>
                    </div>
                </p>
                <p>
                Each of these bollard materials has its own unique characteristics and properties that make the bollard suitable for a particular application. Please contact us to receive an outline for some of these unique bollard material properties and the application the bollards are best suited for. Our bollards are manufactured to high quality standards to be durable, stylish, tough and secure, ensuring any of our bollards can be used in a park, public street or building environment.
                </p>
                </>
            }
            />

            <AccordionBuilding
            title="What are the personal, equipment and building applications?"
            content={
                <>
                <p>
                With safety (OH&S) and security being key issues in today’s world and applicable to every business, bollards are the ultimate 24/7 solution for either restricting building access or to prevent serious injuries and costly accidents from occurring.
                </p>
                <p>
                Safety bollards can be used in virtually every application to protect employee work areas, providing visual awareness and physical security to personnel working in the same areas where rolling stock and other hazardous equipment are being utilised. Bollards can be used in the same way to protect machinery and buildings from being damaged. Common building applications include inner building support protection, overhead door opening protection, and to protect corners and walls of buildings or anywhere that building damage could occur.
                </p>
                </>
            }
            />
            
            <AccordionProtection
            title="What are the security and protection benefits?"
            content={
                <>
                <p>
                Over the last few years, there has been an increased use of security bollard to better protect people, property and doorways of buildings around the clock as they are an effective safety measure.
                </p>
                <p>
                Bollards are more commonly being used to direct both pedestrian and vehicle traffic, mark parking and protect buildings. Bollards are also commonly used to protect doorways; placement of this type of security obstacle means the doorway is safer from the threat of moving vehicle.
                </p>
                </>
            }
            />
        </div>
      </div>

      
    </div>
  );
};

export default Faq;
