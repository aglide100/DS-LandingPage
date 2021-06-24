import React from "react";
import Fade from "react-reveal/Fade";
const SampleSection1: React.FC = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-96">
        <Fade bottom triggerOnce={false} delay={200}>
          <span>
            onsectetur adipiscing elit. Cras interdum lorem eros, ut viverra
            lacus pharetra a. Maecenas elit lorem, maximus nec tincidunt
            venenatis, aliquam vel ex. Interdum et malesuada fames ac ante ipsum
            primis in faucibus. Maecenas consectetur mi in magna pellentesque
            commodo. Proin et purus nec mi cursus accumsan non ac quam. Quisque
            at augue ac urna convallis ultricies. Cras vehicula ultrices
            efficitur. Morbi eu erat sapien. Donec faucibus lobortis velit, at
            semper dolor scelerisque eu. Nullam et diam at nunc mattis gravida.
            Donec ac iaculis risus. Curabitur auctor rhoncus viverra. Maecenas
            sagittis nulla eget laoreet tincidunt. Phasellus quis tellus sem.
            Cras scelerisque id tortor ut dictum. Nullam interdum orci porttitor
            ornare feugiat. Pellentesque lacinia purus nisl, nec efficitur neque
            hendrerit et. Nullam et dui semper, viverra enim sit amet, dignissim
            sapien. Fusce finibus odio et massa cursus cursus. Vivamus at justo
            ac nisl sagittis fermentum nec vitae turpis.
          </span>
        </Fade>
      </div>
    </div>
  );
};

export default SampleSection1;
