import Spinn from "react-bootstrap/Spinner";

export const Spinner = ({ className, ...props }: any) => {
  return (
    <div className={className}>
      <Spinn animation="border" role="status" {...props}>
        <span className="visually-hidden">Loading...</span>
      </Spinn>
    </div>
  );
};
