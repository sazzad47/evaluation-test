import { motion } from "framer-motion";

type BackdropProps = {
    children: React.ReactNode;
    onClick: () => void;
  };
  
  const Backdrop: React.FC<BackdropProps> = ({ children, onClick }) => {
    return (
      <motion.div
        onClick={onClick}
        className="fixed top-0 right-0 w-full h-full bg-[#000000e1] flex justify-center items-center z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {children}
      </motion.div>
    );
  };
  
  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  };
  
  type ModalProps = {
    handleClose: () => void;
    children: React.ReactNode;
    className: string;
  };
  
  const Modal: React.FC<ModalProps> = ({ handleClose, children, className }) => {
    return (
      <Backdrop onClick={handleClose}>
        <motion.div
          onClick={(e) => e.stopPropagation()}
          className={className}
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {children}
        </motion.div>
      </Backdrop>
    );
  };

  export default Modal