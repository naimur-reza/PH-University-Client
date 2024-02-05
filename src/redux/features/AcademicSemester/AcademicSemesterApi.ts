import { baseApi } from "../../api/baseApi";

export const academicSemesterApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllAcademicSemester: builder.query({
      query: (userInfo) => ({
        url: "/academic-semesters",
        method: "GET",
        body: userInfo,
      }),
      transformResponse: (response: any) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
  }),
});

export const { useGetAllAcademicSemesterQuery } = academicSemesterApi;
