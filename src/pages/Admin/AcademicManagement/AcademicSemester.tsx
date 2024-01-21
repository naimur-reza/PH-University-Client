import { useGetAllAcademicSemesterQuery } from "../../../redux/features/AcademicSemester/AcademicSemesterApi";

const AcademicSemester = () => {
  const { data } = useGetAllAcademicSemesterQuery(undefined);

  console.log(data);
  return (
    <div>
      <h1> This is AcademicSemester component </h1>
    </div>
  );
};

export default AcademicSemester;
