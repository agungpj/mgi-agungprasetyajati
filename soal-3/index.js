const arrayofobjects = [
  { nama: "Smith", hobi: "Self Service" },
  { nama: "Dio", hobi: "Design Grafis" },
  { nama: "Agung", hobi: "Bermain Game" },
];

const hasil = async (req, res) => {
  try {
    const result = [
      {
        nama: arrayofobjects[arrayofobjects.length - 1].nama,
        hobi: arrayofobjects[0].hobi,
      },
    ];
    console.log(result);
  } catch (error) {}
};

// export default hasil;
hasil();
