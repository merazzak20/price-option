import { LineChart as LChart, Line, XAxis, YAxis } from "recharts";
const LineChart = () => {
  const studentData = [
    {
      id: 1,
      name: "Alice",
      mathMarks: 78,
      physicsMarks: 82,
      chemistryMarks: 74,
    },
    { id: 2, name: "Bob", mathMarks: 85, physicsMarks: 79, chemistryMarks: 88 },
    {
      id: 3,
      name: "Charlie",
      mathMarks: 92,
      physicsMarks: 91,
      chemistryMarks: 89,
    },
    {
      id: 4,
      name: "David",
      mathMarks: 88,
      physicsMarks: 86,
      chemistryMarks: 90,
    },
    { id: 5, name: "Eve", mathMarks: 76, physicsMarks: 80, chemistryMarks: 82 },
    {
      id: 6,
      name: "Frank",
      mathMarks: 95,
      physicsMarks: 93,
      chemistryMarks: 92,
    },
    {
      id: 7,
      name: "Grace",
      mathMarks: 83,
      physicsMarks: 84,
      chemistryMarks: 79,
    },
    {
      id: 8,
      name: "Heidi",
      mathMarks: 90,
      physicsMarks: 87,
      chemistryMarks: 85,
    },
    {
      id: 9,
      name: "Ivan",
      mathMarks: 87,
      physicsMarks: 89,
      chemistryMarks: 84,
    },
    {
      id: 10,
      name: "Judy",
      mathMarks: 80,
      physicsMarks: 78,
      chemistryMarks: 76,
    },
  ];
  console.log(studentData);

  return (
    <div>
      <LChart width={400} height={400} data={studentData}>
        <XAxis dataKey={"name"} />
        <YAxis />
        <Line dataKey={"mathMarks"} stroke="red"></Line>
        <Line dataKey="physicsMarks" stroke="green" />
        <Line dataKey="chemistryMarks" stroke="blue" />
      </LChart>
    </div>
  );
};

export default LineChart;
