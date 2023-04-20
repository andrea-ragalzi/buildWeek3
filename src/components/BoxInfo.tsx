
interface BoxInfoProps {
  title: string;
}

const BoxInfo = ({ title }: BoxInfoProps) => {
  return (
    <div className="d-flex justify-content-between py-2 px-3"> 
       <div className="d-flex justify-content-between"> <h2>{title}</h2> </div>
        <div className="p-2 ">
        </div>
     </div>
  );
};

export default BoxInfo;
