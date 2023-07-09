import { FC } from "react"
import { getLatestContents, getMostReads } from "./getLinks"
import AsideNav from "./AsideNav"

const Aside: FC = () => {

  return <aside>
    <div id="aside-slider">
      <AsideNav title="En Çok Okunanlar" links={getMostReads()} />
      <AsideNav title="Son Eklenenler" links={getLatestContents()} />
    </div>
  </aside>
}

export default Aside