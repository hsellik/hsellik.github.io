import { Html, useProgress } from '@react-three/drei';

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html
      as="div"
      center
      className="flex justify-center items-center flex-col"
    >
      <span className="canvas-loader"></span>
      <p className="text-sm text-white-100 font-extrabold mt-10">
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default CanvasLoader;
