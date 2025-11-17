import PositionInformation from "../../components/position_information";
import DenseReconstruction from "../../components/dense_reconstruction";
import SurfaceReconstruction from "../../components/surface_reconstruction";
import GridOptimization from "../../components/grid_optimization";
import TextureMapping from "../../components/texture_mapping";

const UpLoad = () => {
  return (
    <>
      <div>
        <div className="contents">
          <PositionInformation />
        </div>
        <div className="contents">
          <DenseReconstruction />
        </div>
        <div className="contents">
          <SurfaceReconstruction />
        </div>
        <div className="contents">
          <GridOptimization />
        </div>
        <div className="contents">
          <TextureMapping />
        </div>
      </div>
    </>
  );
};

export default UpLoad;