export interface ICourse {
  title: string
  desc: string
  list: string
  first: string
}

const courses: ICourse[] = [
  {
    title: " Vim Kursu",
    desc: "Terminal metin düzenleyici olarak en çok kullanılan uygulamalardan biri Vim'dir. Vim oldukça güçlü ve kullanması bilindiğinde verimliliği oldukça artıtan ve zamanda tasarruf ettiren bir yazılımdır. Bu video serisini izledikten sonra Vim'i ana metin editörünüz olarak kullanmaya başlayabileceksiniz.",
    list: "PLGIvph8XiC3QS5d9dfotigUlKuDFx6-wV",
    first: "PIYaUPAD3ZY"
  }, {
    title: "MarkDown Kursu",
    desc: "Markdown nihayetinde html'e çevrilen ve HMTL yazma sürecini kolaylaştıran bir formattır. Bu video ile MarkDown öğrenmek çok kolay olacak.",
    list: "PLGIvph8XiC3Sh7g-ffQFtU2CX8DFp_lu7",
    first: "uRM54l1bQrk"
  }, {
    title: "Linux Terminal Kursu",
    desc: "Linux terminal hakkında bilmeniz gereken her türlü bilgiye bu kursun sonunda erişmiş olacaksınız.",
    list: "PLGIvph8XiC3Qze9JPrU4JrwKqBd7E1bah",
    first: "49OO2gD-x8E"
  },
]

export default courses