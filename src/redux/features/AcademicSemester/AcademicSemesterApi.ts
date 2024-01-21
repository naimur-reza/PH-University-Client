import { baseApi } from "../../api/baseApi";

export const academicSemesterApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllAcademicSemester: builder.query({
      query: (userInfo) => ({
        url: "/academic-semesters",
        method: "GET",
        body: userInfo,
      }),
    }),
  }),
});

export const { useGetAllAcademicSemesterQuery } = academicSemesterApi;
