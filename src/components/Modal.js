// import React, { useState } from 'react';
// import Modal from 'react-modal';
//
// const PopupMenu = () => {
//     const [isOpen, setIsOpen] = useState(false);
//
//     const openMenu = () => {
//         setIsOpen(true);
//     };
//
//     const closeMenu = () => {
//         setIsOpen(false);
//     };
//
//     return (
//         <div>
//             <button onClick={openMenu}>
//                 {/* Add your burger button icon here */}
//                 <span>Menu</span>
//             </button>
//             <Modal isOpen={isOpen} onRequestClose={closeMenu}>
//                 {/* Add your menu content here */}
//                 <ul>
//                     <li>Item 1</li>
//                     <li>Item 2</li>
//                     <li>Item 3</li>
//                 </ul>
//             </Modal>
//         </div>
//     );
// };
//
// export default PopupMenu;