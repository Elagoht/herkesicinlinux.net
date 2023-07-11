type ILink = `http${'s' | ''}://${string}`

interface IStore {
  name: string
  link: ILink
}

export interface IProject {
  title: string
  desc: string[]
  link: ILink
  stores?: IStore[]
  images: string[]
}

export const projects: IProject[] = [
  {
    title: "Make Endeavour OS Great",
    desc: [
      `Endeavor OS zaten harika bir işletim sistemi, ancak kendisini "terminal merkezli" bir dağıtım olarak tanımlıyor. Hiç kimse yeni gelen birine Arch tabanlı bir dağıtım öneremez. Ancak Arch Linux, AUR adında harika bir fırsat sunuyor. Endeavour OS, Arch'ı kurmayı kolaylaştırıyor, bu yüzden onu yeni gelenler için daha uygun hale getirmek istedim.`,
      "Bu uygulama esas olarak GNOME DE kullanıcılarını hedefler, ancak her zaman GNOME dışında başka seçenekler de seçebilirsiniz. Ancak birincil hedefim, kullanıcılar için GNOME deneyimini geliştirmek. Yakın gelecekte diğer DE veya WM kullanıcıları için i3 gibi seçenekler geliştirebilirim."
    ],
    link: "https://github.com/Elagoht/MakeEndeavourOSGreat",
    stores: [
      {
        name: "AUR",
        link: "https://aur.archlinux.org/make-endeavouros-great-git.git"
      }
    ],
    images: [
      "https://github.com/Elagoht/MakeEndeavourOSGreat/raw/dev/Screenshots/mainpage.png",
      "https://github.com/Elagoht/MakeEndeavourOSGreat/raw/dev/Screenshots/gnomesettings.png",
      "https://github.com/Elagoht/MakeEndeavourOSGreat/raw/dev/Screenshots/gnomeextensions.png",
      "https://github.com/Elagoht/MakeEndeavourOSGreat/raw/dev/Screenshots/appearance.png",
      "https://github.com/Elagoht/MakeEndeavourOSGreat/raw/dev/Screenshots/variables.png",
      "https://github.com/Elagoht/MakeEndeavourOSGreat/raw/dev/Screenshots/shell.png",
      "https://github.com/Elagoht/MakeEndeavourOSGreat/raw/dev/Screenshots/gaming.png"
    ]
  }
]
