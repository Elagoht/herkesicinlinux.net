import { getAllCategories, getCategoryIcon } from '@/utils/category'
import { capitalizeTurkish } from '@/utils/turkish'
import { Github, GraduationCap, Instagram, Linkedin, Mail, Plane, Youtube } from 'lucide-react'
import React, { FC } from 'react'

const Footer: FC = () => {
  return <footer>
    <div id="footer-container">
      <div className="text-center">
        <h1>Herkes İçin Linux</h1>
        <b className="text-bronze-500">Genel Kullanıcı Kitlesi</b>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 m-4 mb-0">
        <section>
          <h2>Bağlantılar</h2>
          <ul>
            <a target="_blank" rel="noreferrer" href="https://www.youtube.com/@herkesicinlinux"><li><Youtube /> Youtube</li></a>
            <a target="_blank" rel="noreferrer" href="https://www.udemy.com/user/furkan-baytekin/"><li><GraduationCap /> Udemy</li></a>
            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/herkesicinlinux/"><li><Instagram /> Instagram</li></a>
            <a target="_blank" rel="noreferrer" href="https://github.com/Herkes-Icin-Linux/"><li><Github /> Github / Herkes İçin Linux</li></a>
            <a target="_blank" rel="noreferrer" href="https://github.com/Elagoht/"><li><Github /> Github / Elagoht</li></a>
          </ul>
        </section>
        <section>
          <h2>İletişim</h2>
          <ul>
            <a target="_blank" rel="noreferrer" href="mailto:furkanbaytekin@gmail.com"><li><Mail /> e-Posta</li></a>
            <a target="_blank" rel="noreferrer" href="https://t.me/Elagoht"><li><Plane /> Telegram</li></a>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/furkan-baytekin"><li><Linkedin /> LinkedIn</li></a>
          </ul>
        </section>
        <section>
          <h2>İçerikler</h2>
          <ul>
            {getAllCategories().map((category, index) => (
              <a key={index} href={"/kategori/" + category}><li>{getCategoryIcon(category)} {capitalizeTurkish(category)}</li></a>
            ))}
          </ul>
        </section>
      </div>
    </div>
  </footer>
}

export default Footer