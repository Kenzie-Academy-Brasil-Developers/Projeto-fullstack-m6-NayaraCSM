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

  const getUserBackgroundColor = (userId: number) => {
    const colors = [
      "#E34D8C",
      "#C04277",
      "#7D2A4D",
      "#7000FF",
      "#5200E3",
      "#36007D",
      "#349974",
      "#2A7D5F",
      "#153D2E",
      "#6100FF",
      "#5700E3",
      "#30007D",
    ];

    const colorIndex = userId % colors.length;

    return colors[colorIndex];
  };

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
        const backgroundColor = getUserBackgroundColor(comment.user.id);
        return (
          <li key={comment.id}>
            <div>
              <span style={{ backgroundColor: backgroundColor }}>
                {comment.user.name.substring(0, 1)}
              </span>
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
