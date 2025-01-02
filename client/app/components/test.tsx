const createInnovation = () => {
  const skills = ["Problem Solving", "Clean Code", "Scalability"];

  return skills.reduce((acc, skill) => {
    return acc * implement(skill);
  }, 1);
};
