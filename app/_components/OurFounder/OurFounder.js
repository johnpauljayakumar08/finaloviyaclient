// import { useEffect } from 'react';

import { FaLinkedin } from "react-icons/fa";
import "./Founder.css";
import Image from 'next/image';
import Link from "next/link";

const OurFounder = () => {
        // useEffect(()=>{
        //     window.scroll(0,0);
        //   })
  return (
   <div className="container-fluid abtparts">
       
         
         <h1 className='py-2 subhead2'>Our Founder</h1>
         <div className="row align-items-center mx-1 mx-lg-5">
           {/* Image Column */}
           <div className="col-sm-12 col-md-6 d-flex justify-content-center mb-3 mb-md-0">
             <Image 
               src='/founder.png'
               alt="Founder" 
               className=" img-fluid ps-0 ps-md-5 ms-0 ms-md-5"
                width={403}
                height={403} 
               style={{ zIndex: 1000 }} 
             />
           </div>
   
           {/* Text Column */}
           <div className="col-sm-12 col-md-6 d-flex flex-column justify-content-center text-center text-md-start">
             <div className='fparts'>
             <h1 className="foundername ">Dr J Vijay Venkatraman</h1>
             <div className="pt-2 founderqualification ">
               MBBS, F. Diab., MBA, FPIPA (UK)<br />
               Managing Director & CEO,<br />
               Oviya MedSafe<br />
               <Link 
                 href="https://www.linkedin.com/in/drjvvr/" 
                 className="text-start text-decoration-none text-dark d-flex justify-content-center justify-content-lg-start align-items-center" 
                 style={{ fontSize: "18px" }}
                 
               >
                 {/* <FontAwesomeIcon icon={faLinkedin} className="linkedicon pe-2"   /> */}
                 <div>
                 <FaLinkedin className="linkedicon"/>
                 </div>

                 <div className="ps-1 pt-1">
                    Get in touch
                 </div>
                 
                 
               </Link>
             </div>
             </div>
             </div>
             <div className='row text-justify founderparas py-3 textjust'>
             <p>
            Dr J Vijay Venkatraman is a Diabetologist, Drug Safety Physician, and
Entrepreneur with 25 years of broad-based experience in Clinical Medicine and
Pharmacovigilance. He holds an MBA in Services Management and is the first
Indian to be conferred the Fellowship of the Pharmaceutical Information &
Pharmacovigilance Association (PIPA), UK.
             </p>
             <p>
             As the Founder & CEO of Oviya MedSafe, a global Pharmacovigilance
consulting and Drug Safety services organization incorporated in Coimbatore,
India, and London, UK, Dr Vijay has been helping pharmaceutical and
biotechnology companies fulfill compliance requirements since 2012.
             </p>
             <p>
             He has served as the Regional Editor (India) for Global Forum, a Drug
Information Association (DIA) publication, since April 2017. Previously, he held
key leadership roles, including Chairman of the Indian Medical Association
(IMA) Headquarters’ Standing Committee for Pharmacovigilance (2021),
Executive Committee Member of the Indian Society for Clinical Research
(ISCR), and Chair of ISCR’s Pharmacovigilance Council from 2015 to 2019.
             </p>
             <p>
             A sought-after thought leader, Dr Vijay is frequently entrusted with
strategic roles in shaping flagship pharmacovigilance conferences. He has also
co-authored two chapters in Springer-published textbooks on
pharmacovigilance. His academic work is complemented by numerous articles
and whitepapers, as well as media features and interviews through which he
actively promotes drug safety awareness among key stakeholders.
             </p>
             <p>
            Dr Vijay has received multiple accolades, including the Leadership
Excellence Award and the State Appreciation Award for Coordinating Academic
Activities from the Indian Medical Association. He remains committed to
advancing global pharmacovigilance practices and building a more connected,
resilient ecosystem for all stakeholders.
             </p>
           </div>
         </div>
         </div>
  )
}

export default OurFounder
