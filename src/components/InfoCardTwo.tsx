import { Dot } from "lucide-react";

import { BlogComponentProps } from "@/type/type";

export default function InfoCardTwo({blogContent}:BlogComponentProps) {
    return (
      <div className="container mx-auto">
      {blogContent.map((blog, index) => (
        <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col items-center justify-center h-full">
            <div className="mb-4 ">
              <p>{blog.blogRight}</p>
            </div>
            <div className="relative w-full h-[400px] overflow-hidden p-4 border rounded-3xl">
              <div
                className="bg-center w-full h-full bg-no-repeat rounded-3xl"
                style={{ backgroundImage: `url(${blog.blogRightImage})` }}
              ></div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center h-full">
            <div className="relative w-full h-[400px] overflow-hidden p-4 border rounded-3xl">
              <div
                className="bg-center w-auto h-full bg-no-repeat"
                style={{ backgroundImage: `url(${blog.blogLeftImage})` }}
              ></div>
            </div>
            <div className="mt-4 ">
              <h2 className="flex items-center text-gray-400"><Dot size={48} strokeWidth={3} />{blog.blogHeadline}</h2>
              <p>{blog.blogLeft}</p>
            </div>
          </div>
        </div>
      ))}
      </div>
    );
  }