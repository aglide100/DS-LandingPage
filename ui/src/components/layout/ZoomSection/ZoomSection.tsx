import React from "react";
import Zoom from "react-reveal/Zoom";

export type ZoomSectionProps = {};

const ZoomSection: React.FC<ZoomSectionProps> = () => {
  return (
    <div>
      <Zoom triggerOnce={false} delay={500}>
        <div>
          dsadsa dsa d asd sad asd as dsa dtest Lorem ipsum dolor sit amet
          consectetur adipiscing elit. Cras interdum lorem eros, ut viverra
          lacus pharetra a. Maecenas elit lorem, maximus nec tincidunt
          venenatis, aliquam vel ex. Interdum et malesuada fames ac ante ipsum
          primis in faucibus. Maecenas consectetur mi in magna pellentesque
          commodo. Proin et purus nec mi cursus accumsan non ac quam. Quisque at
          augue ac urna convallis ultricies. Cras vehicula ultrices efficitur.
          Morbi eu erat sapien. Donec faucibus lobortis velit, at semper dolor
          scelerisque eu. Nullam et diam at nunc mattis gravida. Donec ac
          iaculis risus. Curabitur auctor rhoncus viverra. Maecenas sagittis
          nulla eget laoreet tincidunt. Phasellus quis tellus sem. Cras
          scelerisque id tortor ut dictum. Nullam interdum orci porttitor ornare
          feugiat. Pellentesque lacinia purus nisl, nec efficitur neque
          hendrerit et. Nullam et dui semper, viverra enim sit amet, dignissim
          sapien. Fusce finibus odio et massa cursus cursus. Vivamus at justo ac
          nisl sagittis fermentum nec vitae turpis. Etiam et sem quis sapien
          interdum pulvinar a id sem. Ut feugiat dui nec nisl tincidunt
          elementum. Proin accumsan mi sed finibus varius. In placerat, nulla
          eget molestie aliquet, lectus elit semper justo, quis posuere turpis
          ante tempus lorem. Integer eu sollicitudin massa, sit amet convallis
          orci. In eget metus malesuada, tempus quam a, posuere risus. Curabitur
          in velit viverra, vulputate libero quis, elementum enim. Aenean vel
          magna at felis ullamcorper bibendum. Vestibulum urna magna, eleifend
          blandit pellentesque sit amet, facilisis vel leo. Orci varius natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Vestibulum non aliquet nulla. Vestibulum fringilla nisi sit amet
          blandit eleifend. Fusce scelerisque commodo ipsum, sed elementum velit
          malesuada sed. Morbi efficitur tellus ut risus convallis, ac
          condimentum enim convallis. Sed tristique a lectus at faucibus. Nullam
          iaculis neque sapien, feugiat scelerisque dui pulvinar nec. Aenean
          eleifend justo turpis, eu euismod eros tempus in. Aenean erat massa,
          gravida eget dolor et, lobortis rhoncus
        </div>
      </Zoom>
    </div>
  );
};

export default ZoomSection;
