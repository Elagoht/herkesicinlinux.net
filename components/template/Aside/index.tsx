import { FC } from "react"
import { getLatestContents } from "./getLinks"
import AsideNav from "./AsideNav"

const Aside: FC = () => {

  return <aside>
    <div id="aside-slider">
      <AsideNav title="Son Eklenenler" links={getLatestContents()} />
    </div>
  </aside>
}

export default Aside