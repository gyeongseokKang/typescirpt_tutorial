{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  function getVideo(id: string): Video {
    return {
      id,
      title: "video",
      url: "https://..",
      data: "byte-data..",
    };
  }
  function getVideoMetaData(id: string): Omit<Video, "url" | "data"> {
    return {
      id: id,
      title: "title",
    };
  }
}
