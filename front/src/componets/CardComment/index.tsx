import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useParams } from "react-router-dom";

export interface IComment {
  id: number;
  comment: string;
  createdAt: string;
  user: {
    id: number;
    name: string;
  };
  anouncement: {
    id: number;
  };
}

const CardComment = () => {
  const [comments, setComments] = useState<IComment[]>([]);
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const { data } = await api.get<IComment[]>(`/comment/anouncement/${id}`);

      setComments(data);
    })();
  }, [id]);

  const formatRelativeTime = (createdAt: string | number) => {
    const now = new Date();
    const commentDate = new Date(String(createdAt));
    const timeDifference = now.getTime() - commentDate.getTime();
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    if (daysDifference === 0) {
      return "Hoje";
    } else if (daysDifference === 1) {
      return "Ontem";
    } else {
      return `há ${daysDifference} dias`;
    }
  };

  return (
    <>
      {comments.map((comment) => {
        return (
          <li key={comment.id}>
            <div>
              <i>{comment.user.name.substring(0, 1)}</i>
              <h3>{comment.user.name}</h3>
              <span>{formatRelativeTime(comment.createdAt)}</span>
            </div>
            <p>{comment.comment}</p>
          </li>
        );
      })}
    </>
  );
};

export default CardComment;
