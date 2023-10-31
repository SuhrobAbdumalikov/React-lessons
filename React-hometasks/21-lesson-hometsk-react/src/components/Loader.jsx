import { MagnifyingGlass } from "react-loader-spinner";

function Loader() {
  return (
    <div className="mt-28">
      <MagnifyingGlass
        visible={true}
        height="120"
        width="120"
        ariaLabel="MagnifyingGlass-loading"
        wrapperStyle={{}}
        wrapperClass="MagnifyingGlass-wrapper"
        glassColor="#FFFFFF"
        color="#E7CBEB5F"
      />
    </div>
  );
}

export default Loader;
