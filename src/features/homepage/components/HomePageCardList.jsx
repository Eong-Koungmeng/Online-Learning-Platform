import { CardPortrait } from "../../../components/HomePage/CardPortrait";
import HomePageFilter from "../../../components/HomePage/HomePageFilter";
import { useState, useEffect } from "react";
import axios from "axios";
import END_POINTS from "../../../constants/endpoints";

function HomePageCardList() {
  const [courses, setCourses] = useState([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 20;
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(
          `${END_POINTS.COURSE}?_page=${page}&_limit=${itemsPerPage}`
        );
        const coursesData = response.data;

        const linkHeader = response.headers.link;
        if (linkHeader) {
          const totalPagesRegex = /_page=(\d+)&_limit=(\d+)>; rel="last"/;
          const match = linkHeader.match(totalPagesRegex);
          if (match) {
            setTotalPages(parseInt(match[1], 10));
          }

          const coursesWithNames = await Promise.all(
            coursesData.map(async (course) => {
              const creatorName = await fetchCreatorName(
                course.created_by_user_id
              );
              return { ...course, creatorName };
            })
          );

          setCourses((prevCourses) => [...prevCourses, ...coursesWithNames]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const fetchCreatorName = async (userID) => {
      try {
        const userResponse = await axios.get(`${END_POINTS.USER}/${userID}`);
        return userResponse.data.firstName + " " + userResponse.data.lastName;
      } catch (error) {
        console.error("Error fetching creator name:", error);
        return "Unknown";
      }
    };

    fetchCourses();
  }, [page, itemsPerPage]);

  const handleShowMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="mb-14">
      <h1 className=" text-2xl font-bold ms-5 mt-3">Popular</h1>
      <hr className="mx-5 mt-2" />
      <div className="grid grid-cols-4 p-5 gap-4">
        {courses.map((course) => (
          <CardPortrait
            key={course.id}
            showDetail={true}
            course_name={course.course_name}
            vid_id={course.vid_id}
            course_description={course.couse_description}
            created_by={course.creatorName}
            creator_id={course.created_by_user_id}
            created_at={course.created_at}
            category={course.category}
            rank={course.rank}
            posts={course.posts}
            course_expectation={course.course_expectation}
            course_id={course.id}
          />
        ))}
      </div>
      {courses.length > 0 && page < totalPages && (
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mt-4 mx-auto block mb-14"
          onClick={handleShowMore}
        >
          Show More
        </button>
      )}
    </div>
  );
}

export default HomePageCardList;
