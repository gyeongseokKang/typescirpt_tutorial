{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  function getVideo2(id: string): Video {
    return {
      id,
      title: "video",
      url: "https://..",
      data: "byte-data..",
    };
  }
  function getVideoMetaData2(id: string): Pick<Video, "id" | "title"> {
    return {
      id: id,
      title: "title",
    };
  }
}
