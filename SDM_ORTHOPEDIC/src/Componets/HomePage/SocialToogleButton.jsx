// // src/App.jsx

// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faShareAlt } from '@fortawesome/free-solid-svg-icons';
// import { faFacebookF, faTwitter, faInstagram, faYoutube, faTiktok, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

// const SocialToggleButton = () => {
//   const [active, setActive] = useState(false);

//   const toggleButtons = () => {
//     setActive(!active);
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 flex items-center justify-center relative">
//       <div className="relative z-10">
//         <button
//           className={`w-20 h-20 bg-purple-600 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${active ? 'bg-purple-700 shadow-inner' : ''}`}
//           onClick={toggleButtons}
//         >
//           <FontAwesomeIcon icon={faShareAlt} className="text-2xl" />
//         </button>
//         <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-700 ${active ? 'rotate-0' : 'rotate-180'} flex flex-wrap justify-center items-center`}>
//           <a className={`w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 absolute ${active ? 'translate-y-0' : 'translate-y-8'} delay-75`} href="#" style={{ top: '-5rem', left: '-7rem' }}>
//             <FontAwesomeIcon icon={faFacebookF} className="text-2xl" />
//           </a>
//           <a className={`w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 absolute ${active ? 'translate-y-0' : 'translate-y-8'} delay-150`} href="#" style={{ top: '-5rem', left: '7rem' }}>
//             <FontAwesomeIcon icon={faTwitter} className="text-2xl" />
//           </a>
//           <a className={`w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 absolute ${active ? 'translate-y-0' : 'translate-y-8'} delay-225`} href="#" style={{ top: '-10rem', left: '0' }}>
//             <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
//           </a>
//           <a className={`w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 absolute ${active ? 'translate-y-0' : 'translate-y-8'} delay-300`} href="#" style={{ top: '5rem', left: '7rem' }}>
//             <FontAwesomeIcon icon={faYoutube} className="text-2xl" />
//           </a>
//           <a className={`w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 absolute ${active ? 'translate-y-0' : 'translate-y-8'} delay-375`} href="#" style={{ top: '5rem', left: '-7rem' }}>
//             <FontAwesomeIcon icon={faTiktok} className="text-2xl" />
//           </a>
//           <a className={`w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 absolute ${active ? 'translate-y-0' : 'translate-y-8'} delay-450`} href="#" style={{ top: '0', left: '-10rem' }}>
//             <FontAwesomeIcon icon={faLinkedinIn} className="text-2xl" />
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SocialToggleButton;
