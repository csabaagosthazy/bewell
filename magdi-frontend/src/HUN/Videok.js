import Footer from "./Footer";
import Video from "./components/Video";

function Videok() {
  return (
    <div className="teljes">
      <h1>Videók</h1>
      <Video
        source={"videos/Maxime_Pioca_1_2.mp4"}
        type={"video/mp4"}
        alt={"A video about treatment"}
      />
      <Video
        source={"videos/Magdi_pioca_2_8.mp4"}
        type={"video/mp4"}
        alt={"A video about treatment"}
      />
      <Video
        source={"videos/Magdi_Pioca_3_6.mp4"}
        type={"video/mp4"}
        alt={"A video about treatment"}
      />
      <Video
        source={"videos/Pioca_kis_film_4.mp4"}
        type={"video/mp4"}
        alt={"A video about treatment"}
      />
      <Video
        source={"videos/Piocas_Konyv_3.mp4"}
        type={"video/mp4"}
        alt={"A video about treatment"}
      />
      <Footer />
    </div>
  );
}

export default Videok;
