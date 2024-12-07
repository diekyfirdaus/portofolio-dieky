import { useState } from 'react';
import Globe from 'react-globe.gl';

import Button from '../components/Button.jsx';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(' adrian@jsmastery.pro');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/foto-formal.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Tentang Saya</p>
              <p className="grid-subtext">
                Perkenalkan nama saya Dieky Firdaus Kurniawan. Dengan pengalaman lebih dari 12 tahun, saya telah
                mengasah keterampilan saya sehingga dapat bekerja secara efektif.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/diki-universal2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Kepribadian</p>
              <p className="grid-subtext">
                Saya juga memiliki sifat disiplin, rajin dan suka belajar hal baru. Saya tertarik untuk bekerja kreatif
                dan inovatif di tempat baru.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 40, lng: -100, text: 'Rjieka, Croatia', color: 'white', size: 15 }]}
              />
            </div>
            <div>
              <p className="grid-headtext">Tempat, tanggal lahir</p>
              <p className="grid-subtext">Surabaya, 13 - Oktober - 1996. Indonesia</p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/diki-kecil.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Hobi</p>
              <p className="grid-subtext">
                Hobi saya mencakup berbagai aktivitas yang memperkaya hidup dan memberikan keseimbangan. Saya menyukai
                musik dan menyanyi, yang menjadi sarana untuk menikmati momen kreatif. Selain itu, saya juga aktif dalam
                berolahraga, yang membantu menjaga kebugaran dan energi. Memasak adalah cara saya untuk berkreasi di
                dapur, menciptakan hidangan lezat yang bisa dinikmati bersama orang-orang terdekat. Saya juga memiliki
                ketertarikan mendalam terhadap teknologi, mengikuti perkembangan terbaru dan memanfaatkannya untuk
                meningkatkan efisiensi dan kenyamanan dalam kehidupan sehari-hari.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Hubungi Saya</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                  Dieky.firdaus.k@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
