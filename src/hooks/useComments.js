import { useEffect, useState } from "react";

const URL = "https://jsonplaceholder.typicode.com/comments";

function useComments() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const httpResponse = await fetch(URL);
        const commentsData = await httpResponse.json();
        setComments(commentsData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchComments();
  }, []);

  // TODO: Hacer unos cambios para que la API no este tan ligada con mi web

  return { comments };
}

export default useComments;
