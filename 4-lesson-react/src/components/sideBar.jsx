import { Fragment } from "react";

//==========>> simple <<===========//
// const SideBar = ({ mainTitle, children }) => {
//   return (
//     <div className="container">
//       <div className="mainTitle">
//       <i class="fa-solid fa-check fa-xl"></i>
//       <h1 className="title">{mainTitle}</h1>
//       </div>
//       <div className="options">
//         {children.map((el) => {
//           return (
//             <div className="check">
//               <i class="fa-solid fa-circle-arrow-right"></i>
//               <p>{el}</p>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };
// export default SideBar;

//============>> great <<==============//
const SideBar = ({ props }) => {
  return (
    <div className="container">
      {props.map((section) => {
        return (
          <>
            <h1 className="title">{section.header}</h1>
            <Fragment className="options">
              {section.options.map((option) => {
                return <p className="">{option}</p>;
              })}
            </Fragment>
          </>
        );
      })}
    </div>
  );
};
export default SideBar;
