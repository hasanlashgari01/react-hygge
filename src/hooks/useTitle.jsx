import { useEffect } from "react";

export default function useTitle(newTitle) {
  useEffect(() => {
    document.title = document.title + " - " + newTitle;
  }, [newTitle]);
}
