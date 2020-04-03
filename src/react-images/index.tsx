import * as React from "react";
import Carousel, { Modal, ModalGateway } from "react-images";

export default () => {
  const [modalIndex, setModalIndex] = React.useState(0);
  const [modalIsOpen, toggleModal] = React.useState(false);
  const images = [
    {
      source: "https://placehold.jp/cccccc/888888/150x150.png?text=Sample1",
      caption: "Smaple1"
    },
    {
      source: "https://placehold.jp/cccccc/888888/150x150.png?text=Sample2",
      caption: "Sample2"
    },
    {
      source: "https://placehold.jp/cccccc/888888/150x150.png?text=Sample3",
      caption: "Sample3"
    }
  ];

  return (
    <div>
      <div>
        {images.map((image, i) => (
          <div
            key={image.source}
            onClick={() => {
              setModalIndex(i);
              toggleModal(true);
            }}
          >
            <img src={image.source} alt={image.caption} />
          </div>
        ))}
      </div>
      <ModalGateway>
        {modalIsOpen ? (
          <Modal
            closeOnBackdropClickBoolean
            allowFullscreen={false}
            onClose={() => toggleModal(false)}
          >
            <Carousel
              currentIndex={modalIndex}
              frameProps={{ autoSize: "height" }}
              views={images}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
};
