import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return (
    <div onClick={props.onClose} className="fixed top-0 left-0 w-full h-full z-20 bg-black/75" />
  );
};

const ModalOverlay = (props) => {
  return (
    <div className="fixed top-[20vh] left-[50%] w-[90%] -translate-x-2/4 text-black bg-white p-4 rounded-xl shadow-md z-30 animate-slideDown md:w-[40rem] md:left-[-10rem]]">
      <div>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
