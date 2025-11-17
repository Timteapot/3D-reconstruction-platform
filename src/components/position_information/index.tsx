import React, { useState } from "react";

interface ImageType {
  url: string;
  name: string;
}

export default function PositionInformation() {
  const [images, setImages] = useState<ImageType[]>([]);
  const [outputPath, setOutputPath] = useState("D:\\MVSsample\\spause");
  const [mvsPath, setMvsPath] = useState("D:\\MVSsample\\spause\\sample.mvs");

  // 处理图片导入
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    const newImages: ImageType[] = Array.from(files).map((file) => ({
      url: URL.createObjectURL(file),
      name: file.name,
    }));
    setImages(newImages);
  };

  // 处理.mvs文件导入
  const handleMvsUpload = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files?.[0];
    if (file && file.name.endsWith(".mvs")) {
      setMvsPath(file.name);
      alert(`已导入文件：${file.name}`);
    } else {
      alert("请选择正确的 .mvs 文件！");
    }
  };

  return (
    <>
      <div className="relative flex w-full min-h-screen bg-white text-gray-800 font-sans">
        {/* 左侧栏 */}
        <div className="w-[50px] h-[20%] bg-gray-600 text-white flex justify-center items-center writing-[vertical-rl] text-[upright] tracking-wider rounded-bl-lg">
          <span>位姿信息</span>
        </div>

        {/* 主内容区 */}
        <div className="relative flex-1 p-[40px_80px] flex flex-col gap-10 border border-gray-800 rounded-bl-lg">
          {/* 导入图片 */}
          <section className="flex flex-col items-center gap-4">
            <button
              className="absolute top-0 left-0 bg-gray-100 border border-gray-400 rounded-md p-2 px-4 cursor-pointer transition duration-200 hover:bg-gray-200"
              onClick={() => document.getElementById("imageInput")!.click()}
            >
              导入图片
            </button>
            <input
              type="file"
              id="imageInput"
              accept="image/*"
              multiple
              onChange={handleImageUpload}
              style={{ display: "none" }}
            />
            <div className="grid grid-cols-4 gap-4 w-4/5">
              {images.length > 0
                ? images.map((img, i) => (
                  <div key={i} className="w-full aspect-[4/3] border border-gray-400 rounded-md overflow-hidden bg-gray-50 flex items-center justify-center">
                    <img src={img.url} alt={img.name} className="w-full h-full object-cover" />
                  </div>
                ))
                : Array(8).fill(null).map((_, i) => (
                  <div key={i} className="w-full aspect-[4/3] border border-gray-400 rounded-md bg-gray-100" />
                ))}
            </div>
          </section>

          {/* 生成位姿 */}
          <section className="flex flex-row items-center justify-center gap-3">
            <button className="bg-gray-100 border border-gray-400 rounded-md py-2 px-4 cursor-pointer hover:bg-gray-200">生成位姿</button>
            <input
              type="text"
              className="flex-1 border border-gray-400 rounded-md p-2"
              value={outputPath}
              onChange={(e) => setOutputPath(e.target.value)}
            />
            <div className="flex flex-col gap-4">
              <button className="bg-gray-100 border border-gray-400 rounded-md py-2 px-4 cursor-pointer hover:bg-gray-200">下载</button>
              <button className="bg-gray-100 border border-gray-400 rounded-md py-2 px-4 cursor-pointer hover:bg-gray-200">下一步</button>
            </div>
          </section>

          {/* 跳过导入 */}
          <section className="flex flex-row items-center justify-center gap-3">
            <button className="bg-gray-100 border border-gray-400 rounded-md py-2 px-4 cursor-pointer hover:bg-gray-200">跳过以上直接导入</button>
            <input
              type="text"
              className="flex-1 border border-gray-400 rounded-md p-2"
              value={mvsPath}
              onChange={(e) => setMvsPath(e.target.value)}
            />
            <label className="text-xs text-gray-500 italic ml-1">限 .mvs 文件</label>
            <input
              type="file"
              id="mvsInput"
              accept=".mvs"
              style={{ display: "none" }}
              onChange={handleMvsUpload}
            />
            <div className="flex flex-col gap-4">
              <button
                className="bg-gray-100 border border-gray-400 rounded-md py-2 px-4 cursor-pointer hover:bg-gray-200"
                onClick={() => document.getElementById("mvsInput")!.click()}
              >
                导入
              </button>
              <button className="bg-gray-100 border border-gray-400 rounded-md py-2 px-4 cursor-pointer hover:bg-gray-200">下一步</button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}