{
  /**
   * Intersection Type
   */

  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    workerId: string;
    work: () => void;
  };

  function internWork(person: Student & Worker) {
    console.log(person.name, person.workerId);
  }

  internWork({
    name: "kang",
    score: 100,
    workerId: "kang100",
    work: () => {
      console.log("work hard");
    },
  });
}
