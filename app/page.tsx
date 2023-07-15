import { Metadata } from 'next'
import Image from 'next/image'
import React from 'react'

export const metadata: Metadata = {
  title: "Ana Sayfa | Herkes İçin Linux",
  description: "Herkes İçin Linux'a hoş geldiniz!"
}

const page = () => {
  return <article>
    <h1>Ana Sayfa</h1>
    <h2>Hakkımızda</h2>
    <p>
      Herkes İçin Linux, Türkiye&#39;de Linux kullanımını artırmak,
      eğitimlerle insanların Linux kullanımını kolaylaştırmak ve
      cihazlarını nasıl daha verimli kullanabileceklerini
      öğretmek üzerine kurulmuştur. Herkesin Linux kullanabileceğini
      kanıtlamak istemektedir. Bu nedenle slogan olarak &quot;Genel
      Kullanıcı Kitlesi&quot; seçilmiştir.
    </p><p>
      Bunun yanında açık kaynaklı uygulamalar tanıtıp insanların
      ücretli ve sahipli uygulamalara alternatifler bulmasını da
      hedeflemektedir. Hedeflemekle kalmayıp kendi uygulamalarını da
      geliştirerek bu konuda topluluğa katkıda bulunmaya
      çalışmaktadır.
    </p>
    <h2>Kullanıcı Kitleleri</h2>
    <p>
      Herkes İçin Linux kanalının adını almasını sağlayan en önemli faktör
      gerçekten herkes için olmasıdır. Bunu da içeriklerine verdiği ve
      Herkes İçin Linux YouTube kanalında tanıtımı yapılan içerik kitlesi
      rozetleriyle sağlamaktadır. Üç adet içerik kitlesi rozeti bulunmaktadır:
    </p>
    <div className="flex flex-wrap justify-evenly text-center">
      <figure>
        <Image src="/assets/linuxforeveryone.svg" width={256} height={256} alt="Genel Kullanıcı Kitlesi Amblemi" />
        <figcaption>Genel Kullanıcı Kitlesi</figcaption>
      </figure>
      <figure>
        <Image src="/assets/linuxforsomebody.svg" width={256} height={256} alt="Deneyimli Kullanıcı Kitlesi Amblemi" />
        <figcaption>Deneyimli Kullanıcı Kitlesi</figcaption>
      </figure>
      <figure>
        <Image src="/assets/linuxfornerds.svg" width={256} height={256} alt="Uzman Kullanıcı Kitlesi Amblemi" />
        <figcaption>Uzman Kullanıcı Kitlesi</figcaption>
      </figure>
    </div >
    <p>
      <strong>Genel Kullanıcı Kitlesi:</strong> Herkesin anlayabileceği, kolay düzeydeki
      konuları içerir. Genel bilgiler ve anlatılan komutların giriş düzeyleri bu
      rozet ile belirtilmektedir.
    </p><p>
      <strong>Deneyimli Kullanıcı Kitlesi:</strong> Konu hakkında uzman olmanızı
      gerektirmeyen ancak daha ileri düzey konuları da barındıran içeriklerde
      kullanılmaktadır.
    </p><p>
      <strong>Uzman Kullanıcı Kitlesi:</strong> Temellere çok iyi hakim ve daha önce
      anlatılanları kullanmakta oldukça deneyimli, sorunlarını kendi başına çözebilen ve
      öğrenmeyi öğrenmiş kullanıcılar için yazılmış içerikleri temsil etmektedir.
    </p>
    <h2>Kitlelere Göre Video İçerikler</h2>
    <h3 className="text-center">Genel Kullanıcı Kitlesi İçerikleri</h3>
    <iframe src="https://www.youtube.com/embed/videoseries?list=PLGIvph8XiC3TQStK2wgGOvNDd6rg7AbLz" title="YouTube video player" allowFullScreen>Tarayıcınız bu içeriği desteklemiyor.</iframe>
    <h3 className="text-center">Deneyimli Kullanıcı Kitlesi İçerikleri</h3>
    <iframe src="https://www.youtube.com/embed/videoseries?list=PLGIvph8XiC3TswctNGtDlNRt7nNmRmeI4" title="YouTube video player" allowFullScreen>Tarayıcınız bu içeriği desteklemiyor.</iframe>
    <h3 className="text-center">Uzman Kullanıcı Kitlesi İçerikleri</h3>
    <iframe src="https://www.youtube.com/embed/videoseries?list=PLGIvph8XiC3ShOGgT6crsrEUBwgn16czg" title="YouTube video player" allowFullScreen>Tarayıcınız bu içeriği desteklemiyor.</iframe>
  </article >
}

export default page