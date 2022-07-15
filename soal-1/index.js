const produk = [
  {
    id_produk: 1,
    name_produk: "Huawei P30 Pro",
  },
  {
    id_produk: 2,
    name_produk: "Huawei Nova 5T",
  },
];

const stok = [
  {
    id_produk: 1,
    qty: 15,
  },
  {
    id_produk: 1,
    qty: 6,
  },
  {
    id_produk: 2,
    qty: 4,
  },
  {
    id_produk: 2,
    qty: 18,
  },
];

produk.forEach((data, index) => {
  const s = {
    nama_produk: data.name_produk,
    total_produk: stok
      .filter((s) => s.id_produk === data.id_produk)
      .map((q) => q.qty)
      .reduce((prev, curr) => prev + curr, 0),
  };
});

const arr = {
  hasil: [
    ...produk.map((data) => {
      const s = {
        nama_produk: data.name_produk,
        total_produk: stok
          .filter((s) => s.id_produk === data.id_produk)
          .map((q) => q.qty)
          .reduce((prev, curr) => prev + curr, 0),
      };
      return s;
    }),
  ],
};

console.log(arr);
