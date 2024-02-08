import { useParams } from "react-router-dom";

const StudentDetails = () => {
  const { studentId } = useParams<{ studentId: string }>();
  return (
    <div>
      <h1> This is StudentDetails component student id is {studentId} </h1>
    </div>
  );
};

export default StudentDetails;
