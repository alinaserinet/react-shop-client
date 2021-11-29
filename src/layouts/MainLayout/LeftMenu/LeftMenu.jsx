import { useEffect } from "react";

function LeftMenu({ setLeftMenuStatus }) {
  
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => document.body.style.overflowY = "auto";
  });

  return (
    <>
      <div
        onClick={() => setLeftMenuStatus(false)}
        className="fixed top-0 left-0 h-full w-full bg-gray-900 opacity-40 z-10">

      </div>
      <div className="fixed h-full w-56 left-0 top-0 bg-white border-r z-20">

      </div>
    </>
  )
}

export default LeftMenu
