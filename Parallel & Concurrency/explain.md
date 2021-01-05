#Analogi Concurrency dan Parallel

Concurrency: 
konkurensi artinya pekerjaannya bisa dilakukan tanpa harus menunggu pekerjaan lain selesai. ibaratkan kita sedang memasak nasi goreng , kita bisa menanak nasi sambil mengupas bawang, karena menanak nasi tidak harus menunggu bawang dikupas, dan mengupas bawang tidak harus menunggu nasi selesai dimasak. Sembari mengupas bawang, kita juga bisa sekali-sekali menengok ke rice cooker untuk mengecek apakah nasi sudah matang? Meskipun yang memasak nasi goreng hanya satu, kedua pekerjaan dapat dimulai tanpa harus menunggu salah satunya selesai, yaitu, nasi dimasak, ditinggal untuk mengupas bawang, lalu entah yang mana yang selesai duluan, tidak ada hubungannya.
Seorang koki bisa saja berganti task setiap 5 menit dari mengecek nasi, mengupas bawang, dan memasak telur. Ketiga task ini bisa dimulai bergantian meskipun selesainya tidak harus menunggu yang lain selesai. Ini yang dinamakan konkurensi. Konkurensi tetap bisa dilakukan meskipun kokinya hanya satu. konkurensi adalah cara menjadwalkan pekerjaan agar bisa dilakukan bersamaan, meskipun itu pekerjaan yang berbeda.

Parallel:
Apabila konkurensi menjawab bagaimana cara pekerjaan dijadwalkan, paralelisme menjawab bagaimana caranya suatu pekerjaan dibagi. Keduanya sama-sama berusaha agar keseluruhan pekerjaan tersebut selesai dengan lebih cepat dan efisien.
Ibaratkan ada pesanan 100 piring nasi goreng dan kita punya 4 koki. Di tahap awal pembuatan nasi goreng lezat kita ini, semua koki mengupas bawang. Di sini kita punya 4 pekerjaan paralel, yaitu mengupas bawang, masing-masing dilakukan oleh seorang koki. Pekerjaannya sama, yaitu mengupas bawang. Namun datanya beda (maksudnya bawangnya).Nah ini maksudnya mengupas bawang secara paralel. Masing-masing koki mengambil satu bawang yang berbeda, dikupas lalu menghasilkan irisan bawang, kemudian lanjut lagi untuk bawang yang lain.

#Summary
 Concurrency itu tentang bagaimana beberapa pekerjaan tersebut dijadwalkan untuk dikerjakan pada rentang waktu yang sama. Sedangkan Parallel itu tentang bagaimana suatu pekerjaan dibagi agar bisa dikerjakan sekaligus bersamaan.